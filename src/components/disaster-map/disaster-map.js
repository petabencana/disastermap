import {inject, bindable, customElement} from 'aurelia-framework';
import * as L from 'leaflet';
import $ from 'jquery';
import {MapLayers} from './map-layers';
import {MapUtility} from './map-utility';

//start-aurelia-decorators
@customElement('disaster-map')
@inject(MapLayers, MapUtility)
//end-aurelia-decorators
export class DisasterMap {
  //start-aurelia-decorators
  @bindable locale;
  @bindable querycity;
  @bindable querylanguage;
  @bindable querytab;
  @bindable reportid;
  @bindable resetTab;
  //end-aurelia-decorators

  constructor(MapLayers, MapUtility) {
    this.layers = MapLayers;
    this.utility = MapUtility;
    this.cities = [];
    for (let city in this.utility.config.instance_regions) {
      this.cities.push(city);
    }
    this.selected_city = null;
  }

  togglePane(ref, action, clearSelection) {
    let self = this;
    if (action === 'hide') {
      $(ref).fadeOut(200);
      if (ref === '#infoPane') {
        if (clearSelection) {
          if (self.layers.selected_report) {
            self.reportid = null;
            history.pushState({city: self.selected_city, report_id: null}, 'city', 'map/' + self.selected_city);
            self.layers.revertIconToNormal(self.layers.selReportType);
          }
          if (self.layers.selected_extent) {
            self.layers.selected_extent.target.setStyle(self.layers.mapPolygons.normal);
            self.layers.selected_extent = null;
          }
          if (self.layers.selected_gauge) {
            self.layers.selected_gauge.target.setIcon(self.layers.mapIcons.gauge_normal(self.layers.gaugeIconUrl(self.layers.selected_gauge.target.feature.properties.observations[self.layers.selected_gauge.target.feature.properties.observations.length - 1].f3)));
            self.layers.selected_gauge = null;
          }
          self.layers.popupContent = {};
        }
      } else if (ref === '#sidePane') {
        $('.menuBtn').toggleClass('active');
      }
    } else if (action === 'show') {
      if (ref === '#infoPane') {
        if ($('#closeSidePane').hasClass('active')) {
          $('.menuBtn').toggleClass('active');
          $('#sidePane').fadeOut(200);
        }
        if (clearSelection && $('#modalChart').get(0)) {
          $('#chart-pane').empty();
        }
      } else if (ref === '#sidePane') {
        // swap menu button icon (cancel | addReport)
        $('.menuBtn').toggleClass('active');
        // set tab to queried tab || default 'report'
        let tabToOpen = (self.querytab) ? self.querytab : 'info';
        self.querytab = null; //set to null after url fetch
        self.resetTab(tabToOpen);
        // hide infoPane if open
        self.togglePane('#infoPane', 'hide', true);
        // update browser url
        if ((self.querylanguage || self.querytab) && !self.reportid) {
          if (!self.selected_city && self.utility.isCitySupported(self.querycity)) {
            self.selected_city = self.querycity; //selected_city given a value from params only when viewReports / changeCity run
            history.pushState({city: self.selected_city, report_id: null}, 'city', 'map/' + self.selected_city);
          } else if (self.selected_city) {
            history.pushState({city: self.selected_city, report_id: null}, 'city', 'map/' + self.selected_city);
          } else {
            history.pushState({city: null, report_id: null}, 'city', 'map');
          }
        }
      }
      $(ref).fadeIn(200);
    }
  }

  // Load all reports for a given city, or zoom to single queried report id
  viewReports(cityName, pushState) {
    let self = this;

    self.utility.changeCity(cityName, self.reportid, self.map, self.layers, self.togglePane)
    .then(() => {
      // Show timeperiod notification
      self.layers.getStats(self.utility.parseCityObj(cityName, false).region)
      .then(stats => {
        let msg = this.locale.reports_stats.replace('{reportsplaceholder}', stats.reports).replace('{hoursplaceholder}', stats.timeperiod / 3600);
        self.utility.statsNotification(msg);
      });

      if (self.reportid && self.layers.activeReports.hasOwnProperty(self.reportid)) {
        //Case 1: Active report id in current city
        if (self.layers.activeReports[self.reportid].feature.properties.tags.instance_region_code === self.utility.parseCityObj(cityName, false).region) {
          self.layers.activeReports[self.reportid].fire('click');
          self.selected_city = cityName;
          if (pushState) {
            history.pushState({city: cityName, report_id: self.reportid}, 'city', 'map/' + cityName + '/' + self.reportid);
          }
        }
      } else if (self.reportid && !self.layers.activeReports.hasOwnProperty(self.reportid)) {
        //Case 2: No active report, check availability on server
        self.layers.addSingleReport(self.reportid)
        .then(report => {
          let reportRegion = self.layers.activeReports[self.reportid].feature.properties.tags.instance_region_code;
          if (reportRegion === self.utility.parseCityObj(cityName, false).region) {
            //Case 2A: in current city?
            report.fire('click');
            self.selected_city = cityName;
            if (pushState) {
              history.pushState({city: cityName, report_id: self.reportid}, 'city', 'map/' + cityName + '/' + self.reportid);
            }
          } else {
            //Case 2B: fly to city with report id
            let queryReportCity = self.utility.parseCityName(reportRegion, self.cities);
            self.utility.changeCity(queryReportCity, self.reportid, self.map, self.layers, self.togglePane)
            .then(() => {
              self.layers.addSingleReport(self.reportid)
              .then(queriedReport => {
                queriedReport.fire('click');
                self.selected_city = queryReportCity;
                if (pushState) {
                  history.pushState({city: queryReportCity, report_id: self.reportid}, 'city', 'map/' + queryReportCity + '/' + self.reportid);
                }
              });
            });
          }
        }).catch(() => {
          self.utility.noReportNotification(cityName, self.reportid);
          self.selected_city = cityName;
          self.reportid = null;
          if (pushState) {
            history.pushState({city: cityName, report_id: null}, 'city', 'map/' + cityName);
          }
        });
      } else if (!self.reportid) {
        // No report id in query
        if (self.utility.isCitySupported(cityName)) {
          self.selected_city = cityName;
          if (pushState) {
            history.pushState({city: cityName, report_id: null}, 'city', 'map/' + cityName);
          }
        } else {
          self.utility.noReportNotification(null, null);
          self.selected_city = null;
          if (pushState) {
            history.pushState({city: null, report_id: null}, 'city', 'map');
          }
        }
      }
    }).catch(() => {
      //Case 3: .addReports not resolved for specified city
      self.utility.noReportNotification(cityName, null);
      self.reportid = null;
    });
  }

  attached() {
    let self = this;

    // Initialize leaflet map
    self.map = L.map('mapContainer', {
      attributionControl: false, //include in side pane
      zoomControl: false,
      center: self.utility.config.region_center,
      zoom: self.utility.config.starting_zoom,
      minZoom: self.utility.config.minimum_zoom
    });

    // Add base tile layers
    L.tileLayer(self.utility.config.tile_layer, {
      detectRetina: true,
      subdomains: 'abc',
      ext: 'png'
    }).addTo(self.map);

    // Add zoom control
    L.control.zoom({
      position: 'bottomright'
    }).addTo(self.map);

    // Add scale control
    L.control.scale({
      position: 'bottomleft',
      metric: true,
      imperial: false
    }).addTo(self.map);

    // Add custom leaflet control for geolocation
    L.Control.GeoLocate = L.Control.extend({
      onAdd: () => {
        return self.utility.geolocateContainer(self.map, self.layers, self.togglePane);
      }
    });
    L.control.geoLocate = (opts) => {
      return new L.Control.GeoLocate(opts);
    };
    L.control.geoLocate({
      position: 'bottomright'
    }).addTo(self.map);

    // If the URL contains a city don't geoLocate the user.
    if (typeof self.querycity !== 'undefined') {
      self.viewReports(self.querycity, true);
    } else {
      // Find user location & store in background
      self.map.locate({
        setView: false
      });
      self.map.on('locationfound', (e) => {

        if (self.utility.config.dep_name === 'petabencana') {
          // If in Indonesia, flyTo the users location.
          if (
            e.latitude > -10.3599874813 && // Lat SW
            e.longitude > 95.2930261576 && // Lng SW
            e.latitude < 5.47982086834 && // Lat NE
            e.longitude < 141.03385176 // Lng NE
          ) {
            self.map.flyTo(e.latlng, 12);
          } else {
            $('#screen').show();
          }
        } else {
          $('#screen').show();
        }
      });
      self.map.on('locationerror', () => {
        // Show the City Selector
        $('#screen').show();
      });
    }

    // Broward Mask TODO only for Broward
    if (self.utility.config.dep_name === 'riskmap_us') {
      //Create style config
      let regionOverlayStyle = {
        fillColor: '#000000',
        weight: 0,
        fillOpacity: 0.25
      };
      //Parse geojson text file
      $.getJSON('assets/overlays/region_overlay.json', data => {
        L.geoJSON(data, {
          style: regionOverlayStyle
        }).addTo(self.map);
      });
    }

    //If user navigates through history, load city as per stateObj, but do not register new pushState
    window.onpopstate = (e) => {
      if (e.state.city !== null) {
        this.viewReports(e.state.city, false);
      } else {
        this.viewReports(null, false);
      }
    };
  }
}

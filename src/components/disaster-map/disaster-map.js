import { inject, bindable, customElement } from 'aurelia-framework';
import dep from '../../deployment.js';
import * as L from 'leaflet';
import $ from 'jquery';
import { MapLayers } from './map-layers';
import { MapUtility } from './map-utility';

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
    $('#dropdown_city').hide();
    if (action === 'hide') {
      $(ref).fadeOut(200);
      if (ref === '#infoPane') {
        if (clearSelection) {
          if (self.layers.selected_report) {
            self.reportid = null;
            history.pushState({ city: self.selected_city, report_id: null }, 'city', 'map/' + self.selected_city);
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
        let tabToOpen = (self.querytab) ? self.querytab : 'about';
        self.querytab = null; //set to null after url fetch
        self.resetTab(tabToOpen);
        // hide infoPane if open
        // self.togglePane('#infoPane', 'hide', true);
        // show aboutPane
        // self.togglePane('#content-info', 'show', true);
        // update browser url
        if ((self.querylanguage || self.querytab) && !self.reportid) {
          if (!self.selected_city && self.utility.isCitySupported(self.querycity)) {
            self.selected_city = self.querycity; //selected_city given a value from params only when viewReports / changeCity run
            history.pushState({city: self.selected_city, report_id: null}, 'city', 'map/' + self.selected_city);
          } else if (self.selected_city) {
            history.pushState({ city: self.selected_city, report_id: null }, 'city', 'map/' + self.selected_city);
          } else {
            history.pushState({ city: null, report_id: null }, 'city', 'map');
          }
        }
      }
      $(ref).fadeIn(200);
    }
  }


  // Load all reports of a searched sub region
  viewRegionReports(regionName, pushState) {
    let self = this;
    // self.utility.goToLocation({
    //   'latitude': regionName.y,
    //   'longitude': regionName.x,
    //   'latlng': [regionName.y, regionName.x]
    // }, self.map, self.layers, self.togglePane);
    // self.layers.getStats(self.utility.parseCityObj(self.utility.clientCity, false).region)
    //   .then(stats => {
    //     let msg = this.locale.reports_stats.replace('{reportsplaceholder}', stats.reports).replace('{hoursplaceholder}', stats.timeperiod / 3600);
    //     self.utility.statsNotification(msg);
    //   });
    let city = self.utility.parseRegion(regionName);
    self.viewReports(city, pushState);
  }

  // Load all reports for a given city, or zoom to single queried report id
  viewReports(cityName, pushState) {
    let self = this;

    self.utility.changeCity(cityName, self.reportid, self.map, self.layers, self.locale.reports_stats, self.togglePane)
      .then(() => {
        // Show timeperiod notification
        // self.layers.getStats(self.utility.parseCityObj(cityName, false).region)
        //   .then(stats => {
        //     let msg = this.locale.reports_stats.replace('{reportsplaceholder}', stats.reports).replace('{provinceplaceholder}', cityName);
        //     self.utility.statsNotification(msg);
        //   });

        if (self.reportid && self.layers.activeReports.hasOwnProperty(self.reportid)) {
          //Case 1: Active report id in current city
          if (self.layers.activeReports[self.reportid].feature.properties.tags.instance_region_code === self.utility.parseCityObj(cityName, false).region) {
            self.layers.activeReports[self.reportid].fire('click');
            self.selected_city = cityName;
            if (pushState) {
              history.pushState({
                city: cityName,
                report_id: self.reportid
              }, 'city', 'map/' + cityName + '/' + self.reportid);
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
                  history.pushState({
                    city: cityName,
                    report_id: self.reportid
                  }, 'city', 'map/' + cityName + '/' + self.reportid);
                }
              } else {
                //Case 2B: fly to city with report id
                let queryReportCity = self.utility.parseCityName(reportRegion, self.cities);
                self.utility.changeCity(queryReportCity, self.reportid, self.map, self.layers, self.locale, self.togglePane)
                  .then(() => {
                    self.layers.addSingleReport(self.reportid)
                      .then(queriedReport => {
                        queriedReport.fire('click');
                        self.selected_city = queryReportCity;
                        if (pushState) {
                          history.pushState({
                            city: queryReportCity,
                            report_id: self.reportid
                          }, 'city', 'map/' + queryReportCity + '/' + self.reportid);
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
              history.pushState({ city: cityName, report_id: null }, 'city', 'map/' + cityName);
            }
          } else {
            self.utility.noReportNotification(null, null);
            self.selected_city = null;
            if (pushState) {
              history.pushState({ city: null, report_id: null }, 'city', 'map');
            }
          }
        }
      }).catch(() => {
        //Case 3: .addReports not resolved for specified city
        // self.utility.noReportNotification(cityName, null);
        self.reportid = null;
      });
  }

  attached() {
    let self = this;
    mapboxgl.accessToken = 'pk.eyJ1IjoicGV0YWJlbmNhbmEiLCJhIjoiY2s2MjF1cnZmMDlxdzNscWc5MGVoMTRkeCJ9.PGcoQqU6lBrcLfBmvTrWrQ';
    self.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/petabencana/ckq0nc6hp01vw17p9n17yxue2',
      center: [self.utility.config.region_center[1], self.utility.config.region_center[0]],
      zoom: self.utility.config.starting_zoom
    });
    self.map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');

    // const credits = L.control.attribution().addTo(self.map);
    // credits.addAttribution(
    //   `© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`
    // );

    // L.control.attribution({
    //   position: 'bottomleft',
    //   prefix: '<a href="http://mapbox.com/about/maps" class="mapbox-logo" target="_blank">Mapbox</a>'
    // }).addTo(self.map);


    // Add scale control
    // L.control.scale({
    //   position: 'bottomleft',
    //   metric: true,
    //   imperial: false
    // }).addTo(self.map);


    // Add custom leaflet control for geolocation
    // L.Control.GeoLocate = L.Control.extend({
    //   onAdd: () => {
    //     return self.utility.geolocateContainer(self.map, self.layers, self.locale.reports_stats, self.togglePane);
    //   }
    // });
    // L.control.geoLocate = (opts) => {
    //   return new L.Control.GeoLocate(opts);
    // };
    // L.control.geoLocate({
    //   position: 'bottomleft'
    // }).addTo(self.map);

    // let mapControlsContainer = document.getElementsByClassName("leaflet-control")[0];
    // let logoContainer = document.getElementById("logoContainer");

    // mapControlsContainer.appendChild(logoContainer);

    // Find user location & store in background
    // self.map.locate({
    //   setView: false
    // });
    // self.map.on('locationfound', (e) => {
    //   self.utility.onLocationFound(e);
    // });
    // self.map.on('locationerror', () => {
    //   self.utility.clientLocation = null;
    // });

    self.map.on('load', function() {
      // Check against queried city param
      if (self.querycity) {
        self.viewReports(self.querycity, true);
      }
    });

    //If user navigates through history, load city as per stateObj, but do not register new pushState
    // window.onpopstate = (e) => {
    //   if (e.state.city !== null) {
    //     this.viewReports(e.state.city, false);
    //   } else {
    //     this.viewReports(null, false);
    //   }
    // };
    //
    // dep.map.initial_load.forEach(function(region) {
    //   self.viewRegionReports(region, false);
    // });
  }
}

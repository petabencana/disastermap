//Utility functions for manipulating leaflet map layers

import {inject, noView} from 'aurelia-framework';
import * as L from 'leaflet';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart';
import {Config} from 'resources/config';
import {HttpClient} from 'aurelia-http-client';
import * as topojson from 'topojson-client';
import { Promise } from 'bluebird';

//start-aurelia-decorators
@noView
@inject(Config)
//end-aurelia-decorators
export class MapLayers {
  constructor(Config) {
    this.activeReports = {}; // List of available reports (filtered by city, time: last 1 hour)
    this.queriedReports = {};
    this.config = Config.map;
    this.selReportType = null;
    this.fireMarkers = null;
    this.mapIcons = {
      report_normal: (type, level) => L.divIcon({
        iconSize: [30, 30],
        html: `<img src="assets/icons/${type}_${level}.svg" />`
        //html: '<i class="icon-map-' + type + ' report-icon ' + type + '"></i>'
      }),
      report_normal_with_url: (type, level) => L.icon({
        iconUrl: 'assets/icons/' + type + '_' + level + '.svg',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      }),
      report_selected: (type) => L.divIcon({
        iconSize: [30, 30],
        html: '<i class="icon-map-bg bg-circle ' + type + ' selected"><i class="icon-' + type + ' report-icon"></i>'
      }),
      report_selected_with_url: (type, level) => L.icon({
        iconUrl: 'assets/icons/onselect/' + type + '_' + level + '_select.svg',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      }),
      gauge_normal: (url) => L.icon({
        iconUrl: url,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      }),
      gauge_selected: L.icon({
        iconUrl: 'assets/icons/floodgauge_selected.svg',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      }),
      flood_cluster: (level) => L.divIcon({
        iconSize: [30, 30],
        html: '<i class="icon-map-bg bg-cluster cluster ' + level + '"><i class="icon-map-flood report-cluster">'
      }),
      disaster_cluster: (disaster, level) => L.divIcon({
        iconSize: [35, 35],
        html: `<img src="assets/icons/${disaster}_${level}.svg" />`
      }),
      disaster_cluster_with_url: (disaster, level) => L.icon({
        iconUrl: 'assets/icons/' + disaster + '_' + level + '.svg',
        iconSize: [35, 35],
        iconAnchor: [15, 15],
        className: 'report-cluster ' + level
      })
    };
    this.mapPolygons = {
      normal: {
        weight: 0,
        opacity: 0
      },
      selected: {
        weight: 1,
        opacity: 1
      }
    };
  }

  getDisasterClusterIcon(disasterType, subType, level) {
    switch (disasterType) {
    case 'flood':
      return this.mapIcons.disaster_cluster(disasterType, level);
    case 'earthquake':
      return this.mapIcons.disaster_cluster_with_url(subType, level);
    case 'haze':
    case 'wind':
    case 'volcano':
    case 'fire':
      // return this.mapIcons.disaster_cluster_with_url(disasterType, level);
    default:
      return this.mapIcons.disaster_cluster(disasterType, level);
    }
  }

  getReportIcon(feature) {
    console.log(feature);
    let disasterType = feature.properties.disaster_type;
    let level = 'low';
    switch (disasterType) {
    case 'flood':
      level = this.getDisasterSevearity(feature);
      return this.mapIcons.report_normal_with_url(disasterType, level);
    case 'prep':
      let subType = feature.properties.report_data.report_type;
      return this.mapIcons.report_normal(subType, level);
    case 'earthquake':
      let eqSubType = feature.properties.report_data.report_type;
      level = this.getDisasterSevearity(feature);
      return this.mapIcons.report_normal_with_url(eqSubType, level);
    case 'haze':
    case 'wind':
    case 'volcano':
    case 'fire':
      level = this.getDisasterSevearity(feature);
      return this.mapIcons.report_normal_with_url(disasterType, level);
    default:
      return this.mapIcons.report_normal(disasterType, level);
    }
  }
  getSelectedReportIcon(feature) {
    let disasterType = feature.properties.disaster_type;
    const reportData = feature.properties.report_data || {'report_type': disasterType};
    let subType = reportData.report_type || disasterType;
    let level = 'low';
    switch (disasterType) {
    case 'flood':
      level = this.getDisasterSevearity(feature);
      return this.mapIcons.report_selected_with_url(disasterType, level);
    case 'prep':
      return this.mapIcons.report_selected_with_url(subType, level);
    case 'earthquake':
      level = this.getDisasterSevearity(feature);
      return this.mapIcons.report_selected_with_url(subType, level);
    case 'haze':
    case 'wind':
    case 'volcano':
    case 'fire':
      level = this.getDisasterSevearity(feature);
      return this.mapIcons.report_selected_with_url(disasterType, level);
    default:
      return this.mapIcons.report_selected_with_url(disasterType, level);
    }
  }


  // Get icon for flood gauge
  gaugeIconUrl(level) {
    switch (level) {
    case 1:
      return 'assets/icons/floodgauge_1.svg';
    case 2:
      return 'assets/icons/floodgauge_2.svg';
    case 3:
      return 'assets/icons/floodgauge_3.svg';
    default:
      return 'assets/icons/floodgauge_4.svg';
    }
  }

  /**
    * Format UTC timestamps to local time for display in local time zone
    * @function {String} UTC timestamp in ISO8601 format
    * @returns {String} timestamp formatted HH:MM DD-MM-YYYY in local time zone
    */
  formatTime(timestamp) {
    //let timeZoneDifference = 7; // UTC offset (e.g. +7 or -5)
    // create date object
    let utc = new Date(timestamp).getTime();
    // convert to local time (millisecond) based on browser timezone
    let localTime = utc + (-60 * new Date().getTimezoneOffset()) * 1000;
    // Make string
    let timestring = new Date(localTime).toISOString(); // ISO string
    // Format string for output
    timestring = timestring.split('T');
    let t1 = timestring[1].slice(0, 5); // Extract HH:MM
    let d1 = timestring[0].split('-'); // Extract DD-MM-YY
    let d2 = d1[2] + '-' + d1[1] + '-' + d1[0]; // Reformat
    return (t1 + ' ' + d2);
  }

  getStats(regionCode) {
    let self = this;
    let client = new HttpClient();
    const url = self.config.data_server +
      'stats/reportsSummary?admin=' + regionCode;
      // + '&timeperiod=' + self.config.report_timeperiod;
    return new Promise((resolve, reject) => {
      client.get(url)
        .then(summary => {
          let reports = JSON.parse(summary.response)['total number of reports'];
          resolve({
            reports: reports,
            timeperiod: self.config.report_timeperiod
          });
        })
        .catch(err => reject(err));
    });
  }

  // Get topojson data from server, return geojson
  getData(endPoint) {
    let self = this;
    let url = self.config.data_server + endPoint;
    let client = new HttpClient();
    return new Promise((resolve, reject) => {
      client.get(url)
        .then(data => {
          let topology = JSON.parse(data.response);
          if (topology.statusCode === 200) {
            let result = topology.result;
            if (result && result.objects) {
              resolve(topojson.feature(result, result.objects.output));
            } else {
              resolve(null);
            }
          } else {
            resolve(null);
          }
        })
        .catch(err => reject(err));
    });
  }

  revertIconToNormal(feature) {
    let icon = this.getReportIcon(feature);
    if (feature.properties.disaster_type === "fire" && !self.fireMarker)
      // this.selected_report.target.setStyle({ "className": "fire-distance" })
      this.selected_report.target.setStyle({ "fillOpacity": .25 })
    else {
      this.selected_report.target.setIcon(icon);
      this.selected_report = null;
    }
  }

  markerClickHandler(e, feature, cityName, map, togglePane){
    var self= this;
    map.panTo(e.latlng, 5);
    let reportIconNormal = self.getReportIcon(feature);
    let reportIconSelected = self.getSelectedReportIcon(feature);
    if (self.selected_extent) {
      self.selected_extent.target.setStyle(self.mapPolygons.normal);
      self.selected_extent = null;
    }
    if (self.selected_gauge) {
      self.selected_gauge.target.setIcon(self.mapIcons.gauge_normal(self.gaugeIconUrl(self.selected_gauge.target.feature.properties.observations[self.selected_gauge.target.feature.properties.observations.length - 1].f3)));
      self.selected_gauge = null;
    }
    if (!self.selected_report) {
      // Case 1 : no previous selection, click on report icon
      if (feature.properties.disaster_type === "fire" && !self.fireMarker)
      // {e.target.setStyle({"className": "fire-distance-selected"}); e.target._updatePath()}
      { e.target.setStyle({ "fillOpacity": .5 }); }
      //TODO: fixme
      // else
      //   e.target.setIcon(reportIconSelected);
      self.popupContent = {};
      for (let prop in feature.properties) {
        self.popupContent[prop] = feature.properties[prop];
      }
      self.popupContent.sevearity = self.getDisasterSevearity(feature);
      self.popupContent.timestamp = self.formatTime(feature.properties.created_at);
      history.pushState({ city: cityName, report_id: feature.properties.pkey }, 'city', 'map/' + cityName + '/' + feature.properties.pkey);
      togglePane('#infoPane', 'show', true);
      self.selected_report = e;
    } else if (e.target === self.selected_report.target) {
      // Case 2 : clicked report icon same as selected report
      if (feature.properties.disaster_type === "fire" && !self.fireMarker)
        // e.target.setStyle ({ "className": "fire-distance" })
        e.target.setStyle({ "fillOpacity": .25 })
      //TODO: fixme
      // else
      //   e.target.setIcon(reportIconNormal);
      history.pushState({ city: cityName, report_id: null }, 'city', 'map/' + cityName);
      togglePane('#infoPane', 'hide', false);
      self.selected_report = null;
    } else if (e.target !== self.selected_report.target) {
      // Case 3 : clicked new report icon, while previous selection needs to be reset
      self.revertIconToNormal(self.selected_report.target.feature);
      if (feature.properties.disaster_type === "fire" && !self.fireMarker)
        // e.target.setStyle({ "className": "fire-distance-selected" })
        e.target.setStyle({ "fillOpacity": .5 })
      //TODO: fixme
      // else
      //   e.target.setIcon(reportIconSelected);
      self.popupContent = {};
      for (let prop in feature.properties) {
        self.popupContent[prop] = feature.properties[prop];
      }
      self.popupContent.sevearity = self.getDisasterSevearity(feature);
      self.popupContent.timestamp = self.formatTime(feature.properties.created_at);
      history.pushState({ city: cityName, report_id: feature.properties.pkey }, 'city', 'map/' + cityName + '/' + feature.properties.pkey);
      togglePane('#infoPane', 'show', true);
      self.selected_report = e;
    }
    //Set selReportType value from feature properties
    self.selReportType = 'flood';
    if (feature.properties.report_data) {
      self.selReportType = feature.properties.report_data.report_type;
    }

  }

  reportInteraction(feature, layer, cityName, map, togglePane) {
    let self = this;
    self.activeReports[feature.properties.pkey] = layer;
    layer.on({
      click: (e) => {
        this.markerClickHandler(e, feature, cityName, map, togglePane);
      }
    });
  }

  floodExtentInteraction(feature, layer, cityName, map, togglePane) {
    let self = this;
    layer.on({
      click: (e) => {
        map.panTo(layer.getCenter());
        // Check for selected report, restore icon to normal, clear variable, update browser URL
        if (self.selected_report) {
          self.revertIconToNormal(self.selected_report.target.feature);
          history.pushState({ city: cityName, report_id: null }, 'city', 'map/' + cityName);
        }
        if (self.selected_gauge) {
          self.selected_gauge.target.setIcon(self.mapIcons.gauge_normal(self.gaugeIconUrl(self.selected_gauge.target.feature.properties.observations[self.selected_gauge.target.feature.properties.observations.length - 1].f3)));
          self.selected_gauge = null;
        }
        if (!self.selected_extent) {
          // Case 1 : no previous selection, click on disaster extent polygon
          // Selection feedback, add stroke
          e.target.setStyle(self.mapPolygons.selected);
          // Reset and fill popupContent
          self.popupContent = {};
          for (let prop in feature.properties) {
            self.popupContent[prop] = feature.properties[prop];
          }
          // open infoPane, set 'clear_selection' var to true, to empty flood gauge chart
          togglePane('#infoPane', 'show', true);
          // set local variable to target
          self.selected_extent = e;
        } else if (e.target === self.selected_extent.target) {
          // Case 2 : clicked polygon same as selected flood extent
          e.target.setStyle(self.mapPolygons.normal);
          self.popupContent = {};
          togglePane('#infoPane', 'hide', false);
          self.selected_extent = null;
        } else if (e.target !== self.selected_extent.target) {
          // Case 3 : clicked new polygon, while previous selection needs to be reset
          self.selected_extent.target.setStyle(self.mapPolygons.normal);
          e.target.setStyle(self.mapPolygons.selected);
          self.popupContent = {};
          for (let prop in feature.properties) {
            self.popupContent[prop] = feature.properties[prop];
          }
          togglePane('#infoPane', 'show', true);
          self.selected_extent = e;
        }
      }
    });
  }

  drawGaugeChart(feature) {
    $('#chart-pane').html('<canvas id="modalChart"></canvas>');
    let ctx = $('#modalChart').get(0).getContext('2d');
    let data = {
      labels: [],
      datasets: [{
        label: 'Tinggi Muka Air / Water Depth (cm)',
        backgroundColor: 'rgba(151,187,205,0.2)',
        borderColor: 'rgba(151,187,205,1)',
        pointBackgroundColor: 'rgba(151,187,205,1)',
        pointBorderColor: '#fff',
        pointRadius: 4,
        data: []
      }]
    };
    for (let i = 0; i < feature.properties.observations.length; i += 1) {
      data.labels.push(feature.properties.observations[i].f1);
      data.datasets[0].data.push(feature.properties.observations[i].f2);
    }
    // eslint-disable-next-line no-unused-vars
    let gaugeChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        bezierCurve: true,
        legend: { display: true },
        scaleLabel: "<%= ' ' + value%>",
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'hour',
              unitStepSize: 1,
              displayFormats: {
                'millisecond': 'HH:mm',
                'second': 'HH:mm',
                'minute': 'HH:mm',
                'hour': 'HH:mm',
                'day': 'HH:mm',
                'week': 'HH:mm',
                'month': 'HH:mm',
                'quarter': 'HH:mm',
                'year': 'HH:mm'
              }
            }
          }]
        },
        tooltips: {
          enabled: false
        }
      }
    });
  }

  gaugeInteraction(feature, layer, cityName, map, togglePane) {
    let self = this;
    layer.on({
      click: (e) => {
        map.panTo(layer._latlng);
        $('#chart-pane').empty();
        if (self.selected_report) {
          self.revertIconToNormal(self.selected_report.target.feature);
          history.pushState({ city: cityName, report_id: null }, 'city', 'map/' + cityName);
        }
        if (self.selected_extent) {
          self.selected_extent.target.setStyle(self.mapPolygons.normal);
          self.selected_extent = null;
        }
        if (!self.selected_gauge) {
          e.target.setIcon(self.mapIcons.gauge_selected);
          self.popupContent = {};
          self.popupContent.gauge_name = feature.properties.gaugenameid;
          self.drawGaugeChart(feature);
          togglePane('#infoPane', 'show', false);
          self.selected_gauge = e;
        } else if (e.target === self.selected_gauge.target) {
          e.target.setIcon(self.mapIcons.gauge_normal(self.gaugeIconUrl(e.target.feature.properties.observations[e.target.feature.properties.observations.length - 1].f3)));
          togglePane('#infoPane', 'hide', false);
          self.selected_gauge = null;
        } else if (e.target !== self.selected_gauge.target) {
          self.selected_gauge.target.setIcon(self.mapIcons.gauge_normal(self.gaugeIconUrl(self.selected_gauge.target.feature.properties.observations[self.selected_gauge.target.feature.properties.observations.length - 1].f3)));
          e.target.setIcon(self.mapIcons.gauge_selected);
          self.popupContent = {};
          self.popupContent.gauge_name = feature.properties.gaugenameid;
          self.drawGaugeChart(feature);
          togglePane('#infoPane', 'show', false);
          self.selected_gauge = e;
        }
      }
    });
  }

  appendData(endPoint, localObj, map) {
    let self = this;
    return new Promise((resolve, reject) => {
      self.getData(endPoint)
        .then(data => {
          if (!data) {
            console.log('Could not load map layer');
            resolve(data);
          } else {
            localObj.addData(data);
            // localObj.addTo(map);
            resolve(data);
          }
        }).catch(() => reject(null));
    });
  }

  addSingleReport(reportId) {
    let self = this;
    return new Promise((resolve, reject) => {
      self.getData('reports/' + reportId)
        .then(data => {
          self.reports.addData(data);
          resolve(self.activeReports[data.features[0].properties.pkey]);
        }).catch(() => reject(null));
    });
  }

  addReports(cityName, cityRegion, map, togglePane) {
    let self = this;
    // map.createPane('reports');
    // map.getPane('reports').style.zIndex = 700;
    // clear previous reports
    if (self.reports) {
      map.removeLayer(self.reports);
      self.reports = null;
    }
    let endPoint = 'reports/?admin=' + cityRegion;
    // add layer to map
    // return self.appendData('reports/?admin=' + cityRegion + '&timeperiod=' + self.config.report_timeperiod, self.reports, map);
    return this.addReportsClustered(endPoint, cityName, map, togglePane);
  }

  addReportsClustered(endPoint, cityName, map, togglePane) {
    let self = this;
    return new Promise((resolve, reject) => {
      self.getData(endPoint)
        .then(data => {
          if (!data) {
            // console.log('Could not load map layer');
            resolve(data);
          } else {
            let fireEntries = data.features.filter(function (entry, index){
              return entry.properties.disaster_type === 'fire'
            })
            this.map = map
            data = this.addDisasterLevelsToData(data)
            this.addCluster(data, cityName, map, togglePane, 'flood');
            this.addDisasterIconLayers(map);
            this.addCluster(data, cityName, map, togglePane, 'haze');
            this.addCluster(data, cityName, map, togglePane, 'volcano');
            this.addCluster(data, cityName, map, togglePane, 'wind');
            this.addCluster(data, cityName, map, togglePane, 'earthquake', 'structure');
            this.addCluster(data, cityName, map, togglePane, 'earthquake', 'road');
            if(fireEntries.length > 1) {
                this.addCluster(data, cityName, map, togglePane, 'fire');
                self.fireMarker = null;
              }
            else {
              // map.createPane('fire_single_marker');
              // let feature = fireEntries[0]
              // const type = feature.properties.disaster_type;
              // const reportData = feature.properties.report_data || { 'report_type': type };
              // const subType = reportData.report_type || type;
              // const sevearity = self.getAvgDisasterSevearity(type, subType, [feature]);
              // const icon = self.getDisasterClusterIcon(type, subType, sevearity);
              // const marker = L.marker(L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]), {
              //   icon: icon,
              //   pane: 'fire_single_marker'
              // });
              // marker.addTo(map);
              // this.fireMarker = marker;
              // this.fireSingleFeature = feature
              // marker.on('click', function(e){
              //   this.markerClickHandler(e,feature, cityName, map, togglePane )
              // }, this)
            }
            resolve(data);
          }
          // map.on('zoomend', function(e)  {
          //   var currentZoom = map.getZoom();
          //   let feature = this.fireSingleFeature
          //   if(currentZoom > 15 ) {
          //     if (feature && !this.fireCircle) {
          //       const radius = map.distance(L.latLng(feature.properties.report_data.fireRadius.lat, feature.properties.report_data.fireRadius.lng), this.fireMarker.getLatLng())
          //       const fireCircle = new L.Circle(self.fireMarker.getLatLng(), {
          //         radius: radius,
          //         className: "fire-distance",
          //         fillOpacity: 0.25
          //       });
          //       this.fireCircle = fireCircle
          //       fireCircle.addTo(this.map);
          //       this.map.removeLayer(this.fireMarker);
          //       this.fireMarker = null;
          //       fireCircle.on('click', function (e) {
          //         this.markerClickHandler(e, feature, cityName, map, togglePane)
          //       }, this)
          //     }
          //   }
          //   else {
          //     if (feature && !this.fireMarker) {
          //       let feature = this.fireSingleFeature
          //       const type = feature.properties.disaster_type;
          //       const reportData = feature.properties.report_data || { 'report_type': type };
          //       const subType = reportData.report_type || type;
          //       const sevearity = self.getAvgDisasterSevearity(type, subType, [feature]);
          //       const icon = self.getDisasterClusterIcon(type, subType, sevearity);
          //       const marker = L.marker(L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]), {
          //         icon: icon,
          //         pane: 'fire_single_marker'
          //       });
          //       marker.addTo(map);
          //       // var singleFireLayer = {'fire':L.layerGroup([marker])}
          //       // L.control.layers(singleFireLayer).addTo(map);
          //       this.fireMarker = marker;
          //       this.map.removeLayer(this.fireCircle);
          //       this.fireCircle = null;
          //       this.fireSingleFeature = feature
          //       // this.reportInteraction(feature, singleFireLayer, cityName, map, togglePane)
          //       marker.on('click', function (e) {
          //         this.markerClickHandler(e, feature, cityName, map, togglePane)
          //       }, this)
          //     }
          //   }
          //
          // }, this)
        }).catch((e) => reject(e));
    });
  }
  add_icon_layer(map, image_name, layer_id, source, filter, icon_size) {
    map.loadImage(image_name, function (error, image) {
      if (error) throw error;
      let image_code = image_name.split('/').slice(-1)[0].split('.')[0];
      map.addImage(image_code, image);
      map.addLayer({
        'id': layer_id,
        'type': 'symbol',
        'source': source,
        filter: filter,
        'layout': {
          'icon-image': image_code,
          'icon-size': icon_size,
        }
      });
    });
  }

  addDisasterIconLayers(map) {
    let self = this;
    let iconMap = {
      "flood": [
        {
          "icon": "assets/icons/flood_low.png",
          "filter": ['all',['==', 'disasterLevel', 'low'],['==', 'clicked', false]],
          "size": 0.05,
          "level": "low"
        },
        {
          "icon": "assets/icons/web_report.png",
          "filter": ['all',['==', 'disasterLevel', 'low'],['==', 'clicked', true]],
          "size": 0.05,
          "level": "low_selected"
        },
        {
          "icon": "assets/icons/flood_medium.png",
          "filter": ['all',['==', 'disasterLevel', 'medium'],['==', 'clicked', false]],
          "size": 0.05,
          "level": "medium"
        },
        {
          "icon": "assets/icons/web_report.png",
          "filter": ['all',['==', 'disasterLevel', 'medium'],['==', 'clicked', true]],
          "size": 0.05,
          "level": "medium_selected"
        },
        {
          "icon": "assets/icons/flood_high.png",
          "filter": ['all',['==', 'disasterLevel', 'high'],['==', 'clicked', false]],
          "size": 0.05,
          "level": "high"
        },
        {
          "icon": "assets/icons/web_report.png",
          "filter": ['all',['==', 'disasterLevel', 'high'],['==', 'clicked', true]],
          "size": 0.05,
          "level": "high_selected"
        },
      ]
    }
    Object.keys(iconMap).forEach( function (disaster) {
      iconMap[disaster].forEach(function (icon) {
        self.add_icon_layer(map, icon.icon, disaster + '_' + icon.level, disaster, icon.filter, icon.size);
      });
    });
  }

  addCluster(data, cityName, map, togglePane, disaster, reportType) {
    let self = this;
    let reports = data
    reports.features = data.features.filter(feature => {
      if (reportType) {
        let reportData = feature.properties.report_data || { 'report_type': '' };
        return reportData.report_type === reportType;
      }
      return feature.properties.disaster_type === disaster;
    })
    this.queriedReports[disaster] = Object.assign({}, reports);
    map.addSource(disaster, {
      'type': 'geojson',
      'data': reports,
      'cluster': true,
      'clusterMaxZoom': 14
    });

    map.addLayer({
      'id': 'cluster-' + disaster,
      'source': disaster,
      'type': 'circle',
      filter: ['has', 'point_count'],
      // paint: {
      //   'circle-radius': 0
      // }
    });

    map.addLayer({
      'id': 'unclustered-' + disaster,
      'source': disaster,
      'type': 'circle',
      filter: ['!', ['has', 'point_count']],
      paint: {
        'circle-radius': 10
      }
    });

    map.on('click', 'cluster-' + disaster, function (e) {
      console.log("clicked")
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['cluster-' + disaster]
      });
      const clusterId = features[0].properties.cluster_id;
      if(!clusterId) return;
      map.getSource(disaster).getClusterExpansionZoom(
        clusterId,
        function (err, zoom) {
          if (err) return;
          map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom
          });
        }
      );
    });

    map.on('click', 'unclustered-' + disaster, function (e) {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['unclustered-' + disaster]
      });
       self.queriedReports[disaster].features.forEach(function (feature, index) {
        if (feature.properties.url === features[0].properties.url) {
          self.queriedReports[disaster].features[index].properties.clicked = !self.queriedReports[disaster].features[index].properties.clicked;
          map.getSource(disaster).setData(self.queriedReports[disaster]);
        }
      })
      self.markerClickHandler(e, features[0], cityName, map, togglePane);
    });
    map.loadImage('assets/icons/Add_Report_Icon_Flood.png', function (error, image) {
      if (error) throw error;
      map.addImage(disaster+'-marker', image);
    });

    map.addLayer({
      'id': 'cluster-count-' + disaster,
      'type': 'symbol',
      'source': disaster,
      filter: ['has', 'point_count'],
      'layout': {
        'icon-image': disaster+'-marker',
        'icon-size': 0.45,
        'text-field': '{point_count}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12
      }
    });

    map.on('mouseenter', 'cluster-' + disaster, function () {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'cluster-' + disaster, function () {
      map.getCanvas().style.cursor = '';
    });
  }

  _getWindSevearity(impact) {
    // eslint-disable-next-line default-case
    switch (String(impact)) {
      case '0': return 'normal';
      case '1': return 'medium';
      case '2': return 'high';
    }
  }

  _getAQSevearity(aq) {
    // eslint-disable-next-line default-case
    switch (String(aq)) {
      case '0': return 'low';
      case '1': return 'low';
      case '2': return 'normal';
      case '3': return 'high';
      case '4': return 'high';
    }
  }


  _getFloodSevearity(depth) {
    if (depth <= 70) {
      return 'low';
    } else if (depth <= 150) {
      return 'medium';
    } else if (depth > 150) {
      return 'high';
    }
  }

  _getAccessabilitySevearity(accessability) {
    // eslint-disable-next-line default-case
    switch (accessability) {
      case 0: return 'high';
      case 1: return 'medium';
      case 2: return 'normal';
      case 3: return 'normal';
      case 4: return 'low';
    }
  }

  _getAccessabilitySevearityGroup(accessability) {
    if (accessability <= 0.5) {
      return 'high';
    } else if (accessability > 0.5 && accessability <= 1.0) {
      return 'medium';
    } else if (accessability > 1.0 && accessability <= 1.8) {
      return 'normal';
    } else if (accessability > 1.8) {
      return 'low';
    }
  }

  _getStructureFailureSevearity(structureFailure) {
    if (structureFailure < 1) {
      return 'low';
    } else if (structureFailure >= 1 && structureFailure < 2) {
      return 'medium';
    } else if (structureFailure >= 2) {
      return 'high';
    }
  }


  getDisasterSevearity(feature) {
    let disasterType = feature.properties.disaster_type;
    let level = 'low';
    let reportData = feature.properties.report_data;
    switch (disasterType) {
      case 'flood':
        reportData = reportData || { 'flood_depth': 0 };
        let depth = reportData.flood_depth || 0;
        level = this._getFloodSevearity(depth);
        break;
      case 'earthquake':
        let subType = feature.properties.report_data.report_type;
        if (subType === 'road') {
          reportData = reportData || { 'accessabilityFailure': 0 };
          let accessability = reportData.accessabilityFailure || 0;
          level = this._getAccessabilitySevearity(accessability);
        } else if (subType === 'structure') {
          reportData = reportData || { 'structureFailure': 0 };
          let structureFailure = reportData.structureFailure || 0;
          level = this._getStructureFailureSevearity(structureFailure);
        }
        break;
      case 'haze':
        switch (reportData.airQuality) {
          case 0:
            level = 'low';
            break;
          case 1:
            level = 'low';
            break;
          case 2:
            level = 'normal';
            break;
          case 3:
            level = 'high';
            break;
          case 4:
            level = 'high';
            break;
          default:
            level = 'low';
            break;
        }
        break;
      case 'wind':
        reportData = reportData || { 'impact': 0 };
        let impact = reportData.impact || 0;
        level = this._getWindSevearity(impact);
        break;
      case 'volcano':
        break;
      case 'fire':
        level = 'high';
        break;
      default:
        break;
    }
    return level;
  }

  addFloodExtents(cityName, cityRegion, map, togglePane) {
    let self = this;
    self.flood_extents = L.geoJSON(null, {
      style: (feature, layer) => {
        switch (feature.properties.state) {
          case 4: return { cursor: 'pointer', fillColor: '#CC2A41', weight: 0, color: '#000000', opacity: 0, fillOpacity: 0.7 };
          case 3: return { cursor: 'pointer', fillColor: '#FF8300', weight: 0, color: '#000000', opacity: 0, fillOpacity: 0.7 };
          case 2: return { cursor: 'pointer', fillColor: '#FFFF00', weight: 0, color: '#000000', opacity: 0, fillOpacity: 0.7 };
          case 1: return { cursor: 'pointer', fillColor: '#A0A9F7', weight: 0, color: '#000000', opacity: 0, fillOpacity: 0.7 };
          default: return { weight: 0, opacity: 0, fillOpacity: 0 };
        }
      },
      onEachFeature: (feature, layer) => {
        self.floodExtentInteraction(feature, layer, cityName, map, togglePane);
      }
    });
    self.appendData('floods?admin=' + cityRegion + '&minimum_state=1', self.flood_extents, map)
      .then(data => {
        map.addSource('floodExtents', {
          'type': 'geojson',
          'data': data
        });
        map.addLayer({
          'id': 'floodExtents',
          'source': 'floodExtents',
          'type': 'fill',
          'paint': {
            'fill-color': [
              'interpolate',
              ['linear'],
              ['get', 'state'],
              1,
              '#A0A9F7',
              2,
              '#FFFF00',
              3,
              '#FF8300',
              4,
              '#CC2A41',
            ],
            'fill-opacity': 0.7
          }
        });
      });

  }

  removeFloodExtents(map) {
    let self = this;
    if (self.flood_extents) {
      map.removeLayer('floodExtents');
      map.removeSource('floodExtents');
      self.flood_extents = null;
    }
  }

  addFloodGauges(cityName, cityRegion, map, togglePane) {
    let self = this;
    // map.createPane('gauges');
    // map.getPane('gauges').style.zIndex = 650;
    if (cityRegion === 'ID-JK') {
      // Create flood gauge layer and add to the map
      self.gaugeLayer = L.geoJSON(null, {
        pointToLayer: (feature, latlng) => {
          return L.marker(latlng, {
            icon: self.mapIcons.gauge_normal(self.gaugeIconUrl(feature.properties.observations[feature.properties.observations.length - 1].f3)),
            pane: 'gauges'
          });
        },
        onEachFeature: (feature, layer) => {
          self.gaugeInteraction(feature, layer, cityName, map, togglePane);
        }
      });
    }
    return self.appendData('floodgauges?admin=' + cityRegion, self.gaugeLayer, map);
  }

  removeFloodGauges(map) {
    let self = this;
    if (self.gaugeLayer) {
      map.removeLayer('floodGauges');
      map.removeSource('floodGauges');
      self.gaugeLayer = null;
    }
  }

  addDisasterLevelsToData(data) {
    let self = this;
    data.features = data.features.map(function (item) {
      item.properties.disasterLevel = self.getDisasterSevearity(item);
      item.properties.clicked = false;
      return item;
    });
    return data;
  }
}

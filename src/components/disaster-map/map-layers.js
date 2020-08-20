//Utility functions for manipulating leaflet map layers

import { inject, noView } from 'aurelia-framework';
import * as L from 'leaflet';
// eslint-disable-next-line no-unused-vars
import markerClusterGroup from 'leaflet.markercluster';
import Chart from 'chart';
import { Config } from 'resources/config';
import { HttpClient } from 'aurelia-http-client';
import * as topojson from 'topojson-client';

//start-aurelia-decorators
@noView
@inject(Config)
//end-aurelia-decorators
export class MapLayers {
  constructor(Config) {
    this.activeReports = {}; // List of available reports (filtered by city, time: last 1 hour)
    this.config = Config.map;
    this.selReportType = null;
    this.mapIcons = {
      report_normal: (type, level) => L.divIcon({
        iconSize: [30, 30],
        html: '<i class="icon-map-bg bg-circle ' + level + '"><i class="icon-map-' + type + ' report-icon">'
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
        html: '<i class="icon-map-bg bg-cluster cluster ' + level + '"><i class="icon-map-' + disaster + ' report-cluster">'
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
      return this.mapIcons.disaster_cluster_with_url(disasterType, level);
    default:
      return this.mapIcons.disaster_cluster(disasterType, level);
    }
  }

  getReportIcon(feature) {
    console.log(feature);
    let disasterType = feature.properties.disaster_type;
    let subType = feature.properties.report_data.report_type;
    let level = 'low';
    let reportData = feature.properties.report_data;
    switch (disasterType) {
    case 'flood':
      level = this.getDisasterSevearity(feature);
      return this.mapIcons.report_normal_with_url(disasterType, level);
    case 'prep':
      return this.mapIcons.report_normal(subType, level);
    case 'earthquake':
      level = this.getDisasterSevearity(feature);
      return this.mapIcons.report_normal_with_url(subType, level);
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
    let subType = feature.properties.report_data.report_type || disasterType;
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
      'stats/reportsSummary?city=' + regionCode;
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
    this.selected_report.target.setIcon(icon);
    this.selected_report = null;
  }

  reportInteraction(feature, layer, cityName, map, togglePane) {
    let self = this;
    self.activeReports[feature.properties.pkey] = layer;
    layer.on({
      click: (e) => {
        map.panTo(layer._latlng, 15);
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
          e.target.setIcon(reportIconSelected);
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
          e.target.setIcon(reportIconNormal);
          history.pushState({ city: cityName, report_id: null }, 'city', 'map/' + cityName);
          togglePane('#infoPane', 'hide', false);
          self.selected_report = null;
        } else if (e.target !== self.selected_report.target) {
          // Case 3 : clicked new report icon, while previous selection needs to be reset
          self.revertIconToNormal(self.selected_report.target.feature);
          e.target.setIcon(reportIconSelected);
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
            localObj.addTo(map);
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
    map.createPane('reports');
    map.getPane('reports').style.zIndex = 700;
    // clear previous reports
    if (self.reports) {
      map.removeLayer(self.reports);
      self.reports = null;
    }
    let endPoint = 'reports/?city=' + cityRegion;
    // add layer to map
    // return self.appendData('reports/?city=' + cityRegion + '&timeperiod=' + self.config.report_timeperiod, self.reports, map);
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
            this.addCluster(data, cityName, map, togglePane, 'earthquake', 'structure');
            this.addCluster(data, cityName, map, togglePane, 'earthquake', 'road');
            this.addCluster(data, cityName, map, togglePane, 'flood');
            this.addCluster(data, cityName, map, togglePane, 'fire');
            this.addCluster(data, cityName, map, togglePane, 'haze');
            this.addCluster(data, cityName, map, togglePane, 'volcano');
            this.addCluster(data, cityName, map, togglePane, 'wind');
            resolve(data);
          }
        }).catch(() => reject(null));
    });
  }

  addCluster(data, cityName, map, togglePane, disaster, reportType) {
    let self = this;
    // create new layer object
    self.reports = L.geoJSON(data, {
      filter: function(feature, layer) {
        if (reportType) {
          return feature.properties.report_data.report_type === reportType;
        }
        return feature.properties.disaster_type === disaster;
      },
      onEachFeature: (feature, layer) => {
        self.reportInteraction(feature, layer, cityName, map, togglePane);
      },
      pointToLayer: (feature, latlng) => {
        let reportIconNormal = self.getReportIcon(feature);
        return L.marker(latlng, {
          icon: reportIconNormal,
          pane: 'reports'
        });
      }
    });
    let markers = L.markerClusterGroup({ iconCreateFunction: this.iconCreateFunction() });
    markers.addLayer(self.reports);
    markers.addTo(map);
  }

  iconCreateFunction() {
    let self = this;
    return (cluster) => {
      let tooltip = L.tooltip({
        className: 'cluster-count',
        permanent: true,
        direction: 'right',
        offset: [7, 7],
        interactive: true
      }).setContent(cluster.getChildCount().toString());
      cluster.bindTooltip(tooltip);
      // cluster.getAllChildMarkers()[0].feature.properties.report_data['flood_depth']
      let children = cluster.getAllChildMarkers();
      const type = children[0].feature.properties.disaster_type;
      const subType = children[0].feature.properties.report_data.report_type;
      const sevearity = self.getAvgDisasterSevearity(type, subType, children);
      return self.getDisasterClusterIcon(type, subType, sevearity);
    };
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
      return  'low';
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
    case 1: return 'normal';
    case 2: return 'medium';
    case 3: return 'medium';
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

  getAvgDisasterSevearity(type, subType, reportMarkers) {
    switch (type) {
    case 'flood':
      let avgDepth = this.getAverageFloodDepth(reportMarkers);
      return this._getFloodSevearity(avgDepth);
    case 'earthquake':
      if (subType === 'road') {
        let avgAccessability = this.getAverageAccessability(reportMarkers);
        return this._getAccessabilitySevearityGroup(avgAccessability);
      } else if (subType === 'structure') {
        let avgStructureFailure = this.getAvgStructureFailure(reportMarkers);
        return this._getStructureFailureSevearity(avgStructureFailure);
      }
      break;
    case 'wind':
      let avgImpact = this.getAverageWindImpact(reportMarkers);
      return this._getWindSevearity(avgImpact);
    case 'haze':
      let avgAirQuality = this.getAverageAirQuality(reportMarkers);
      return this._getAQSevearity(avgAirQuality);
    case 'fire':
      return 'high';
    default:
      return 'low';
    }
  }

  getDisasterSevearity(feature) {
    let disasterType = feature.properties.disaster_type;
    let subType = feature.properties.report_data.report_type;
    let level = 'low';
    let reportData = feature.properties.report_data;
    switch (disasterType) {
    case 'flood':
      reportData = reportData || {'flood_depth': 0};
      let depth = reportData.flood_depth || 0;
      level = this._getFloodSevearity(depth);
      break;
    case 'earthquake':
      if (subType === 'road') {
        reportData = reportData || {'accessabilityFailure': 0};
        let accessability = reportData.accessabilityFailure || 0;
        let accessabilityValue = 0;
        switch (accessability) {
        case 0: accessabilityValue = 0.5; break;
        case 1: accessabilityValue = 1.0; break;
        case 2: accessabilityValue = 1.4; break;
        case 3: accessabilityValue = 1.8; break;
        case 4: accessabilityValue = 2.2; break;
        default: accessabilityValue = 0; break;
        }
        level = this._getAccessabilitySevearity(accessabilityValue);
      } else if (subType === 'structure') {
        reportData = reportData || {'structureFailure': 0};
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
      reportData = reportData || {'impact': 0};
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

  getAvgStructureFailure(reportMarkers) {
    let totalStructureFailure = 0;
    reportMarkers.forEach(function(report, index) {
      const reportData = report.feature.properties.report_data || {'structureFailure': 0};
      totalStructureFailure += reportData.structureFailure || 0;
    });
    return totalStructureFailure / reportMarkers.length;
  }

  getAverageAccessability(reportMarkers) {
    let totalAccessability = 0;
    let accessability = 0;
    reportMarkers.forEach(function(report, index) {
      const reportData = report.feature.properties.report_data || {'accessabilityFailure': 0};
      accessability += reportData.accessabilityFailure || 0;
      switch (accessability) {
      case 0: totalAccessability += 0.5; break;
      case 1: totalAccessability += 1.0; break;
      case 2: totalAccessability += 1.4; break;
      case 3: totalAccessability += 1.8; break;
      case 4: totalAccessability += 2.2; break;
      default: totalAccessability += 0; break;
      }
    });
    return totalAccessability / reportMarkers.length;
  }


  getAverageFloodDepth(reportMarkers) {
    let depth = 0;
    reportMarkers.forEach(function(report, index) {
      const reportData = report.feature.properties.report_data || {'flood_depth': 0};
      depth += reportData.flood_depth || 0;
    });
    // for (let report in report_markers) {
    //   depth += report.feature.properties.report_data['flood_depth'];
    // }
    return depth / reportMarkers.length;
  }

  getAverageAirQuality(reportMarkers) {
    let aq = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0};
    reportMarkers.forEach(function(report, index) {
      const reportData = report.feature.properties.report_data || {'airQuality': 0};
      aq[reportData['airQuality']] = aq[reportData['airQuality']] + 1;
    });
    return Object.keys(aq).reduce((a, b) => aq[a] > aq[b] ? a : b);
  }

  getAverageWindImpact(reportMarkers) {
    let impact = {0: 0, 1: 0, 2: 0};
    reportMarkers.forEach(function(report, index) {
      const reportData = report.feature.properties.report_data || {'impact': 0};
      impact[reportData['impact']] = impact[reportData['impact']] + 1;
    });
    return Object.keys(impact).reduce((a, b) => impact[a] > impact[b] ? a : b);
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
    return self.appendData('floods?city=' + cityRegion + '&minimum_state=1', self.flood_extents, map);
  }

  removeFloodExtents(map) {
    let self = this;
    if (self.flood_extents) {
      map.removeLayer(self.flood_extents);
      self.flood_extents = null;
    }
  }

  addFloodGauges(cityName, cityRegion, map, togglePane) {
    let self = this;
    map.createPane('gauges');
    map.getPane('gauges').style.zIndex = 650;
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
    return self.appendData('floodgauges?city=' + cityRegion, self.gaugeLayer, map);
  }

  removeFloodGauges(map) {
    let self = this;
    if (self.gaugeLayer) {
      map.removeLayer(self.gaugeLayer);
      self.gaugeLayer = null;
    }
  }
}

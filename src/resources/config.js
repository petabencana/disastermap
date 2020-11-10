import env from '../environment';
import dep from '../deployment';
import {noView} from 'aurelia-framework';

//start-aurelia-decorators
@noView
//end-aurelia-decorators
export class Config {
  constructor() {
    this.map = dep.map;
    this.map.dep_name = dep.name;
    this.map.data_server = env[dep.name].data_server;
    this.map.data_server_key = env[dep.name].data_server_key;
    this.map.cards_server = env[dep.name].cards_server;
    this.map.tile_layer = env[dep.name].tile_layer;
    this.map.app = env[dep.name].app;
    // mapboxgl.accessToken = 'MAPBOX_ACCESS_TOKENpk.eyJ1IjoidXJiYW5yaXNrbWFwIiwiYSI6ImNqMnFraWVzYzAyd24ycXRqMmpvbmhyZ2QifQ.xc_v7umok760t2q6NZK1RA';
    this.map.report_timeperiod = env[dep.name].report_timeperiod;

    this.title = env[dep.name].title;
    this.supported_languages = dep.supported_languages;
    //Save default language as object
    for (let lang of this.supported_languages) {
      if (lang.key === env[dep.name].default_language) {
        this.default_language = lang;
      }
    }
    this.height_units = dep.height_units;
    this.deep_links = env[dep.name].deep_links;
  }
}

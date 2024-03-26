import $ from "jquery";
import { Config } from "../../resources/config";
import {Locales} from '../../resources/locales/locales';
import { bindable, customElement, computedFrom } from "aurelia-framework";
import { inject, observable } from "aurelia-framework";
import { HttpClient } from "aurelia-http-client";
import { EventAggregator } from 'aurelia-event-aggregator';

//start-aurelia-decorators
@customElement("landing")
@inject(Config, EventAggregator, HttpClient)
//end-aurelia-decorators
export class Landing {
  //start-aurelia-decorators
  @bindable
  helper;
  @bindable cities;
  @bindable selcity;
  @bindable switchCity;
  @bindable termscontents;
  @bindable initializetab;
  @bindable changeCity;
  //end-aurelia-decorators
  @observable query;
  constructor(Config, eventAggregator) {
    this.locale = new Locales();
    this.eventAggregator = eventAggregator;
    this.config = Config.map;
    this.configData = Config;
    console.log(this.configData)
    this.activeDisaster = "none";
    this.assetMap = {
      "#flood": "/assets/icons/Add_Report_Icon_Flood",
      "#earthquake": "/assets/icons/Add_Report_Icon_Earthquake",
      "#fire": "/assets/icons/Add_Report_Icon_Fire",
      "#volcano": "/assets/icons/Add_Report_Icon_Volcano",
      "#wind": "/assets/icons/wind",
      "#haze": "/assets/icons/Add_Report_Icon_Haze",
    };
    this.isFloatingMenuActive = false;
    this.enableEq = true;
    this.enableHaze = true;
    this.enableFire = true;
    this.enableWind = true;
    this.enableVolcano = true;
    this.city;
    this.level;
    this._status;
    this.warningText = false;
    this.midLevel;
    this.highLevel;
  }

  reportStatus() {
    this.eventAggregator.subscribe('addReportStatus', data => {
      let url = window.location.href;
      let location = url.split('/').pop();
      this.city =  decodeURIComponent(location)
      if(data && this.city){
        let found;
        const userCity = data.filter(item => {
          const impactArea = Object.keys(item.impacted)[0]
          return impactArea === this.city

        });
          this.midLevel = userCity.filter(item => 
            item.area.properties.category >= 1 && item.area.properties.category <=9 
          )
          this.highLevel = userCity.filter(item => 
            item.area.properties.category == 10 
          )
            this.getStatus();
            found = true;
        if (!found) {
          this.warningText = false;
          console.log('No city found');
        }
      }else {
        this.warningText = false;
        console.log('Err there is no data')
      }
    })
  }

  get currentCity() {
    return this.city;
  }

  @computedFrom('warningText')
  get warning(){
    return this.warningText;
  }

  getStatus() {
    if(this.highLevel.length > 0){
      this.warningText = true;
      this._status = 'Awas';
      return;
    } else if (this.midLevel.length > 0) {
      this.warningText = true;
      this._status = 'Siaga';
      return;
    } else {
      this.warningText = false;
      console.log('Level not found')
    }
  }

  get status() {
    return this._status;
  }

  domouseout() {
    $("#floating_buttons_wrapper").css({ height: "85px", overflow: "hidden" });
  }

  domouseover() {
    $("#floating_buttons_wrapper").css({
      height: "600px",
      overflow: "visible",
    });
  }

  activate(params, routerConfig) {
    this.queried_city = params.city;
    this.report_id = params.report;
    this.queried_lang =
      this.configData.supported_languages.indexOf(params.lang) > -1
        ? params.lang
        : null;
    this.queried_tab =
      params.tab === "info" || params.tab === "map" || params.tab === "report"
        ? params.tab
        : null;
    this.queried_terms =
      params.terms === "u_a" || params.terms === "p_p" ? params.terms : null;
  }

  queryChanged(newval, oldval) {
    this.searchText = newval;
    const map = Object.keys(this.config.instance_regions);
    let newObj = map.filter((value) => {
      return value.indexOf(newval) != -1 ? value : null;
    });
    this.searchResult = newObj;
    this.popupResults = newObj;
  }

  isCitySupported(querycity) {
    return querycity in this.config.instance_regions;
  }

  switchCity(city) {
    this.changeCity(city, true);
    this.closePane();
  }

  //report button on the map
  reportTab(event) {
    $("#reportLink").toggle("slide");
  }

  hideShowBlackBg(command) {
    if (command === "show") {
      $("#black_bg").css("display", "block");
    } else {
      $("#black_bg").css("display", "none");
    }
  }

  openClose(event) {
    $("#reportData").show();
  }

  resizeSidePane() {
    $("#sidePane").css({
      height: $(window).height() - ($("#topBar").height() + 30) + "px",
    });
    $("#dropdown_city").css({
      height: $(window).height() - ($("#topBar").height() + 30) + "px",
    });
    // $('#floating_buttons_wrapper').css({
    //   'max-height': ($(window).height() - 10) + 'px'
    // })
  }

  attached() {
    // If desktop, open side pane to 'info' tab

    // else if (this.queried_terms) {
    //   $('#screen').show();
    //   $('#termsPopup').show();
    // }

    // Modify side pane height on the fly
    this.resizeSidePane();
    $(window).resize(() => {
      this.resizeSidePane();
    });
    if (!/Mobi/.test(navigator.userAgent) && !this.report_id) {
      this.mapModel.togglePane("#sidePane", "show", false);
    }
    this.subscription = this.eventAggregator.subscribe('dateRangeChanged', dates => {
      this.mapModel.viewArchiveReports(dates);
    });
    this.reportStatus();
  }

  detached() {
    this.subscription.dispose();
  }

  showDateSlider() {
    return this.configData.showArchive;
  }


  toggleLightbox(imageurl) {
    this.imageurl = imageurl;
  }

  getBannerText() {
    return  this.config.environment === 'training';
  }

  initiateReport(type) {
    return new Promise((resolve, reject) => {
      if (type) {
        const client = new HttpClient().configure((x) => {
          x.withHeader("x-api-key", this.config.data_server_key);
        });
        const url = this.config.data_server + "cards/";
        const body = {
          username: "web_guest",
          language: this.webMenu.currentLanguage,
          network: "website",
        };

        client
          .post(url, body)
          .then((result) => {
            if (result.statusCode && result.statusCode === 200) {
              resolve(JSON.parse(result.response).cardId);
            } else {
              reject(result);
            }
          })
          .catch((error) => reject(error));
      } else {
        reject("Error with report id");
      }
    });
  }

  reportDisaster(type) {
    let self = this;
    self
      .initiateReport(type)
      .then((cardId) => {
        window.location = self.config.cards_server + cardId + "/" + type;
      })
      .catch((err) => {
      });
  }

  selectReport(typeReport) {
    let self = this;
    let toggleSrc = function (element) {
      let extention = element === "#wind" ? ".svg" : ".png";
      if (self.activeDisaster !== element) {
        toggleSrc(self.activeDisaster);
        self.activeDisaster = element;
      } else {
        self.activeDisaster = "noactive";
      }
      $(element).attr("src", function (index, attr) {
        let baseIcon = self.assetMap[element];

        return attr === baseIcon + extention
          ? baseIcon + "_Hover" + extention
          : baseIcon + extention;
      });
      $(element + "Link").toggle("slide");
    };
    toggleSrc("#" + typeReport);
  }
}

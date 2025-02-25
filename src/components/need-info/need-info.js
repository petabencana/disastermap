import { bindable, customElement, inject, BindingEngine, computedFrom} from "aurelia-framework";
import { HttpClient } from "aurelia-http-client";
import { Config } from "resources/config";
import { Locales } from "../../resources/locales/locales";
import { PointsService } from "../report-info/points-service"

//start-aurelia-decorators
@customElement("need-info")
@inject(Config, BindingEngine, PointsService)
//end-aurelia-decorators
export class NeedInfo {
  //start-aurelia-decorators

  @bindable locale;
  @bindable requestid;
  @bindable itemrequested;
  @bindable requestedon;
  @bindable quantitysatisfied;
  @bindable quantityrequested;
  @bindable allitemids;
  @bindable products;
  @bindable popupcontent;
  @bindable city;
  //end-aurelia-decorators

  constructor(Config, BindingEngine, PointsService) {
    this.locale = new Locales();
    this.config = Config.map;
    this.app = Config.map.app;
    this.service = PointsService;
    this.requested;
    this.styleString = "";
    this.items;
    this.products;
    this.requesteditems;
    this.bindingEngine = BindingEngine;
    this.showGiverBtn = true;
    this.requestid;
    this.shareButtons = [
        {
          name: 'share',
          tooltip: 'Share this report'
        },
        {
          name: 'flag',
          tooltip: 'Flag this report as inappropriate'
        }
      ];

      this.voteButtons = [
        {
          name: 'upvote',
          tooltip: 'Upvote this report',
          enabled: true
        },
        {
          name: 'downvote',
          tooltip: 'Downvote this report',
          enabled: true
        }
      ];
}
  //end-aurelia-decorators

  get msgText() {
    return this.locale.report_info.need_share_msg;
}
get reportUrl() {
    return encodeURI(this.app + 'map/' + this.city); 
  }

  attached() {
      this.loadTranslations();
      let self = this;
        self.socialButtons = [
            // Name string should match fontello icons name
            {
              name: 'twitter',
              intent:
                'https://twitter.com/intent/tweet?text=' +
                encodeURIComponent(self.msgText + ' ' + self.reportUrl)
            },
            {
              name: 'telegram',
              intent:
                'https://telegram.me/share/url?url=' +
                encodeURIComponent(self.msgText + ' ' + self.reportUrl)
            },
            {
              name: 'whatsapp',
              intent:
                'https://api.whatsapp.com/send?text=' +
                self.msgText +
                '%20' +
                self.reportUrl
            },
            {
              name: 'facebook',
              intent: 'http://www.facebook.com/sharer/sharer.php?u=' + self.reportUrl
            }
        ];
        self.popupcontent.voteChanged = true;
    }

    requestidChanged(newValue, oldValue) {
        this.requestid = newValue;

  }

  bind() {
    this.bindingEngine.propertyObserver(this, "locale").subscribe((newValue, oldValue) => {
      this.locale = newValue;
      this.loadTranslations();
  });
  }

  @computedFrom('popupcontent.voteChanged')
  //end-aurelia-decorators
  get upvoteDisabled() {
    if (localStorage.getItem('id_' + this.requestid)) {
      if (localStorage.getItem('id_' + this.requestid) === 'up') {
        return true;
      }
      return false;
    }
    return false;
  }
  //start-aurelia-decorators
  @computedFrom('popupcontent.voteChanged')
  //end-aurelia-decorators
  get downvoteDisabled() {
    if (localStorage.getItem('id_' + this.requestid)) {
      if (localStorage.getItem('id_' + this.requestid) === 'down') {
        return true;
      }
      return false;
    }
    return false;
  }

  voteHandler(vote) {
    const self = this;
    // Trigger getter to update disabled status
    self.popupcontent.voteChanged = true;
    self.service.updatePoints(self.requestid, vote).then(points => {
      if (vote > 0) {
        // Upvote
        if (localStorage.getItem('id_' + self.requestid)) {
          if (localStorage.getItem('id_' + this.requestid) === 'down') {
            // Case 1: already downvoted
            localStorage.setItem('id_' + self.requestid, 'none');
          } else {
            // Case 2: not downvoted
            localStorage.setItem('id_' + self.requestid, 'up');
          }
        } else {
          // Case 3: never voted for this report id
          localStorage.setItem('id_' + self.requestid, 'up');
        }
        // Trigger getter to update disabled status
        self.popupcontent.voteChanged = true;
      } else {
        // Downvote
        if (localStorage.getItem('id_' + self.requestid)) {
          if (localStorage.getItem('id_' + this.requestid) === 'up') {
            // Case 1: already upvoted
            localStorage.setItem('id_' + self.requestid, 'none');
          } else {
            // Case 2: not upvoted
            localStorage.setItem('id_' + self.requestid, 'down');
          }
        } else {
          // Case 3: never voted for this report id
          localStorage.setItem('id_' + self.requestid, 'down');
        }
      }
    });
    // Set voteChanged back to false to enable trigger on next button click
    self.popupcontent.voteChanged = false;
  }

  itemrequestedChanged(newValue, oldValue) {
    if (newValue && Array.isArray(newValue) && newValue.length > 0) {
      this.loadTranslations();
  }
  }

  get satisfiedPercentage() {
    let percentage = 0;
    if (this.quantitysatisfied == 0) {
        this.styleString = "height:24px;width:0px";
        percentage = 0;
    } else {
        let satisfied = parseInt(this.quantitysatisfied);
        let requested = parseInt(this.quantityrequested);
        this.styleString = 'height:24px;width:${parseInt("1")/parseInt(this.requested) * 100}%';
        percentage = (satisfied / requested) * 100;
    }
    this.showGiverBtn = percentage !== 100;
    return parseInt(percentage);
  }

  loadTranslations() {
    this.items = this.locale.need_info.productsList;
    this.products = this.itemrequested.map(x => {
        const prod = this.items.find(p => p.item_id === x["item-id"]);
        return {
            title: prod.title,
            units: prod.units,
            quantity: x.quantity,
            description: x.description
        };
    });
  }

  // initiateGiver() {
  //   this.isActive = true;
  //   let self = this;
  //   self.initiateReport()
  //       .then(cardId => {
  //           window.location = self.config.cards_server + cardId + "/" + "giver" + `?requestId=${this.requestid}`;
  //       })
  //       .catch(err => {
  //           console.log(err);
  //       });
  // }

  initiateReport() {
    return new Promise((resolve, reject) => {
      const client = new HttpClient().configure(x => {
          x.withHeader("x-api-key", this.config.data_server_key);
      });
      const url = this.config.data_server + "cards/";
      const body = {
          username: "web_guest",
          language: this.webMenu ? this.webMenu.currentLanguage : "id",
          network: "website"
      };

      client
          .post(url, body)
          .then(result => {
              if (result.statusCode && result.statusCode === 200) {
                  resolve(JSON.parse(result.response).cardId);
              } else {
                  reject(result);
              }
          })
          .catch(error => reject(error));
  });
  }
}

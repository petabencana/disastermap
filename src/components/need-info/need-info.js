import {bindable, customElement, inject} from 'aurelia-framework';
import { HttpClient } from "aurelia-http-client";
import { Config } from "resources/config";

//start-aurelia-decorators
@customElement('need-info')
@inject(Config)

//end-aurelia-decorators
export class NeedInfo {
  //start-aurelia-decorators
  @bindable locale;
  @bindable requestid;
  @bindable itemrequested;
  @bindable requestedon;
  @bindable quantitysatisfied;

  constructor(Config) {
    this.config = Config.map;
    this.requested;
    this.styleString = '';
  }
  //end-aurelia-decorators

  get satisfiedPercentage(){
    let percentage;
    if(this.quantitysatisfied == 0) {
      this.styleString = 'height:24px;width:0px';
      percentage = 0;
    } else {
      let satisfied = parseInt(this.quantitysatisfied);
      this.requested = this.itemrequested.reduce((total, item) => total + parseInt(item.quantity), 0);
      this.styleString = 'height:24px;width:${parseInt("1")/parseInt(this.requested) * 100}%';
      percentage = ( satisfied / this.requested ) * 100;
    }
    return parseInt(percentage);
  }

  initiateGiver() {
    this.isActive = true;
    let self = this;
    self
      .initiateReport()
      .then((cardId) => {
        window.location = self.config.cards_server + cardId + "/" + 'giver' + `?requestId=${this.requestid}`;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  initiateReport() {
    return new Promise((resolve, reject) => {
        const client = new HttpClient().configure((x) => {
          x.withHeader("x-api-key", this.config.data_server_key);
        });
        const url = this.config.data_server + "cards/";
        const body = {
          username: "web_guest",
          language: this.webMenu ? this.webMenu.currentLanguage : "id",
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
    });
  }

}
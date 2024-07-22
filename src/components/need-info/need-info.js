import {bindable, customElement, inject, BindingEngine} from 'aurelia-framework';
import { HttpClient } from "aurelia-http-client";
import { Config } from "resources/config";
import {Locales} from '../../resources/locales/locales';

//start-aurelia-decorators
@customElement('need-info')
@inject(Config, BindingEngine)

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
  
  constructor(Config, BindingEngine) {
    this.locale = new Locales();
    this.config = Config.map;
    this.requested;
    this.styleString = '';
    this.items;
    this.products;
    this.requesteditems;
    this.bindingEngine = BindingEngine;
  }
  //end-aurelia-decorators

  attached() {
    this.loadTranslations();
  }

  bind() {
    this.bindingEngine.propertyObserver(this, 'locale').subscribe((newValue, oldValue) => {
      this.locale = newValue;
      this.loadTranslations();
    });
  }

  itemrequestedChanged(newValue, oldValue) {
    if (newValue && Array.isArray(newValue) && newValue.length > 0) {
        this.loadTranslations(); 
    } 
}

  get satisfiedPercentage(){
    let percentage;
    if(this.quantitysatisfied == 0) {
      this.styleString = 'height:24px;width:0px';
      percentage = 0;
    } else {
      let satisfied = parseInt(this.quantitysatisfied);
      let requested = parseInt(this.quantityrequested);
      this.styleString = 'height:24px;width:${parseInt("1")/parseInt(this.requested) * 100}%';
      percentage = ( satisfied / requested) * 100;
    }
    return parseInt(percentage);
  }

  loadTranslations() {
    this.items = this.locale.need_info.productsList
    this.products = this.itemrequested.map((x) => {
    const prod = this.items.find((p) => p.item_id === x['item-id'])
    return {
      title : prod.title,
      units : prod.units,
      quantity : x.quantity,
      description : x.description,
  }
  })
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
import {bindable, customElement} from 'aurelia-framework';

//start-aurelia-decorators
@customElement('need-info')
//end-aurelia-decorators
export class NeedInfo {
  //start-aurelia-decorators
  @bindable locale;
  @bindable requestid;
  @bindable itemrequested;
  @bindable requestedon;
  @bindable quantitysatisfied;

  constructor() {
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

}
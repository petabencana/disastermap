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
    const satisfied = parseInt(this.quantitysatisfied);
    this.requested = this.itemrequested.reduce((total, item) => total + parseInt(item.quantity), 0);
    this.styleString = 'height:24px;width:${parseInt("1")/parseInt(this.requested) * 100}%';
    let percentage = ( satisfied / this.requested ) * 100;
    return parseInt(percentage);
  }

}
import {bindable, customElement} from 'aurelia-framework';

//start-aurelia-decorators
@customElement('need-info')
//end-aurelia-decorators
export class NeedInfo {
  //start-aurelia-decorators
  constructor() {
    this.styleString = 'height:24px;width:${parseInt("1")/parseInt(quantityrequested) * 100}%';
  }
  @bindable locale;
  @bindable id;
  @bindable itemrequested;
  @bindable quantityrequested;
  @bindable quantitysatisfied;
  @bindable percentsatisfied;
  @bindable requestedon;
  //end-aurelia-decorators
}

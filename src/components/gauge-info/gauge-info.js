import {bindable, customElement} from 'aurelia-framework';

//start-aurelia-decorators
@customElement('gauge-info')
//end-aurelia-decorators
export class GaugeInfo {
  //start-aurelia-decorators
  @bindable name;
  @bindable locale;
  @bindable description;
  //end-aurelia-decorators
}

import { bindable, bindingMode, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class DateSlider {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) dateRange = [];

    dateOptions = {
      mode: 'range',
      dateFormat: 'Y-m-d',
      enableTime: false
    };

    constructor(eventAggregator) {
      this.eventAggregator = eventAggregator;
    }

    dateRangeChanged() {
      this.eventAggregator.publish('dateRangeChanged', this.dateRange);
    }

    clearDates() {
      // Clear the selected dates
      this.dateRange = [];
      // Publish an event or perform additional logic if needed
      this.eventAggregator.publish('dateRangeChanged', this.dateRange);
    }
}

import environment from './environment';
import { PLATFORM } from 'aurelia-pal';

//Configure Bluebird Promises.
Promise.config({
  longStackTraces: environment.debug,
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('aurelia-flatpickr'))
    .plugin(PLATFORM.moduleName('aurelia-event-aggregator'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }
  aurelia.start().then(a => a.setRoot());
}

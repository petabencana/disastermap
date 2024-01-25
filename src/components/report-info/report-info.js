import {
  inject,
  bindable,
  customElement,
  computedFrom
} from 'aurelia-framework';
import { Config } from '../../resources/config';
import { PointsService } from './points-service';

//start-aurelia-decorators
@customElement('report-info')
@inject(Config, PointsService)
//end-aurelia-decorators
export class ReportInfo {
  //@bindable attributes do not work with camelCase...
  //start-aurelia-decorators
  @bindable locale;
  @bindable city;
  @bindable popupcontent;
  @bindable id;
  @bindable openLightbox;
  //end-aurelia-decorators

  constructor(Config, PointsService) {
    this.config = Config;
    this.service = PointsService;
    this.app = Config.map.app;
    this.links = {
      qlue:
        'https://play.google.com/store/apps/details?id=org.qluein.android&hl=en',
      detik: 'http://pasangmata.detik.com/',
      //start-aurelia-decorators
      grasp: 'javascript:void(0)'
      //end-aurelia-decorators
    };

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

    this.airQualityColors = [
      '',
      'rgb(232, 232, 28)',
      'rgb(255, 131, 0)',
      'rgb(204, 42, 65)',
      'rgb(204, 42, 65)'
    ];

    this.impactColors = [
      'rgb(232, 232, 28)',
      'rgb(255, 131, 0)',
      'rgb(204, 42, 65)'
    ];

    this.visibilityImgPlaceholderSuffix = [
      'low',
      'normal',
      'high'
    ];

    this.impactImgPlaceholderSuffix = [
      'low',
      'medium',
      'high'
    ];
  }

  feedbackInteraction(button) {
    if ($('#shareButtons' + button.name).hasClass('highlight')) {
      // if clicked button active
      // remove highlight class from all .shareButtons
      $('.shareButtons').removeClass('highlight');
      // hide all .interactionFlyer
      $('.interactionFlyer').hide();
    } else {
      // if selected button inactive
      // remove highlight class from all .shareButtons
      $('.shareButtons').removeClass('highlight');
      // add highlight class to clicked button
      $('#shareButtons' + button.name).addClass('highlight');
      // hide all .interactionFlyer
      $('.interactionFlyer').hide();
      // show selected interactionFlyer
      $('#' + button.name + 'Flyer').show();
    }
  }

  get msgText() {
    return this.locale.report_info.share_msg;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get reportUrl() {
    return this.app + 'map/' + this.city + '/' + this.popupcontent.pkey;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get reportId() {
    if (this.popupcontent.pkey) {
      return this.popupcontent.pkey;
    }
    return null;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get height() {
    if (this.popupcontent.report_data) {
      return this.popupcontent.report_data.flood_depth;
    }
    return null;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get condition() {
    if (this.popupcontent.report_data) {
      return this.locale.report_info.conditions[this.popupcontent.report_data.condition];
    }
    return null;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get sevearity() {
    if (this.popupcontent.report_data && this.popupcontent.report_data.report_type === 'road') {
      // eslint-disable-next-line default-case
      switch (this.popupcontent.report_data.condition) {
      case 0: return 'low';
      case 1: return 'medium';
      case 2: return 'high';
      }
    }
    if (this.popupcontent.sevearity) {
      return this.popupcontent.sevearity;
    }
    return 'low';
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get accessabilitySevearity() { // To show different sevearity color and default image
    if (this.popupcontent.sevearity) {
      return this.popupcontent.sevearity;
    }
    return 'low';
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get disasterType() {
    if (this.popupcontent.report_data && this.popupcontent.report_data.report_type) {
      return this.popupcontent.report_data.report_type;
    }
    return null;
  }

  get airQuality() {
    if (this.popupcontent.report_data && this.popupcontent.report_data.airQuality >= 0) {
      return this.popupcontent.report_data.airQuality;
    }
    return null;
  }

  get visibility() {
    if (this.popupcontent.report_data && this.popupcontent.report_data.visibility >= 0) {
      return this.popupcontent.report_data.visibility;
    }
    return null;
  }

  get fireextent() {
    if (this.popupcontent.report_data && this.popupcontent.report_data.fireDistance) {
      return Math.round((Math.PI * Math.pow(this.popupcontent.report_data.fireDistance, 2) / 10000) * 100) / 100 + ' ' + this.locale.report_info.fireextentUnit;
    }
    return null;
  }

  get impact() {
    if (this.popupcontent.report_data && this.popupcontent.report_data.impact >= 0) {
      return this.popupcontent.report_data.impact;
    }
    return null;
  }

  get smogImpact() {
    if (this.popupcontent.report_data && this.popupcontent.report_data.smogImpact >= 0) {
      return this.popupcontent.report_data.smogImpact;
    }
    return null;
  }

  get noOfPeople() {
    if (this.popupcontent.report_data && this.popupcontent.report_data.evacuationNumber) {
      return this.popupcontent.report_data.evacuationNumber;
    }
    return null;
  }

  get evacArea() {
    if (this.popupcontent.report_data && this.popupcontent.report_data.evacuationArea) {
      return this.popupcontent.report_data.evacuationArea;
    }
    return null;
  }

  get volcanicSigns() {
    if (this.popupcontent.report_data && this.popupcontent.report_data.volcanicSigns) {
      let ary = this.popupcontent.report_data.volcanicSigns.map(d => {
        return this.locale.report_info.signsValues[d];
      });
      return ary.join(', ');
    }
    return null;
  }


  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get accessabilityFailure() {
    if (this.popupcontent.report_data && this.popupcontent.report_data) {
      return this.locale.report_info.accessability_failures[this.popupcontent.report_data.accessabilityFailure];
    }
    return null;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get structureFailure() {
    if (this.popupcontent.report_data && this.popupcontent.report_data) {
      return this.locale.report_info.structure_failures[this.popupcontent.report_data.structureFailure];
    }
    return null;
  }

  get fireDistance() {
    if (this.popupcontent.report_data && this.popupcontent.report_data) {
      return this.popupcontent.report_data.fireDistance;
    }
    return null;
  }

  get evacuationNumber() {
    if (this.popupcontent.report_data && this.popupcontent.report_data) {
      return this.popupcontent.report_data.evacuationNumber;
    }
    return null;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get points() {
    if (this.popupcontent.report_data && this.popupcontent.report_data) {
      return this.popupcontent.report_data.points;
    }
    return 0;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get imageurl() {
    return this.popupcontent.image_url;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get fullsizeimg() {
    if (this.popupcontent.image_url) {
      return this.popupcontent.image_url.replace(
        /(\/[-a-zA-Z0-9]*)(?=\.jpg)/,
        '/large' + '$1'
      );
    }
    return null;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get title() {
    return this.popupcontent.title;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get reportevent() {
    if (this.popupcontent.report_data && this.popupcontent.report_data) {
      return this.popupcontent.report_data.report_type;
    }
    return null;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get source() {
    return this.popupcontent.source;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get timestamp() {
    return this.popupcontent.timestamp;
  }

  //start-aurelia-decorators
  @computedFrom('popupcontent')
  //end-aurelia-decorators
  get text() {
    return this.popupcontent.text;
  }

  //start-aurelia-decorators
  @computedFrom("popupcontent")
  //end-aurelia-decorators
  get isPartnerImage() {
    return !!this.popupcontent.partner_icon;
  }
    
  //start-aurelia-decorators
  @computedFrom("popupcontent")
  //end-aurelia-decorators
  get fetchPartnerImage() {
    // To remove the signed part from the url
    let partnerImage = this.popupcontent.partner_icon.split("?")
    return partnerImage[0];
  }

  
  attached() {
    let self = this;

    self.socialButtons = [
      // Name string should match fontello icons name
      // {
      //   name: 'twitter',
      //   intent:
      //     'https://twitter.com/intent/tweet?text=' +
      //     self.msgText +
      //     '%20' +
      //     self.reportUrl
      // },
      {
        name: 'telegram',
        intent:
          'https://telegram.me/share/url?url=' +
          self.reportUrl +
          ' &text= ' +
          self.msgText
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

  //start-aurelia-decorators
  @computedFrom('popupcontent.voteChanged')
  //end-aurelia-decorators
  get upvoteDisabled() {
    if (localStorage.getItem('id_' + this.reportId)) {
      if (localStorage.getItem('id_' + this.reportId) === 'up') {
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
    if (localStorage.getItem('id_' + this.reportId)) {
      if (localStorage.getItem('id_' + this.reportId) === 'down') {
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

    self.service.updatePoints(self.reportId, vote).then(points => {
      if (vote > 0) {
        // Upvote
        if (localStorage.getItem('id_' + self.reportId)) {
          if (localStorage.getItem('id_' + this.reportId) === 'down') {
            // Case 1: already downvoted
            localStorage.setItem('id_' + self.reportId, 'none');
          } else {
            // Case 2: not downvoted
            localStorage.setItem('id_' + self.reportId, 'up');
          }
        } else {
          // Case 3: never voted for this report id
          localStorage.setItem('id_' + self.reportId, 'up');
        }

        // Trigger getter to update disabled status
        self.popupcontent.voteChanged = true;
      } else {
        // Downvote
        if (localStorage.getItem('id_' + self.reportId)) {
          if (localStorage.getItem('id_' + this.reportId) === 'up') {
            // Case 1: already upvoted
            localStorage.setItem('id_' + self.reportId, 'none');
          } else {
            // Case 2: not upvoted
            localStorage.setItem('id_' + self.reportId, 'down');
          }
        } else {
          // Case 3: never voted for this report id
          localStorage.setItem('id_' + self.reportId, 'down');
        }
      }
    });

    // Set voteChanged back to false to enable trigger on next button click
    self.popupcontent.voteChanged = false;
  }
}

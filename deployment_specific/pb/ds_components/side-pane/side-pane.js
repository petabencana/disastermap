import { bindable, customElement, inject } from 'aurelia-framework';
import $ from 'jquery';
import { Config } from 'resources/config';
import { Locales } from 'resources/locales/locales';
import { EventAggregator } from 'aurelia-event-aggregator';

//start-aurelia-decorators
@customElement('side-pane')
@inject(Locales, Config, EventAggregator)
//end-aurelia-decorators
export class SidePane {
  //@bindable attributes do not work with camelCase...
  //start-aurelia-decorators
  @bindable cities;
  @bindable selcity;
  @bindable changeCity;
  @bindable closePane;
  @bindable reportId;
  @bindable querylanguage;
  //end-aurelia-decorators
  constructor(Locales, Config, EventAggregator) {
    this.config = Config;
    this.languages = this.config.supported_languages;
    this.eventAggregator = EventAggregator;
    this.selectedCheckbox = true;

    this.lang_obj = {};
    for (let lang of this.languages) {
      if (Locales.languages.hasOwnProperty(lang.key)) {
        this.lang_obj[lang.key] = Locales.languages[lang.key];
      }
    }
    this.locale = {};
    this.currentLanguage = '';

    this.menuList = ['report', 'legend', 'notification','needs', 'about'];
    // this.seltab = 'about'; //default tab to open
    this.switchTab(this.seltab);

    this.selLegend = '';
    // this.switchLegend('floods_legend');

    this.vidWrapperOpened = true;
    this.youtube_video = {
      id: 'https://www.youtube.com/embed/B6tXP4wBoiI',
      en: 'https://www.youtube.com/embed/_A53C84wF7Y',
      icon: 'deployment_specific/pb/ds_assets/icons/youtube.png'
    };
    this.report_methods = [
      {
        platform: 'whatsapp', //Match string to locale/*/translation.json > report_content.*
        icon: 'deployment_specific/pb/ds_assets/icons/whatsapp.png'
      },
      {
        platform: 'twitter', //Match string to locale/*/translation.json > report_content.*
        icon: 'deployment_specific/pb/ds_assets/icons/twitter.png'
      },
      {
        platform: 'telegram',
        icon: 'deployment_specific/pb/ds_assets/icons/telegram.png'
      },
      {
        platform: 'facebook',
        icon: 'deployment_specific/pb/ds_assets/icons/facebook.png'
      },
      {
        platform: 'web',
        icon: 'deployment_specific/pb/ds_assets/icons/web_report.png'
      }
    ];

    this.notify_methods = [
      {
        platform: 'whatsapp', //Match string to locale/*/translation.json > report_content.*
        icon: 'deployment_specific/pb/ds_assets/icons/whatsapp.png'
      }
    ];

    this.needs_info = [
      {
        platform: 'whatsapp', //Match string to locale/*/translation.json >
        icon: 'deployment_specific/pb/ds_assets/icons/whatsapp.png'
      },
      {
        platform: 'website',
        icon: 'deployment_specific/pb/ds_assets/icons/globe.svg'
      }
    ];

    this.need_youtube_vedio = {
      en: 'https://youtube.com/embed/9aD3w9znFUg',
      id: 'https://youtube.com/embed/9aD3w9znFUg',
      icon: 'deployment_specific/pb/ds_assets/icons/youtube.png'
    }

    this.need_beta_icon = 'deployment_specific/pb/ds_assets/icons/beta.svg'

    //this needs to be dynamicaly populated from backend data
    this.last_report_received_on = [
      { en: 'Reports remain active for 3 hours', id: 'Masa aktif laporan: 3 jam'},
      { en: 'Reports remain active for 12 hours', id: 'Masa aktif laporan: 12 jam'},
      { en: 'Reports remain active for 12 hours', id: 'Masa aktif laporan: 12 jam'},
      { en: 'Reports remain active for 2 hours', id: 'Masa aktif laporan: 2 jam'},
      { en: 'Reports remain active for 6 hours', id: 'Masa aktif laporan: 6 jam'},
      { en: 'Reports remain active for 6 hours', id: 'Masa aktif laporan: 6 jam'},
      { en: 'Reports remain active for 12 hours', id: 'Masa aktif laporan: 12 jam'}
    ]

    //legends data
    this.all_legends_data = [
      //floods
      {
        legend_name: 'floods',
        legend_title: { en: 'floods', id: 'banjir' },
        legend_title_icon: 'deployment_specific/pb/ds_assets/icons/Add_Report_Icon_Flood.png',
        col_1_title: { en: 'Flood Gauges', id: 'Tinggi Muka Air' },
        col_2_title: { en: 'Flood Depth (cm)', id: 'Tinggi Banjir (cm)' },
        legend_data: [
          {
            col_1: {
              text: { en: 'Alert Level 1', id: 'Siaga 1' },
              icon: 'assets/icons/floodgauge_1.svg',
              color: '#CC2A41' //red
            },
            col_2: {
              text: { en: '> 150', id: '> 150' },
              color: '#CC2A41' //red
            }
          },
          {
            col_1: {
              text: { en: 'Alert Level 2', id: 'Siaga 2' },
              icon: 'assets/icons/floodgauge_2.svg',
              color: '#FF8300' //orange
            },
            col_2: {
              text: { en: '71 - 150', id: '71 - 150' },
              color: '#FF8300' //orange
            }
          },
          {
            col_1: {
              text: { en: 'Alert Level 3', id: 'Siaga 3' },
              icon: 'assets/icons/floodgauge_3.svg',
              color: '#FFFF00' //yellow
            },
            col_2: {
              text: { en: '10 - 70', id: '10 - 70' },
              color: '#FFFF00' //yellow
            }
          },
          {
            col_1: {
              text: { en: 'Alert Level 4', id: 'Siaga 4' },
              icon: 'assets/icons/floodgauge_4.svg',
              color: '#9ce233' //green
            },
            col_2: {
              text: { en: 'Use Caution', id: 'Hati-hati' },
              color: '#A0A9F7' //purple
            }
          }]
      },
      //earthquake_road
      {
        legend_name: 'eq_road_access',
        legend_title: { en: 'EARTHQUAKE (ROAD ACCESSIBILITY)', id: 'GEMPABUMI (AKSES JALAN)' },
        legend_title_icon: 'deployment_specific/pb/ds_assets/icons/road_select.svg',
        legend_data: [
          {
            col_1: {
              text: { en: '<0.5m (No Vehicle Access)', id: '<0.5m (Tidak Bisa Dilewati Kendaraan)' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_road_4.svg',

              color: '#CC2A41' //red
            }
          },
          {
            col_1: {
              text: { en: '0.6m – 1.0m (2-Wheel Vehicle Access)', id: '0.6m – 1.0m (Akses Kendaraan Roda 2)' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_road_3.svg',
              color: '#FF8300' //orange
            }
          },
          {
            col_1: {
              text: { en: '1.1m-1.8m (4-Wheel Vehicle Access)', id: '1.1m-1.8m (Akses Kendaraan Roda 4)' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_road_2.svg',
              color: '#FFFF00' //yellow
            }
          },
          {
            col_1: {
              text: { en: '>1.9m (Large Vehicle Access)', id: '>1.9m (Akses Kendaraan Truk)' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_road_1.svg',
              color: '#9ce233' //green
            }
          }
        ]
      },
      //earthquake_structural
      {
        legend_name: 'eq_structure_fail',
        legend_title: { en: 'Earthquake (Structural Failure)', id: 'GEMPABUMI (KERUSAKAN BANGUNAN)' },
        legend_title_icon: 'deployment_specific/pb/ds_assets/icons/Add_Report_Icon_Earthquake.png',
        legend_data: [
          {
            col_1: {
              text: { en: 'Fully Collapsed', id: 'Roboh total' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_structure_3.svg',
              color: '#CC2A41' //red
            }
          },
          {
            col_1: {
              text: { en: 'Partial Collapse', id: 'Roboh Sebagian' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_structure_2.svg',
              color: '#FF8300' //orange
            }
          },
          {
            col_1: {
              text: { en: 'Cracking', id: 'Retak' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/eq_structure_1.svg',
              color: '#FFFF00' //yellow
            }
          }
        ]
      },
      //wind
      {
        legend_name: 'wind',
        legend_title: { en: 'Extreme Wind', id: 'ANGIN KENCANG' },
        legend_title_icon: 'deployment_specific/pb/ds_assets/icons/wind.svg',
        legend_data: [
          {
            col_1: {
              text: { en: 'High Disruption (Flying roofs, Structural Failure, Large Obstacles flying, crop damage)', id: 'Dampak Berat (Atap Bangunan Terbang, Kerusakan Bangunan, Objek Besar Roboh, Kerusakan Pertanian)' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/w_3.svg',
              color: '#CC2A41' //red
            }
          },
          {
            col_1: {
              text: { en: 'Medium Disruption (Road blockages, transport disturbance, blackout)', id: 'Dampak Sedang (Penutupan Jalan, Gangguan Transportasi, Listrik Padam)' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/w_2.svg',
              color: '#FF8300' //orange
            }
          },
          {
            col_1: {
              text: { en: 'Low Disruption (Small objects flying)', id: 'Dampak Ringan (Objek Kecil Beterbangan)' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/w_1.svg',
              color: '#FFFF00' //yellow
            }
          }
        ]
      },
      //fire
      {
        legend_name: 'fire',
        legend_title: { en: 'FOREST FIRE', id: 'KEBAKARAN HUTAN' },
        legend_title_icon: 'deployment_specific/pb/ds_assets/icons/Add_Report_Icon_Fire.png',
        // legend_data: [
        //   {
        //     col_1: {
        //       text: { en: 'Forest Fire', id: 'kebakaranhutan' },
        //       icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/fire_1.svg'
        //     }
        //   }]
      },
      //haze
      {
        legend_name: 'haze',
        legend_title: { en: 'HAZE', id: 'KABUT ASAP' },
        legend_title_icon: 'deployment_specific/pb/ds_assets/icons/Add_Report_Icon_Haze.png',
        legend_data: [
          {
            col_1: {
              text: { en: 'Hazardous Air Quality (Headache, Shortness of Breath)', id: 'Kualitas Udara Berbahaya (Pusing, Sesak Nafas)' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/haze_3.svg',
              color: '#CC2A41' //red
            }
          },
          {
            col_1: {
              text: { en: 'Severe Air Quality (Watery Eyes)', id: 'Kualitas Udara Buruk (Mata Pedih)' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/haze_2.svg',
              color: '#FF8300' //orange
            }
          },
          {
            col_1: {
              text: { en: 'Poor Air Quality (Smell Smoke)', id: 'Kualitas Udara Rendah (Tercium Bau Asap)' },
              icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/haze_1.svg',
              color: '#FFFF00' //yellow
            }
          }
        ]
      },
      //volcano
      {
        legend_name: 'volcano',
        legend_title: { en: 'VOLCANO', id: 'GUNUNG API' },
        legend_title_icon: 'deployment_specific/pb/ds_assets/icons/Add_Report_Icon_Volcano.png',
        // legend_data: [
        //   {
        //     col_1: {
        //       text: { en: 'Volcano', id: 'gunungapi' },
        //       icon: 'deployment_specific/pb/ds_assets/icons/lgd_icons/vol_1.png'
        //     }
        //   }]
      },
      //Need
      {
        legend_name: 'need',
        legend_title: { en: 'Mutual Aid Map', id: 'Peta Gotong Royong' },
        legend_title_icon: 'deployment_specific/pb/ds_assets/icons/need.svg',
        isSelected: this.selectedCheckbox
      }
    ];
    //end legends data array
  }

  //on the fly language change
  changeLanguage(language) {
    this.locale = this.lang_obj[language];
    this.currentLanguage = language;

    $('li p').click(function() {
      // reset all
      $('ul.tabs p').removeClass('activelanguage');
      $(this).addClass('activelanguage');
      $(this).parents('li').find('p').filter(function() {
        return !$(this).closest('p').hasClass('tabs-nav');
      }).addClass('activelanguage');
    });
  }

  //get language object from key
  getLangObj(key) {
    let selLang;
    for (let lang of this.languages) {
      if (key === lang.key) {
        selLang = lang;
      } else {
        selLang = this.config.default_language;
      }
    }
    return selLang;
  }

  //add checkbox
  onCheckClicked(legend) {
    this.selectedCheckbox = !this.selectedCheckbox;
    legend.isSelected = !legend.isSelected;
    this.eventAggregator.publish("onCheckClicked", legend.isSelected);
    // Reassign the array to trigger reactivity
    this.all_legends_data = [...this.all_legends_data];
    this.legends = this.legends.slice();
  }

  attached() {
    this.selLanguage = this.querylanguage
      ? this.getLangObj(this.querylanguage)
      : this.config.default_language;
    this.changeLanguage(this.selLanguage.key);
  }

  switchTab(tab) {
    this.seltab = tab;
    $('.panel:not(#vid_' + tab + ')').slideUp('fast');
    $('#vid_' + tab).slideToggle('fast');
    $('.accordion:not(#label_' + tab + ')').parent().removeClass('active');
    $('#label_' + tab).parent().toggleClass('active');
    $('#down_' + tab + ', #up_' + tab).toggle();
    $('.up:not(#up_' + tab + ')').hide();
    $('.down:not(#down_' + tab + ')').show();
  }

  switchLegend(legendId) {
    if (this.selLegend !== legendId) {
      this.selLegend = legendId
    } else {
      this.selLegend = null;
    }
  }

  switchCity(city) {
    this.changeCity(city, true);
    this.reportId = null;
    this.closePane();
  }

  showVideo(video) {
    $('.videoWrapper:not(#vid_' + video + ')').slideUp('fast');
    $('#vid_' + video).slideToggle('fast');
  }

  showNotificationSteps() {
    if (notificationElement) {
      this.notificationElement.style.display = (this.notificationElement.style.display === 'none') ? 'block' : 'none';
    }
  }

  // When the user clicks on div, open the popup
  openTermsPopup() {
    this.closePane();
    $('#screen').show();
    $('#termsPopup').show();
  }
}

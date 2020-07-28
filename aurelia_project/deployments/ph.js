export default {
  name: 'mapakalamidad',
  height_units: 'cm',
  supported_languages: [
    { key: 'en', name: 'English', code: 'EN' },
    { key: 'id', name: 'Bahasa', code: 'BI' }
  ],
  map: {
    'instance_regions': {},
    'default_region': {
      'region': 'manila',
      'bounds': {
        'sw': [14.027, 120.015], // [ymin , xmin]
        'ne': [15.303, 121.677] // [ymax, xmax]
      },
      'center': [14.49, 120.57]
    },
    'sub_regions': {},
    'region_center': [14.49, 120.57],
    'start_city_center': [14.49, 120.57],
    'starting_zoom': 8.5,
    'minimum_zoom': 8
  }
};

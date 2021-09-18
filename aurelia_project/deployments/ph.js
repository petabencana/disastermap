export default {
  id: 'ph',
  name: 'mapakalamidad',
  height_units: 'cm',
  supported_languages: [
    { key: 'en', name: 'English', code: 'EN' },
    { key: 'tl', name: 'Tagalog', code: 'TL' }
  ],
  map: {
    'instance_regions': {
      'National Capital Region': {
        'region': 'PH-00',
        'bounds': { 'sw': [14.24448, 120.51691], 'ne': [14.96439, 121.58075 ]},
        'center': [14.57882, 121.03490 ]
      },
      'Ilocos Region': {
        'region': 'PH-01',
        'bounds': { 'sw': [15.3199, 118.0442], 'ne': [18.7736, 123.2794] },
        'center': [17.0423, 120.5601]
      },

      'Cagayan Valley': {
        'region': 'PH-02',
        'bounds': { 'sw': [15.7787, 117.4245], 'ne': [21.0936, 125.2458] },
        'center': [18.7243, 121.6045]
      },

      'Central Luzon': {
        'region': 'PH-03',
        'bounds': { 'sw': [14.3251, 119.3801], 'ne': [16.5786, 122.6750] },
        'center': [15.3798, 120.8824]
      },
      'CALABARZON': {
        'region': 'PH-40',
        'bounds': { 'sw': [13.1218, 119.9828], 'ne': [15.2998, 123.1869] },
        'center': [14.2477, 121.6974]
      },
      'MIMAROPA': {
        'region': 'PH-41',
        'bounds': { 'sw': [7.4700, 115.0931], 'ne': [13.9199, 124.5453] },
        'center': [11.3356, 119.7513]
      },
      'Bicol Region': {
        'region': 'PH-05',
        'bounds': { 'sw': [11.7811, 121.4045], 'ne': [14.4323, 125.3163] },
        'center': [13.1761, 123.3369]
      },
      'Western Visayas': {
        'region': 'PH-06',
        'bounds': { 'sw': [9.3986, 120.4198], 'ne': [12.1374, 124.4495] },
        'center': [10.9452, 122.4880]
      },
      'Central Visayas': {
        'region': 'PH-07',
        'bounds': { 'sw': [9.0340, 121.7437], 'ne': [11.5884, 125.5104] },
        'center': [10.4603, 123.6800]
      },
      'Eastern Visayas': {
        'region': 'PH-08',
        'bounds': { 'sw': [9.8628, 122.8329], 'ne': [12.7832, 127.1297] },
        'center': [11.5200, 124.9185]
      },
      'Zamboanga Peninsula': {
        'region': 'PH-09',
        'bounds': { 'sw': [6.7734, 121.1849], 'ne': [8.9494, 124.3791] },
        'center': [7.9568, 122.8434]
      },
      'Northern Mindanao': {
        'region': 'PH-10',
        'bounds': { 'sw': [7.3901, 123.1194], 'ne': [9.2659, 125.8682] },
        'center': [8.3929, 124.4432]
      },
      'Davao Region': {
        'region': 'PH-11',
        'bounds': { 'sw': [5.3510, 123.8914], 'ne': [8.0174, 127.8190] },
        'center': [6.7067, 125.7709]
      },
      'SOCCSKSARGEN': {
        'region': 'PH-12',
        'bounds': { 'sw': [5.5514, 123.2047], 'ne': [7.6934, 126.3536] },
        'center': [6.7589, 124.7412]
      },
      'Caraga Region': {
        'region': 'PH-13',
        'bounds': { 'sw': [7.9144, 123.9543], 'ne': [10.4715, 127.7176] },
        'center': [9.2631, 125.7820]
      },
      'Cordillera Administrative Region': {
        'region': 'PH-15',
        'bounds': { 'sw': [16.1401, 119.2662], 'ne': [18.6054, 122.8801] },
        'center': [17.5894, 121.0701]
      },
      'Bangsamoro Autonomous Region of Muslim Mindanao': {
        'region': 'PH-14',
        'bounds': { 'sw': [4.0424, 118.0521], 'ne': [8.7608, 125.0259] },
        'center': [6.7928, 121.6648]
      }
    },
    'default_region': {
      'region': 'manila',
      'bounds': {
        'sw': [14.027, 120.015], // [ymin , xmin]
        'ne': [15.303, 121.677] // [ymax, xmax]
      },
      'center': [14.8, 121.107]
    },
    // 'initial_load': ['QuezonCity', 'Pampanga'],
    'sub_regions': {
      'National Capital Region': { 'province': 'National Capital Region', 'center': [14.57882, 121.03490]},
      'Pambansang Punong Rehiyon': { 'province': 'National Capital Region', 'center': [14.57882, 121.03490] },
      'Ilocos Region': { 'province': 'Ilocos Region', 'center': [17.0423, 120.5601] },
      'Rehiyon ng Ilokos': { 'province': 'Ilocos Region', 'center': [17.0423, 120.5601] },
      'Cagayan Valley': { 'province': 'Cagayan Valley', 'center': [18.7243, 121.6045] },
      'Lambak ng Kagayan': { 'province': 'Cagayan Valley', 'center': [18.7243, 121.6045] },
      'Central Luzon': { 'province': 'Central Luzon', 'center': [15.3798, 120.8824] },
      'Gitnang Luzon': { 'province': 'Central Luzon', 'center': [15.3798, 120.8824] },
      'CALABARZON': { 'province': 'CALABARZON', 'center': [14.2477, 121.6974] },
      'MIMAROPA': { 'province': 'MIMAROPA', 'center': [11.3356, 119.7513] },
      'Bicol Region': { 'province': 'Bicol Region', 'center': [13.1761, 123.3369] },
      'Rehiyon ng Bicol': { 'province': 'Bicol Region', 'center': [13.1761, 123.3369] },
      'Western Visayas': { 'province': 'Western Visayas', 'center': [10.9452, 122.4880] },
      'Kanlurang Kabisayaan': { 'province': 'Western Visayas', 'center': [10.9452, 122.4880] },
      'Central Visayas': { 'province': 'Central Visayas', 'center': [10.4603, 123.6800] },
      'Gitnang Kabisayaan': { 'province': 'Central Visayas', 'center': [10.4603, 123.6800] },
      'Eastern Visayas': { 'province': 'Eastern Visayas', 'center': [11.5200, 124.9185] },
      'Silangan Kabisayaan': { 'province': 'Eastern Visayas', 'center': [11.5200, 124.9185] },
      'Zamboanga Peninsula': { 'province': 'Zamboanga Peninsula', 'center': [7.9568, 122.8434] },
      'Tangway ng Zamboanga': { 'province': 'Zamboanga Peninsula', 'center': [7.9568, 122.8434] },
      'Northern Mindanao': { 'province': 'Northern Mindanao', 'center': [8.3929, 124.4432] },
      'Hilagang Mindanao': { 'province': 'Northern Mindanao', 'center': [8.3929, 124.4432] },
      'Davao Region': { 'province': 'Davao Region', 'center': [6.7067, 125.7709] },
      'Rehiyon ng Davao': { 'province': 'Davao Region', 'center': [6.7067, 125.7709] },
      'SOCCSKSARGEN': { 'province': 'SOCCSKSARGEN', 'center': [6.7589, 124.7412] },
      'Caraga Region': { 'province': 'Caraga Region', 'center': [9.2631, 125.7820] },
      'Caraga': { 'province': 'Caraga Region', 'center': [9.2631, 125.7820] },
      'Cordillera Administrative Region': { 'province': 'Cordillera Administrative Region', 'center': [17.5894, 121.0701] },
      'Rehiyong Pampangisiwaan ng Cordillera': { 'province': 'Cordillera Administrative Region', 'center': [17.5894, 121.0701] },
      'Bangsamoro Autonomous Region of Muslim Mindanao': { 'province': 'Bangsamoro Autonomous Region of Muslim Mindanao', 'center': [6.7928, 121.6648] },
      'Rehiyong Awtonomo ng Bangsamoro sa Muslim Mindanao': { 'province': 'Bangsamoro Autonomous Region of Muslim Mindanao', 'center': [6.7928, 121.6648] },
      "Abra": {
        "province": "Cordillera Administrative Region",
        "center": [
            17.5894,
            121.0701
        ]
    },
    "Agusan del Norte": {
        "province": "Caraga Region",
        "center": [
            9.2631,
            125.782
        ]
    },
    "Agusan del Sur": {
        "province": "Caraga Region",
        "center": [
            9.2631,
            125.782
        ]
    },
    "Aklan": {
        "province": "Western Visayas",
        "center": [
            10.9452,
            122.488
        ]
    },
    "Albay": {
        "province": "Bicol Region",
        "center": [
            13.1761,
            123.3369
        ]
    },
    "Antique": {
        "province": "Western Visayas",
        "center": [
            10.9452,
            122.488
        ]
    },
    "Apayao": {
        "province": "Cordillera Administrative Region",
        "center": [
            17.5894,
            121.0701
        ]
    },
    "Aurora": {
        "province": "Central Luzon",
        "center": [
            15.3798,
            120.8824
        ]
    },
    "Basilan": {
        "province": "Bangsamoro Autonomous Region of Muslim Mindanao",
        "center": [
            6.7928,
            121.6648
        ]
    },
    "Bataan": {
        "province": "Central Luzon",
        "center": [
            15.3798,
            120.8824
        ]
    },
    "Batanes": {
        "province": "Cagayan Valley",
        "center": [
            18.7243,
            121.6045
        ]
    },
    "Batangas": {
        "province": "CALABARZON",
        "center": [
            14.2477,
            121.6974
        ]
    },
    "Benguet": {
        "province": "Cordillera Administrative Region",
        "center": [
            17.5894,
            121.0701
        ]
    },
    "Biliran": {
        "province": "Eastern Visayas",
        "center": [
            11.52,
            124.9185
        ]
    },
    "Bohol": {
        "province": "Central Visayas",
        "center": [
            10.4603,
            123.68
        ]
    },
    "Bukidnon": {
        "province": "Northern Mindanao",
        "center": [
            8.3929,
            124.4432
        ]
    },
    "Bulacan": {
        "province": "Central Luzon",
        "center": [
            15.3798,
            120.8824
        ]
    },
    "Cagayan": {
        "province": "Cagayan Valley",
        "center": [
            18.7243,
            121.6045
        ]
    },
    "Camarines Norte": {
        "province": "Bicol Region",
        "center": [
            13.1761,
            123.3369
        ]
    },
    "Camarines Sur": {
        "province": "Bicol Region",
        "center": [
            13.1761,
            123.3369
        ]
    },
    "Camiguin": {
        "province": "Northern Mindanao",
        "center": [
            8.3929,
            124.4432
        ]
    },
    "Capiz": {
        "province": "Western Visayas",
        "center": [
            10.9452,
            122.488
        ]
    },
    "Catanduanes": {
        "province": "Bicol Region",
        "center": [
            13.1761,
            123.3369
        ]
    },
    "Cavite": {
        "province": "CALABARZON",
        "center": [
            14.2477,
            121.6974
        ]
    },
    "Cebu": {
        "province": "Central Visayas",
        "center": [
            10.4603,
            123.68
        ]
    },
    "Compostela Valley": {
        "province": "Davao Region",
        "center": [
            6.7067,
            125.7709
        ]
    },
    "Davao del Norte": {
        "province": "Davao Region",
        "center": [
            6.7067,
            125.7709
        ]
    },
    "Davao del Sur": {
        "province": "Davao Region",
        "center": [
            6.7067,
            125.7709
        ]
    },
    "Davao Oriental": {
        "province": "Davao Region",
        "center": [
            6.7067,
            125.7709
        ]
    },
    "Dinagat Islands": {
        "province": "Caraga Region",
        "center": [
            9.2631,
            125.782
        ]
    },
    "Eastern Samar": {
        "province": "Eastern Visayas",
        "center": [
            11.52,
            124.9185
        ]
    },
    "Guimaras": {
        "province": "Western Visayas",
        "center": [
            10.9452,
            122.488
        ]
    },
    "Ifugao": {
        "province": "Cordillera Administrative Region",
        "center": [
            17.5894,
            121.0701
        ]
    },
    "Ilocos Norte": {
        "province": "Ilocos Region",
        "center": [
            17.0423,
            120.5601
        ]
    },
    "Ilocos Sur": {
        "province": "Ilocos Region",
        "center": [
            17.0423,
            120.5601
        ]
    },
    "Iloilo": {
        "province": "Western Visayas",
        "center": [
            10.9452,
            122.488
        ]
    },
    "Isabela": {
        "province": "Cagayan Valley",
        "center": [
            18.7243,
            121.6045
        ]
    },
    "Kalinga": {
        "province": "Cordillera Administrative Region",
        "center": [
            17.5894,
            121.0701
        ]
    },
    "La Union": {
        "province": "Ilocos Region",
        "center": [
            17.0423,
            120.5601
        ]
    },
    "Laguna": {
        "province": "CALABARZON",
        "center": [
            14.2477,
            121.6974
        ]
    },
    "Lanao del Norte": {
        "province": "Northern Mindanao",
        "center": [
            8.3929,
            124.4432
        ]
    },
    "Lanao del Sur": {
        "province": "Bangsamoro Autonomous Region of Muslim Mindanao",
        "center": [
            6.7928,
            121.6648
        ]
    },
    "Leyte": {
        "province": "Eastern Visayas",
        "center": [
            11.52,
            124.9185
        ]
    },
    "Maguindanao": {
        "province": "Bangsamoro Autonomous Region of Muslim Mindanao",
        "center": [
            6.7928,
            121.6648
        ]
    },
    "Marinduque": {
        "province": "MIMAROPA",
        "center": [
            11.3356,
            119.7513
        ]
    },
    "Masbate": {
        "province": "Bicol Region",
        "center": [
            13.1761,
            123.3369
        ]
    },
    "National Capital Region": {
        "province": "National Capital Region",
        "center": [
            14.57882,
            121.0349
        ]
    },
    "Misamis Occidental": {
        "province": "Northern Mindanao",
        "center": [
            8.3929,
            124.4432
        ]
    },
    "Misamis Oriental": {
        "province": "Northern Mindanao",
        "center": [
            8.3929,
            124.4432
        ]
    },
    "Mountain Province": {
        "province": "Cordillera Administrative Region",
        "center": [
            17.5894,
            121.0701
        ]
    },
    "Negros Occidental": {
        "province": "Western Visayas",
        "center": [
            10.9452,
            122.488
        ]
    },
    "Negros Oriental": {
        "province": "Central Visayas",
        "center": [
            10.4603,
            123.68
        ]
    },
    "North Cotabato": {
        "province": "SOCCSKSARGEN",
        "center": [
            6.7589,
            124.7412
        ]
    },
    "Northern Samar": {
        "province": "Eastern Visayas",
        "center": [
            11.52,
            124.9185
        ]
    },
    "Nueva Ecija": {
        "province": "Central Luzon",
        "center": [
            15.3798,
            120.8824
        ]
    },
    "Nueva Vizcaya": {
        "province": "Cagayan Valley",
        "center": [
            18.7243,
            121.6045
        ]
    },
    "Occidental Mindoro": {
        "province": "MIMAROPA",
        "center": [
            11.3356,
            119.7513
        ]
    },
    "Oriental Mindoro": {
        "province": "MIMAROPA",
        "center": [
            11.3356,
            119.7513
        ]
    },
    "Palawan": {
        "province": "MIMAROPA",
        "center": [
            11.3356,
            119.7513
        ]
    },
    "Pampanga": {
        "province": "Central Luzon",
        "center": [
            15.3798,
            120.8824
        ]
    },
    "Pangasinan": {
        "province": "Ilocos Region",
        "center": [
            17.0423,
            120.5601
        ]
    },
    "Quezon": {
        "province": "CALABARZON",
        "center": [
            14.2477,
            121.6974
        ]
    },
    "Quirino": {
        "province": "Cagayan Valley",
        "center": [
            18.7243,
            121.6045
        ]
    },
    "Rizal": {
        "province": "CALABARZON",
        "center": [
            14.2477,
            121.6974
        ]
    },
    "Romblon": {
        "province": "MIMAROPA",
        "center": [
            11.3356,
            119.7513
        ]
    },
    "Samar": {
        "province": "Eastern Visayas",
        "center": [
            11.52,
            124.9185
        ]
    },
    "Sarangani": {
        "province": "SOCCSKSARGEN",
        "center": [
            6.7589,
            124.7412
        ]
    },
    "Shariff Kabunsuan": {
        "province": "Bangsamoro Autonomous Region of Muslim Mindanao",
        "center": [
            6.7928,
            121.6648
        ]
    },
    "Siquijor": {
        "province": "Central Visayas",
        "center": [
            10.4603,
            123.68
        ]
    },
    "Sorsogon": {
        "province": "Bicol Region",
        "center": [
            13.1761,
            123.3369
        ]
    },
    "South Cotabato": {
        "province": "SOCCSKSARGEN",
        "center": [
            6.7589,
            124.7412
        ]
    },
    "Southern Leyte": {
        "province": "Eastern Visayas",
        "center": [
            11.52,
            124.9185
        ]
    },
    "Sultan Kudarat": {
        "province": "SOCCSKSARGEN",
        "center": [
            6.7589,
            124.7412
        ]
    },
    "Sulu": {
        "province": "Bangsamoro Autonomous Region of Muslim Mindanao",
        "center": [
            6.7928,
            121.6648
        ]
    },
    "Surigao del Norte": {
        "province": "Caraga Region",
        "center": [
            9.2631,
            125.782
        ]
    },
    "Surigao del Sur": {
        "province": "Caraga Region",
        "center": [
            9.2631,
            125.782
        ]
    },
    "Tarlac": {
        "province": "Central Luzon",
        "center": [
            15.3798,
            120.8824
        ]
    },
    "Tawi-Tawi": {
        "province": "Bangsamoro Autonomous Region of Muslim Mindanao",
        "center": [
            6.7928,
            121.6648
        ]
    },
    "Zambales": {
        "province": "Central Luzon",
        "center": [
            15.3798,
            120.8824
        ]
    },
    "Zamboanga del Norte": {
        "province": "Zamboanga Peninsula",
        "center": [
            7.9568,
            122.8434
        ]
    },
    "Zamboanga del Sur": {
        "province": "Zamboanga Peninsula",
        "center": [
            7.9568,
            122.8434
        ]
    },
    "Zamboanga Sibugay": {
        "province": "Zamboanga Peninsula",
        "center": [
            7.9568,
            122.8434
        ]
    }
    },
    'region_center': [14.8, 121.107],
    'start_city_center': [14.8, 121.107],
    'starting_zoom': 5.5,
    'minimum_zoom': 5
  }
};

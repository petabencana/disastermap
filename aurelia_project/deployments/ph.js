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
        "Sallapadan": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.48,
                120.79
            ]
        },
        "San Isidro": {
            "province": "Caraga",
            "center": [
                9.939,
                126.07
            ]
        },
        "San Juan": {
            "province": "Eastern Visayas",
            "center": [
                10.272,
                125.194
            ]
        },
        "San Quintin": {
            "province": "Ilocos Region",
            "center": [
                15.992,
                120.832
            ]
        },
        "Tayum": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.608,
                120.68
            ]
        },
        "Tineg": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.832,
                120.909
            ]
        },
        "Tubo": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.256,
                120.809
            ]
        },
        "Villaviciosa": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.393,
                120.64
            ]
        },
        "Buenavista": {
            "province": "CALABARZON",
            "center": [
                13.734,
                122.436
            ]
        },
        "Butuan City": {
            "province": "Caraga",
            "center": [
                8.915,
                125.576
            ]
        },
        "Cabadbaran City": {
            "province": "Caraga",
            "center": [
                9.139,
                125.655
            ]
        },
        "Carmen": {
            "province": "Caraga",
            "center": [
                9.178,
                125.939
            ]
        },
        "Jabonga": {
            "province": "Caraga",
            "center": [
                9.353,
                125.606
            ]
        },
        "Kitcharao": {
            "province": "Caraga",
            "center": [
                9.414,
                125.635
            ]
        },
        "Las Nieves": {
            "province": "Caraga",
            "center": [
                8.722,
                125.436
            ]
        },
        "Magallanes": {
            "province": "CALABARZON",
            "center": [
                14.158,
                120.756
            ]
        },
        "Mainit Lake": {
            "province": "Caraga",
            "center": [
                9.495,
                125.519
            ]
        },
        "Nasipit": {
            "province": "Caraga",
            "center": [
                8.922,
                125.33
            ]
        },
        "Remedios T. Romualdez": {
            "province": "Caraga",
            "center": [
                9.062,
                125.658
            ]
        },
        "Santiago": {
            "province": "Ilocos Region",
            "center": [
                17.277,
                120.457
            ]
        },
        "Tubay": {
            "province": "Caraga",
            "center": [
                9.212,
                125.553
            ]
        },
        "San Pablo": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.683,
                123.429
            ]
        },
        "Santa Maria": {
            "province": "MIMAROPA",
            "center": [
                12.403,
                122.084
            ]
        },
        "Santiago City": {
            "province": "Cagayan Valley",
            "center": [
                16.722,
                121.495
            ]
        },
        "Santo Tomas": {
            "province": "Ilocos Region",
            "center": [
                15.874,
                120.572
            ]
        },
        "Tumauini": {
            "province": "Cagayan Valley",
            "center": [
                17.271,
                121.896
            ]
        },
        "Balbalan": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.529,
                121.155
            ]
        },
        "Lubuagan": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.31,
                121.064
            ]
        },
        "Pasil": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.391,
                121.089
            ]
        },
        "Pinukpuk": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.588,
                121.38
            ]
        },
        "Rizal": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.562,
                123.535
            ]
        },
        "Tabuk City": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.413,
                121.44
            ]
        },
        "Tanudan": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.279,
                121.266
            ]
        },
        "Tinglayan": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.247,
                121.126
            ]
        },
        "Agoo": {
            "province": "Ilocos Region",
            "center": [
                16.331,
                120.369
            ]
        },
        "Aringay": {
            "province": "Ilocos Region",
            "center": [
                16.401,
                120.408
            ]
        },
        "Bacnotan": {
            "province": "Ilocos Region",
            "center": [
                16.739,
                120.378
            ]
        },
        "Bagulin": {
            "province": "Ilocos Region",
            "center": [
                16.604,
                120.49
            ]
        },
        "Balaoan": {
            "province": "Ilocos Region",
            "center": [
                16.801,
                120.404
            ]
        },
        "Bangar": {
            "province": "Ilocos Region",
            "center": [
                16.878,
                120.436
            ]
        },
        "Bauang": {
            "province": "Ilocos Region",
            "center": [
                16.509,
                120.353
            ]
        },
        "Burgos": {
            "province": "Caraga",
            "center": [
                10.011,
                126.07
            ]
        },
        "Caba": {
            "province": "Ilocos Region",
            "center": [
                16.438,
                120.379
            ]
        },
        "Parang": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.935,
                120.921
            ]
        },
        "Sultan Kudarat": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.254,
                124.316
            ]
        },
        "Sultan Mastura": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.301,
                124.271
            ]
        },
        "Upi": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.0,
                124.146
            ]
        },
        "Enrique Villanueva": {
            "province": "Central Visayas",
            "center": [
                9.262,
                123.635
            ]
        },
        "Larena": {
            "province": "Central Visayas",
            "center": [
                9.233,
                123.604
            ]
        },
        "Lazi": {
            "province": "Central Visayas",
            "center": [
                9.132,
                123.606
            ]
        },
        "Maria": {
            "province": "Central Visayas",
            "center": [
                9.174,
                123.655
            ]
        },
        "Siquijor": {
            "province": "Central Visayas",
            "center": [
                9.19,
                123.541
            ]
        },
        "Barcelona": {
            "province": "Bicol Region",
            "center": [
                12.838,
                124.116
            ]
        },
        "Bulan": {
            "province": "Bicol Region",
            "center": [
                12.681,
                123.925
            ]
        },
        "Bulusan": {
            "province": "Bicol Region",
            "center": [
                12.76,
                124.105
            ]
        },
        "Casiguran": {
            "province": "Central Luzon",
            "center": [
                16.258,
                122.042
            ]
        },
        "Castilla": {
            "province": "Bicol Region",
            "center": [
                12.949,
                123.815
            ]
        },
        "Donsol": {
            "province": "Bicol Region",
            "center": [
                12.971,
                123.576
            ]
        },
        "Gubat": {
            "province": "Bicol Region",
            "center": [
                12.927,
                124.108
            ]
        },
        "Irosin": {
            "province": "Bicol Region",
            "center": [
                12.715,
                124.03
            ]
        },
        "Juban": {
            "province": "Bicol Region",
            "center": [
                12.811,
                123.973
            ]
        },
        "Matnog": {
            "province": "Bicol Region",
            "center": [
                12.591,
                124.035
            ]
        },
        "Tabina": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.414,
                123.414
            ]
        },
        "Tambulig": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.056,
                123.559
            ]
        },
        "Tigbao": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.844,
                123.258
            ]
        },
        "Tukuran": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.904,
                123.54
            ]
        },
        "Vincenzo A. Sagun": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.52,
                123.174
            ]
        },
        "Zamboanga City": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.148,
                122.143
            ]
        },
        "Alicia": {
            "province": "Cagayan Valley",
            "center": [
                16.814,
                121.678
            ]
        },
        "Buug": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.751,
                123.05
            ]
        },
        "Diplahan": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.752,
                122.964
            ]
        },
        "Imelda": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.635,
                122.942
            ]
        },
        "Ipil": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.78,
                122.577
            ]
        },
        "Kabasalan": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.853,
                122.82
            ]
        },
        "Mabuhay": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.39,
                122.905
            ]
        },
        "Malangas": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.619,
                123.008
            ]
        },
        "Naga": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.85,
                122.707
            ]
        },
        "Olutanga": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.337,
                122.825
            ]
        },
        "Payao": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.588,
                122.842
            ]
        },
        "Roseller Lim": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.705,
                122.425
            ]
        },
        "Siay": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.728,
                122.867
            ]
        },
        "Talusan": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.37,
                122.855
            ]
        },
        "Guinsiliban": {
            "province": "Northern Mindanao",
            "center": [
                9.12,
                124.773
            ]
        },
        "Mahinog": {
            "province": "Northern Mindanao",
            "center": [
                9.17,
                124.767
            ]
        },
        "Mambajao": {
            "province": "Northern Mindanao",
            "center": [
                9.221,
                124.709
            ]
        },
        "Sagay": {
            "province": "Northern Mindanao",
            "center": [
                9.128,
                124.73
            ]
        },
        "Cuartero": {
            "province": "Western Visayas",
            "center": [
                11.313,
                122.76
            ]
        },
        "Dao": {
            "province": "Western Visayas",
            "center": [
                11.38,
                122.709
            ]
        },
        "Dumalag": {
            "province": "Western Visayas",
            "center": [
                11.305,
                122.622
            ]
        },
        "Dumarao": {
            "province": "Western Visayas",
            "center": [
                11.249,
                122.76
            ]
        },
        "Ivisan": {
            "province": "Western Visayas",
            "center": [
                11.518,
                122.683
            ]
        },
        "Jamindan": {
            "province": "Western Visayas",
            "center": [
                11.369,
                122.403
            ]
        },
        "Ma-Ayon": {
            "province": "Western Visayas",
            "center": [
                11.351,
                122.849
            ]
        },
        "Mambusao": {
            "province": "Western Visayas",
            "center": [
                11.434,
                122.589
            ]
        },
        "Panay": {
            "province": "Western Visayas",
            "center": [
                11.535,
                122.832
            ]
        },
        "Panitan": {
            "province": "Western Visayas",
            "center": [
                11.444,
                122.775
            ]
        },
        "Pilar": {
            "province": "Caraga",
            "center": [
                9.871,
                126.08
            ]
        },
        "Pontevedra": {
            "province": "Western Visayas",
            "center": [
                10.358,
                122.927
            ]
        },
        "President Roxas": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.284,
                125.05
            ]
        },
        "Roxas City": {
            "province": "Western Visayas",
            "center": [
                11.557,
                122.746
            ]
        },
        "Sapi-An": {
            "province": "Western Visayas",
            "center": [
                11.498,
                122.6
            ]
        },
        "Sigma": {
            "province": "Western Visayas",
            "center": [
                11.429,
                122.672
            ]
        },
        "Tapaz": {
            "province": "Western Visayas",
            "center": [
                11.258,
                122.422
            ]
        },
        "Bagamanoc": {
            "province": "Bicol Region",
            "center": [
                13.951,
                124.257
            ]
        },
        "Bangued": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.601,
                120.607
            ]
        },
        "Boliney": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.38,
                120.868
            ]
        },
        "Bucay": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.523,
                120.723
            ]
        },
        "Bucloc": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.438,
                120.848
            ]
        },
        "Daguioman": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.451,
                120.952
            ]
        },
        "Danglas": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.744,
                120.622
            ]
        },
        "Dolores": {
            "province": "CALABARZON",
            "center": [
                14.012,
                121.402
            ]
        },
        "La Paz": {
            "province": "Central Luzon",
            "center": [
                15.447,
                120.715
            ]
        },
        "Lacub": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.697,
                120.981
            ]
        },
        "Lagangilang": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.633,
                120.781
            ]
        },
        "Lagayan": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.781,
                120.723
            ]
        },
        "Langiden": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.614,
                120.535
            ]
        },
        "Licuan-Baay": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.568,
                120.881
            ]
        },
        "Luba": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.325,
                120.691
            ]
        },
        "Malibcong": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.587,
                121.028
            ]
        },
        "Manabo": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.411,
                120.718
            ]
        },
        "Pe\u00b1arrubia": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.538,
                120.666
            ]
        },
        "Pidigan": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.538,
                120.574
            ]
        },
        "Bayugan City": {
            "province": "Caraga",
            "center": [
                8.782,
                125.77
            ]
        },
        "Bunawan": {
            "province": "Caraga",
            "center": [
                8.214,
                126.06
            ]
        },
        "Esperanza": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.696,
                124.445
            ]
        },
        "Loreto": {
            "province": "Caraga",
            "center": [
                10.369,
                125.618
            ]
        },
        "Prosperidad": {
            "province": "Caraga",
            "center": [
                8.694,
                125.896
            ]
        },
        "Rosario": {
            "province": "Eastern Visayas",
            "center": [
                12.501,
                124.437
            ]
        },
        "San Francisco": {
            "province": "Caraga",
            "center": [
                9.723,
                125.416
            ]
        },
        "San Luis": {
            "province": "Central Luzon",
            "center": [
                15.027,
                120.831
            ]
        },
        "Santa Josefa": {
            "province": "Caraga",
            "center": [
                8.028,
                126.022
            ]
        },
        "Sibagat": {
            "province": "Caraga",
            "center": [
                8.98,
                125.774
            ]
        },
        "Talacogon": {
            "province": "Caraga",
            "center": [
                8.429,
                125.806
            ]
        },
        "Trento": {
            "province": "Caraga",
            "center": [
                8.07,
                126.194
            ]
        },
        "Veruela": {
            "province": "Caraga",
            "center": [
                8.039,
                125.751
            ]
        },
        "Altavas": {
            "province": "Western Visayas",
            "center": [
                11.514,
                122.47
            ]
        },
        "Balete": {
            "province": "CALABARZON",
            "center": [
                14.013,
                121.111
            ]
        },
        "Banga": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.387,
                124.802
            ]
        },
        "Batan": {
            "province": "Western Visayas",
            "center": [
                11.569,
                122.485
            ]
        },
        "Buruanga": {
            "province": "Western Visayas",
            "center": [
                11.829,
                121.914
            ]
        },
        "Ibajay": {
            "province": "Western Visayas",
            "center": [
                11.752,
                122.169
            ]
        },
        "Kalibo": {
            "province": "Western Visayas",
            "center": [
                11.692,
                122.375
            ]
        },
        "Lezo": {
            "province": "Western Visayas",
            "center": [
                11.678,
                122.319
            ]
        },
        "Libacao": {
            "province": "Western Visayas",
            "center": [
                11.419,
                122.296
            ]
        },
        "Madalag": {
            "province": "Western Visayas",
            "center": [
                11.466,
                122.223
            ]
        },
        "Makato": {
            "province": "Western Visayas",
            "center": [
                11.708,
                122.27
            ]
        },
        "Malay": {
            "province": "Western Visayas",
            "center": [
                11.895,
                121.947
            ]
        },
        "Malinao": {
            "province": "Bicol Region",
            "center": [
                13.385,
                123.652
            ]
        },
        "Nabas": {
            "province": "Western Visayas",
            "center": [
                11.843,
                122.038
            ]
        },
        "New Washington": {
            "province": "Western Visayas",
            "center": [
                11.636,
                122.411
            ]
        },
        "Numancia": {
            "province": "Western Visayas",
            "center": [
                11.717,
                122.338
            ]
        },
        "Tangalan": {
            "province": "Western Visayas",
            "center": [
                11.742,
                122.233
            ]
        },
        "Bacacay": {
            "province": "Bicol Region",
            "center": [
                13.285,
                123.852
            ]
        },
        "Bato Lake": {
            "province": "Bicol Region",
            "center": [
                13.335,
                123.353
            ]
        },
        "Camalig": {
            "province": "Bicol Region",
            "center": [
                13.142,
                123.638
            ]
        },
        "Daraga": {
            "province": "Bicol Region",
            "center": [
                13.112,
                123.69
            ]
        },
        "Guinobatan": {
            "province": "Bicol Region",
            "center": [
                13.175,
                123.576
            ]
        },
        "Jovellar": {
            "province": "Bicol Region",
            "center": [
                13.05,
                123.579
            ]
        },
        "Legazpi City": {
            "province": "Bicol Region",
            "center": [
                13.1,
                123.754
            ]
        },
        "Libon": {
            "province": "Bicol Region",
            "center": [
                13.247,
                123.371
            ]
        },
        "Ligao City": {
            "province": "Bicol Region",
            "center": [
                13.182,
                123.494
            ]
        },
        "Malilipot": {
            "province": "Bicol Region",
            "center": [
                13.305,
                123.734
            ]
        },
        "Manito": {
            "province": "Bicol Region",
            "center": [
                13.086,
                123.878
            ]
        },
        "Oas": {
            "province": "Bicol Region",
            "center": [
                13.168,
                123.403
            ]
        },
        "Pio Duran": {
            "province": "Bicol Region",
            "center": [
                13.063,
                123.468
            ]
        },
        "Polangui": {
            "province": "Bicol Region",
            "center": [
                13.333,
                123.505
            ]
        },
        "Rapu-Rapu": {
            "province": "Bicol Region",
            "center": [
                13.234,
                124.062
            ]
        },
        "Santo Domingo": {
            "province": "Central Luzon",
            "center": [
                15.62,
                120.88
            ]
        },
        "Tabaco City": {
            "province": "Bicol Region",
            "center": [
                13.335,
                123.697
            ]
        },
        "Tiwi": {
            "province": "Bicol Region",
            "center": [
                13.463,
                123.616
            ]
        },
        "Anini-Y": {
            "province": "Western Visayas",
            "center": [
                10.448,
                121.966
            ]
        },
        "Barbaza": {
            "province": "Western Visayas",
            "center": [
                11.257,
                122.126
            ]
        },
        "Belison": {
            "province": "Western Visayas",
            "center": [
                10.851,
                121.992
            ]
        },
        "Bugasong": {
            "province": "Western Visayas",
            "center": [
                11.096,
                122.135
            ]
        },
        "Caluya": {
            "province": "Western Visayas",
            "center": [
                11.959,
                121.451
            ]
        },
        "Culasi": {
            "province": "Western Visayas",
            "center": [
                11.423,
                122.108
            ]
        },
        "Hamtic": {
            "province": "Western Visayas",
            "center": [
                10.662,
                122.009
            ]
        },
        "Laua-An": {
            "province": "Western Visayas",
            "center": [
                11.157,
                122.109
            ]
        },
        "Libertad": {
            "province": "Northern Mindanao",
            "center": [
                8.529,
                124.37
            ]
        },
        "Pandan": {
            "province": "Bicol Region",
            "center": [
                14.029,
                124.194
            ]
        },
        "Patnongon": {
            "province": "Western Visayas",
            "center": [
                10.923,
                122.037
            ]
        },
        "San Jose": {
            "province": "Central Luzon",
            "center": [
                15.437,
                120.341
            ]
        },
        "San Remigio": {
            "province": "Central Visayas",
            "center": [
                10.984,
                123.936
            ]
        },
        "Sebaste": {
            "province": "Western Visayas",
            "center": [
                11.591,
                122.119
            ]
        },
        "Sibalom": {
            "province": "Western Visayas",
            "center": [
                10.772,
                122.075
            ]
        },
        "Tibiao": {
            "province": "Western Visayas",
            "center": [
                11.312,
                122.084
            ]
        },
        "Tobias Fornier": {
            "province": "Western Visayas",
            "center": [
                10.52,
                121.976
            ]
        },
        "Valderrama": {
            "province": "Western Visayas",
            "center": [
                11.031,
                122.205
            ]
        },
        "Calanasan": {
            "province": "Cordillera Administrative Region",
            "center": [
                18.249,
                121.034
            ]
        },
        "Conner": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.771,
                121.254
            ]
        },
        "Flora": {
            "province": "Cordillera Administrative Region",
            "center": [
                18.128,
                121.415
            ]
        },
        "Kabugao": {
            "province": "Cordillera Administrative Region",
            "center": [
                18.003,
                121.167
            ]
        },
        "Luna": {
            "province": "Ilocos Region",
            "center": [
                16.835,
                120.376
            ]
        },
        "Pudtol": {
            "province": "Cordillera Administrative Region",
            "center": [
                18.157,
                121.309
            ]
        },
        "Santa Marcela": {
            "province": "Cordillera Administrative Region",
            "center": [
                18.292,
                121.438
            ]
        },
        "Baler": {
            "province": "Central Luzon",
            "center": [
                15.733,
                121.572
            ]
        },
        "Dilasag": {
            "province": "Central Luzon",
            "center": [
                16.433,
                122.134
            ]
        },
        "Dinalungan": {
            "province": "Central Luzon",
            "center": [
                16.169,
                121.86
            ]
        },
        "Dingalan": {
            "province": "Central Luzon",
            "center": [
                15.285,
                121.38
            ]
        },
        "Dipaculao": {
            "province": "Central Luzon",
            "center": [
                15.984,
                121.612
            ]
        },
        "Maria Aurora": {
            "province": "Central Luzon",
            "center": [
                15.777,
                121.403
            ]
        },
        "Akbar": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.633,
                122.195
            ]
        },
        "Al-Barka": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.516,
                122.133
            ]
        },
        "Hadji Mohammad Ajul": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.639,
                122.281
            ]
        },
        "Isabela City": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.653,
                121.988
            ]
        },
        "Lamitan City": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.647,
                122.105
            ]
        },
        "Lantawan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.641,
                121.785
            ]
        },
        "Maluso": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.532,
                121.883
            ]
        },
        "Sumisip": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.48,
                121.999
            ]
        },
        "Tipo-Tipo": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.522,
                122.165
            ]
        },
        "Tuburan": {
            "province": "Central Visayas",
            "center": [
                10.716,
                123.87
            ]
        },
        "Ungkaya Pukan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.49,
                122.122
            ]
        },
        "Abucay": {
            "province": "Central Luzon",
            "center": [
                14.718,
                120.485
            ]
        },
        "Bagac": {
            "province": "Central Luzon",
            "center": [
                14.584,
                120.426
            ]
        },
        "Balanga City": {
            "province": "Central Luzon",
            "center": [
                14.667,
                120.493
            ]
        },
        "Dinalupihan": {
            "province": "Central Luzon",
            "center": [
                14.87,
                120.432
            ]
        },
        "Hermosa": {
            "province": "Central Luzon",
            "center": [
                14.813,
                120.447
            ]
        },
        "Limay": {
            "province": "Central Luzon",
            "center": [
                14.539,
                120.554
            ]
        },
        "Mariveles": {
            "province": "Central Luzon",
            "center": [
                14.467,
                120.511
            ]
        },
        "Morong": {
            "province": "CALABARZON",
            "center": [
                14.536,
                121.234
            ]
        },
        "Orani": {
            "province": "Central Luzon",
            "center": [
                14.778,
                120.477
            ]
        },
        "Orion": {
            "province": "Central Luzon",
            "center": [
                14.603,
                120.552
            ]
        },
        "Samal": {
            "province": "Central Luzon",
            "center": [
                14.753,
                120.483
            ]
        },
        "Basco": {
            "province": "Cagayan Valley",
            "center": [
                20.458,
                121.993
            ]
        },
        "Itbayat": {
            "province": "Cagayan Valley",
            "center": [
                20.765,
                121.84
            ]
        },
        "Ivana": {
            "province": "Cagayan Valley",
            "center": [
                20.376,
                121.927
            ]
        },
        "Mahatao": {
            "province": "Cagayan Valley",
            "center": [
                20.411,
                121.951
            ]
        },
        "Sabtang": {
            "province": "Cagayan Valley",
            "center": [
                20.311,
                121.851
            ]
        },
        "Uyugan": {
            "province": "Cagayan Valley",
            "center": [
                20.375,
                121.954
            ]
        },
        "Agoncillo": {
            "province": "CALABARZON",
            "center": [
                13.967,
                120.931
            ]
        },
        "Alitagtag": {
            "province": "CALABARZON",
            "center": [
                13.868,
                121.016
            ]
        },
        "Balayan": {
            "province": "CALABARZON",
            "center": [
                13.968,
                120.734
            ]
        },
        "Batangas City": {
            "province": "CALABARZON",
            "center": [
                13.71,
                121.102
            ]
        },
        "Bauan": {
            "province": "CALABARZON",
            "center": [
                13.801,
                120.97
            ]
        },
        "Calaca": {
            "province": "CALABARZON",
            "center": [
                13.979,
                120.824
            ]
        },
        "Calatagan": {
            "province": "CALABARZON",
            "center": [
                13.864,
                120.659
            ]
        },
        "Cuenca": {
            "province": "CALABARZON",
            "center": [
                13.91,
                121.054
            ]
        },
        "Ibaan": {
            "province": "CALABARZON",
            "center": [
                13.818,
                121.141
            ]
        },
        "Laurel": {
            "province": "CALABARZON",
            "center": [
                14.052,
                120.907
            ]
        },
        "Lemery": {
            "province": "Western Visayas",
            "center": [
                11.224,
                122.917
            ]
        },
        "Lian": {
            "province": "CALABARZON",
            "center": [
                13.997,
                120.65
            ]
        },
        "Lipa City": {
            "province": "CALABARZON",
            "center": [
                13.941,
                121.175
            ]
        },
        "Lobo": {
            "province": "CALABARZON",
            "center": [
                13.667,
                121.261
            ]
        },
        "Mabini": {
            "province": "Ilocos Region",
            "center": [
                15.994,
                120.01
            ]
        },
        "Malvar": {
            "province": "CALABARZON",
            "center": [
                14.034,
                121.148
            ]
        },
        "Mataas Na Kahoy": {
            "province": "CALABARZON",
            "center": [
                13.978,
                121.102
            ]
        },
        "Nasugbu": {
            "province": "CALABARZON",
            "center": [
                14.123,
                120.687
            ]
        },
        "Padre Garcia": {
            "province": "CALABARZON",
            "center": [
                13.874,
                121.242
            ]
        },
        "San Nicolas": {
            "province": "Ilocos Region",
            "center": [
                16.13,
                120.771
            ]
        },
        "San Pascual": {
            "province": "Bicol Region",
            "center": [
                13.058,
                123.027
            ]
        },
        "Santa Teresita": {
            "province": "Cagayan Valley",
            "center": [
                18.235,
                121.909
            ]
        },
        "Taal lake": {
            "province": "CALABARZON",
            "center": [
                13.996,
                121.011
            ]
        },
        "Taal": {
            "province": "CALABARZON",
            "center": [
                13.889,
                120.938
            ]
        },
        "Talisay": {
            "province": "Bicol Region",
            "center": [
                14.143,
                122.924
            ]
        },
        "Tanauan City": {
            "province": "CALABARZON",
            "center": [
                14.096,
                121.097
            ]
        },
        "Taysan": {
            "province": "CALABARZON",
            "center": [
                13.756,
                121.225
            ]
        },
        "Tingloy": {
            "province": "CALABARZON",
            "center": [
                13.648,
                120.892
            ]
        },
        "Tuy": {
            "province": "CALABARZON",
            "center": [
                14.029,
                120.74
            ]
        },
        "Atok": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.584,
                120.697
            ]
        },
        "Baguio City": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.405,
                120.594
            ]
        },
        "Bakun": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.811,
                120.703
            ]
        },
        "Bokod": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.469,
                120.803
            ]
        },
        "Buguias": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.743,
                120.841
            ]
        },
        "Itogon": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.325,
                120.706
            ]
        },
        "Kabayan": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.622,
                120.837
            ]
        },
        "Kapangan": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.603,
                120.597
            ]
        },
        "Kibungan": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.696,
                120.687
            ]
        },
        "La Trinidad": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.474,
                120.595
            ]
        },
        "Mankayan": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.855,
                120.788
            ]
        },
        "Sablan": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.496,
                120.517
            ]
        },
        "Tuba": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.32,
                120.565
            ]
        },
        "Tublay": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.511,
                120.633
            ]
        },
        "Almeria": {
            "province": "Eastern Visayas",
            "center": [
                11.639,
                124.413
            ]
        },
        "Biliran": {
            "province": "Eastern Visayas",
            "center": [
                11.512,
                124.483
            ]
        },
        "Cabucgayan": {
            "province": "Eastern Visayas",
            "center": [
                11.501,
                124.563
            ]
        },
        "Caibiran": {
            "province": "Eastern Visayas",
            "center": [
                11.56,
                124.553
            ]
        },
        "Culaba": {
            "province": "Eastern Visayas",
            "center": [
                11.642,
                124.507
            ]
        },
        "Kawayan": {
            "province": "Eastern Visayas",
            "center": [
                11.683,
                124.405
            ]
        },
        "Maripipi": {
            "province": "Eastern Visayas",
            "center": [
                11.789,
                124.323
            ]
        },
        "Naval": {
            "province": "Eastern Visayas",
            "center": [
                11.577,
                124.436
            ]
        },
        "Albuquerque": {
            "province": "Central Visayas",
            "center": [
                9.634,
                123.965
            ]
        },
        "Anda": {
            "province": "Ilocos Region",
            "center": [
                16.293,
                119.976
            ]
        },
        "Antequera": {
            "province": "Central Visayas",
            "center": [
                9.785,
                123.908
            ]
        },
        "Baclayon": {
            "province": "Central Visayas",
            "center": [
                9.634,
                123.919
            ]
        },
        "Balilihan": {
            "province": "Central Visayas",
            "center": [
                9.768,
                123.997
            ]
        },
        "Batuan": {
            "province": "Bicol Region",
            "center": [
                12.404,
                123.762
            ]
        },
        "Bien Unido": {
            "province": "Central Visayas",
            "center": [
                10.127,
                124.375
            ]
        },
        "Bilar": {
            "province": "Central Visayas",
            "center": [
                9.718,
                124.118
            ]
        },
        "Calape": {
            "province": "Central Visayas",
            "center": [
                9.88,
                123.888
            ]
        },
        "Candijay": {
            "province": "Central Visayas",
            "center": [
                9.825,
                124.493
            ]
        },
        "Catigbian": {
            "province": "Central Visayas",
            "center": [
                9.848,
                124.031
            ]
        },
        "Clarin": {
            "province": "Northern Mindanao",
            "center": [
                8.204,
                123.756
            ]
        },
        "Corella": {
            "province": "Central Visayas",
            "center": [
                9.686,
                123.929
            ]
        },
        "Cortes": {
            "province": "Caraga",
            "center": [
                9.222,
                126.158
            ]
        },
        "Dagohoy": {
            "province": "Central Visayas",
            "center": [
                9.907,
                124.282
            ]
        },
        "Danao": {
            "province": "Central Visayas",
            "center": [
                9.961,
                124.208
            ]
        },
        "Dauis": {
            "province": "Central Visayas",
            "center": [
                9.61,
                123.832
            ]
        },
        "Dimiao": {
            "province": "Central Visayas",
            "center": [
                9.648,
                124.157
            ]
        },
        "Duero": {
            "province": "Central Visayas",
            "center": [
                9.745,
                124.386
            ]
        },
        "Garcia Hernandez": {
            "province": "Central Visayas",
            "center": [
                9.664,
                124.281
            ]
        },
        "Guindulman": {
            "province": "Central Visayas",
            "center": [
                9.776,
                124.457
            ]
        },
        "Inabanga": {
            "province": "Central Visayas",
            "center": [
                10.006,
                124.095
            ]
        },
        "Jagna": {
            "province": "Central Visayas",
            "center": [
                9.697,
                124.341
            ]
        },
        "Jetafe": {
            "province": "Central Visayas",
            "center": [
                10.125,
                124.187
            ]
        },
        "Lila": {
            "province": "Central Visayas",
            "center": [
                9.61,
                124.098
            ]
        },
        "Loay": {
            "province": "Central Visayas",
            "center": [
                9.612,
                124.017
            ]
        },
        "Loboc": {
            "province": "Central Visayas",
            "center": [
                9.646,
                124.044
            ]
        },
        "Loon": {
            "province": "Central Visayas",
            "center": [
                9.819,
                123.824
            ]
        },
        "Maribojoc": {
            "province": "Central Visayas",
            "center": [
                9.753,
                123.855
            ]
        },
        "Panglao": {
            "province": "Central Visayas",
            "center": [
                9.58,
                123.776
            ]
        },
        "Pres. Carlos P. Garcia": {
            "province": "Central Visayas",
            "center": [
                10.104,
                124.566
            ]
        },
        "Sagbayan": {
            "province": "Central Visayas",
            "center": [
                9.91,
                124.092
            ]
        },
        "San Miguel": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.695,
                123.268
            ]
        },
        "Sevilla": {
            "province": "Central Visayas",
            "center": [
                9.71,
                124.041
            ]
        },
        "Sierra Bullones": {
            "province": "Central Visayas",
            "center": [
                9.788,
                124.289
            ]
        },
        "Sikatuna": {
            "province": "Central Visayas",
            "center": [
                9.684,
                123.982
            ]
        },
        "Tagbilaran City": {
            "province": "Central Visayas",
            "center": [
                9.663,
                123.869
            ]
        },
        "Talibon": {
            "province": "Central Visayas",
            "center": [
                10.119,
                124.28
            ]
        },
        "Trinidad": {
            "province": "Central Visayas",
            "center": [
                10.052,
                124.328
            ]
        },
        "Tubigon": {
            "province": "Central Visayas",
            "center": [
                9.922,
                123.967
            ]
        },
        "Ubay": {
            "province": "Central Visayas",
            "center": [
                10.01,
                124.467
            ]
        },
        "Valencia": {
            "province": "Central Visayas",
            "center": [
                9.289,
                123.188
            ]
        },
        "Baungon": {
            "province": "Northern Mindanao",
            "center": [
                8.257,
                124.719
            ]
        },
        "Cabanglasan": {
            "province": "Northern Mindanao",
            "center": [
                8.067,
                125.313
            ]
        },
        "Damulog": {
            "province": "Northern Mindanao",
            "center": [
                7.452,
                124.966
            ]
        },
        "Dangcagan": {
            "province": "Northern Mindanao",
            "center": [
                7.589,
                125.014
            ]
        },
        "Don Carlos": {
            "province": "Northern Mindanao",
            "center": [
                7.694,
                124.931
            ]
        },
        "Impasug-Ong": {
            "province": "Northern Mindanao",
            "center": [
                8.41,
                125.119
            ]
        },
        "Kadingilan": {
            "province": "Northern Mindanao",
            "center": [
                7.539,
                124.875
            ]
        },
        "Kalilangan": {
            "province": "Northern Mindanao",
            "center": [
                7.799,
                124.718
            ]
        },
        "Kibawe": {
            "province": "Northern Mindanao",
            "center": [
                7.517,
                125.04
            ]
        },
        "Kitaotao": {
            "province": "Northern Mindanao",
            "center": [
                7.601,
                125.084
            ]
        },
        "Lantapan": {
            "province": "Northern Mindanao",
            "center": [
                8.046,
                124.989
            ]
        },
        "Libona": {
            "province": "Northern Mindanao",
            "center": [
                8.328,
                124.757
            ]
        },
        "Malaybalay City": {
            "province": "Northern Mindanao",
            "center": [
                8.161,
                125.179
            ]
        },
        "Malitbog": {
            "province": "Eastern Visayas",
            "center": [
                10.179,
                124.96
            ]
        },
        "Manolo Fortich": {
            "province": "Northern Mindanao",
            "center": [
                8.372,
                124.882
            ]
        },
        "Maramag": {
            "province": "Northern Mindanao",
            "center": [
                7.81,
                124.969
            ]
        },
        "Pangantucan": {
            "province": "Northern Mindanao",
            "center": [
                7.796,
                124.808
            ]
        },
        "Quezon": {
            "province": "CALABARZON",
            "center": [
                14.057,
                122.121
            ]
        },
        "San Fernando": {
            "province": "MIMAROPA",
            "center": [
                12.374,
                122.554
            ]
        },
        "Sumilao": {
            "province": "Northern Mindanao",
            "center": [
                8.251,
                124.935
            ]
        },
        "Talakag": {
            "province": "Northern Mindanao",
            "center": [
                8.08,
                124.685
            ]
        },
        "Valencia City": {
            "province": "Northern Mindanao",
            "center": [
                7.919,
                125.066
            ]
        },
        "Angat": {
            "province": "Central Luzon",
            "center": [
                14.93,
                121.036
            ]
        },
        "Balagtas": {
            "province": "Central Luzon",
            "center": [
                14.828,
                120.921
            ]
        },
        "Baliuag": {
            "province": "Central Luzon",
            "center": [
                14.951,
                120.902
            ]
        },
        "Bocaue": {
            "province": "Central Luzon",
            "center": [
                14.79,
                120.941
            ]
        },
        "Bulacan": {
            "province": "Central Luzon",
            "center": [
                14.766,
                120.877
            ]
        },
        "Bustos": {
            "province": "Central Luzon",
            "center": [
                14.923,
                120.952
            ]
        },
        "Calumpit": {
            "province": "Central Luzon",
            "center": [
                14.893,
                120.78
            ]
        },
        "Do\u00b1a Remedios Trinidad": {
            "province": "Central Luzon",
            "center": [
                15.063,
                121.209
            ]
        },
        "Guiguinto": {
            "province": "Central Luzon",
            "center": [
                14.837,
                120.892
            ]
        },
        "Hagonoy": {
            "province": "Davao Region",
            "center": [
                6.698,
                125.313
            ]
        },
        "Malolos City": {
            "province": "Central Luzon",
            "center": [
                14.83,
                120.837
            ]
        },
        "Marilao": {
            "province": "Central Luzon",
            "center": [
                14.769,
                120.988
            ]
        },
        "Meycauayan City": {
            "province": "Central Luzon",
            "center": [
                14.746,
                120.974
            ]
        },
        "Norzagaray": {
            "province": "Central Luzon",
            "center": [
                14.879,
                121.181
            ]
        },
        "Obando": {
            "province": "Central Luzon",
            "center": [
                14.714,
                120.927
            ]
        },
        "Pandi": {
            "province": "Central Luzon",
            "center": [
                14.875,
                120.967
            ]
        },
        "Paombong": {
            "province": "Central Luzon",
            "center": [
                14.805,
                120.795
            ]
        },
        "Plaridel": {
            "province": "CALABARZON",
            "center": [
                13.947,
                122.005
            ]
        },
        "Pulilan": {
            "province": "Central Luzon",
            "center": [
                14.914,
                120.856
            ]
        },
        "San Ildefonso": {
            "province": "Ilocos Region",
            "center": [
                17.62,
                120.406
            ]
        },
        "San Jose del Monte City": {
            "province": "Central Luzon",
            "center": [
                14.809,
                121.101
            ]
        },
        "San Rafael": {
            "province": "Western Visayas",
            "center": [
                11.154,
                122.831
            ]
        },
        "Abulug": {
            "province": "Cagayan Valley",
            "center": [
                18.396,
                121.43
            ]
        },
        "Alcala": {
            "province": "Ilocos Region",
            "center": [
                15.852,
                120.535
            ]
        },
        "Allacapan": {
            "province": "Cagayan Valley",
            "center": [
                18.205,
                121.542
            ]
        },
        "Amulung": {
            "province": "Cagayan Valley",
            "center": [
                17.823,
                121.704
            ]
        },
        "Aparri": {
            "province": "Cagayan Valley",
            "center": [
                18.546,
                121.52
            ]
        },
        "Baggao": {
            "province": "Cagayan Valley",
            "center": [
                17.932,
                121.978
            ]
        },
        "Ballesteros": {
            "province": "Cagayan Valley",
            "center": [
                18.36,
                121.507
            ]
        },
        "Buguey": {
            "province": "Cagayan Valley",
            "center": [
                18.262,
                121.801
            ]
        },
        "Calayan": {
            "province": "Cagayan Valley",
            "center": [
                19.189,
                121.652
            ]
        },
        "Camalaniugan": {
            "province": "Cagayan Valley",
            "center": [
                18.27,
                121.686
            ]
        },
        "Claveria": {
            "province": "Northern Mindanao",
            "center": [
                8.675,
                125.011
            ]
        },
        "Enrile": {
            "province": "Cagayan Valley",
            "center": [
                17.559,
                121.694
            ]
        },
        "Gattaran": {
            "province": "Cagayan Valley",
            "center": [
                18.058,
                121.86
            ]
        },
        "Gonzaga": {
            "province": "Cagayan Valley",
            "center": [
                18.255,
                122.126
            ]
        },
        "Iguig": {
            "province": "Cagayan Valley",
            "center": [
                17.753,
                121.749
            ]
        },
        "Lal-Lo": {
            "province": "Cagayan Valley",
            "center": [
                18.16,
                121.863
            ]
        },
        "Lasam": {
            "province": "Cagayan Valley",
            "center": [
                18.053,
                121.543
            ]
        },
        "Pamplona": {
            "province": "Central Visayas",
            "center": [
                9.428,
                123.048
            ]
        },
        "Pe\u00b1ablanca": {
            "province": "Cagayan Valley",
            "center": [
                17.678,
                121.976
            ]
        },
        "Piat": {
            "province": "Cagayan Valley",
            "center": [
                17.772,
                121.532
            ]
        },
        "Sanchez-Mira": {
            "province": "Cagayan Valley",
            "center": [
                18.521,
                121.204
            ]
        },
        "Santa Ana": {
            "province": "Central Luzon",
            "center": [
                15.1,
                120.793
            ]
        },
        "Santa Praxedes": {
            "province": "Cagayan Valley",
            "center": [
                18.532,
                120.999
            ]
        },
        "Santo Ni\u00b1o": {
            "province": "Cagayan Valley",
            "center": [
                17.922,
                121.506
            ]
        },
        "Solana": {
            "province": "Cagayan Valley",
            "center": [
                17.675,
                121.648
            ]
        },
        "Tuao": {
            "province": "Cagayan Valley",
            "center": [
                17.695,
                121.506
            ]
        },
        "Tuguegarao City": {
            "province": "Cagayan Valley",
            "center": [
                17.606,
                121.759
            ]
        },
        "Basud": {
            "province": "Bicol Region",
            "center": [
                13.993,
                122.979
            ]
        },
        "Capalonga": {
            "province": "Bicol Region",
            "center": [
                14.274,
                122.495
            ]
        },
        "Daet": {
            "province": "Bicol Region",
            "center": [
                14.11,
                122.95
            ]
        },
        "Jose Panganiban": {
            "province": "Bicol Region",
            "center": [
                14.257,
                122.658
            ]
        },
        "Labo": {
            "province": "Bicol Region",
            "center": [
                14.134,
                122.684
            ]
        },
        "Mercedes": {
            "province": "Eastern Visayas",
            "center": [
                11.089,
                125.705
            ]
        },
        "Paracale": {
            "province": "Bicol Region",
            "center": [
                14.251,
                122.789
            ]
        },
        "San Lorenzo Ruiz": {
            "province": "Bicol Region",
            "center": [
                14.014,
                122.882
            ]
        },
        "San Vicente": {
            "province": "MIMAROPA",
            "center": [
                10.477,
                119.23
            ]
        },
        "Santa Elena": {
            "province": "Bicol Region",
            "center": [
                14.161,
                122.391
            ]
        },
        "Vinzons": {
            "province": "Bicol Region",
            "center": [
                14.267,
                122.901
            ]
        },
        "Baao": {
            "province": "Bicol Region",
            "center": [
                13.483,
                123.366
            ]
        },
        "Balatan": {
            "province": "Bicol Region",
            "center": [
                13.35,
                123.251
            ]
        },
        "Bato": {
            "province": "Eastern Visayas",
            "center": [
                10.332,
                124.839
            ]
        },
        "Bombon": {
            "province": "Bicol Region",
            "center": [
                13.684,
                123.204
            ]
        },
        "Buhi Lake": {
            "province": "Bicol Region",
            "center": [
                13.459,
                123.514
            ]
        },
        "Buhi": {
            "province": "Bicol Region",
            "center": [
                13.437,
                123.515
            ]
        },
        "Bula": {
            "province": "Bicol Region",
            "center": [
                13.456,
                123.262
            ]
        },
        "Cabusao": {
            "province": "Bicol Region",
            "center": [
                13.743,
                123.071
            ]
        },
        "Calabanga": {
            "province": "Bicol Region",
            "center": [
                13.71,
                123.271
            ]
        },
        "Camaligan": {
            "province": "Bicol Region",
            "center": [
                13.625,
                123.163
            ]
        },
        "Canaman": {
            "province": "Bicol Region",
            "center": [
                13.643,
                123.13
            ]
        },
        "Caramoan": {
            "province": "Bicol Region",
            "center": [
                13.796,
                123.836
            ]
        },
        "Del Gallego": {
            "province": "Bicol Region",
            "center": [
                13.946,
                122.708
            ]
        },
        "Gainza": {
            "province": "Bicol Region",
            "center": [
                13.608,
                123.133
            ]
        },
        "Garchitorena": {
            "province": "Bicol Region",
            "center": [
                13.867,
                123.642
            ]
        },
        "Goa": {
            "province": "Bicol Region",
            "center": [
                13.731,
                123.425
            ]
        },
        "Iriga City": {
            "province": "Bicol Region",
            "center": [
                13.448,
                123.433
            ]
        },
        "Lagonoy": {
            "province": "Bicol Region",
            "center": [
                13.825,
                123.516
            ]
        },
        "Libmanan": {
            "province": "Bicol Region",
            "center": [
                13.666,
                122.974
            ]
        },
        "Lupi": {
            "province": "Bicol Region",
            "center": [
                13.848,
                122.888
            ]
        },
        "Magarao": {
            "province": "Bicol Region",
            "center": [
                13.67,
                123.155
            ]
        },
        "Milaor": {
            "province": "Bicol Region",
            "center": [
                13.592,
                123.173
            ]
        },
        "Minalabac": {
            "province": "Bicol Region",
            "center": [
                13.516,
                123.195
            ]
        },
        "Nabua": {
            "province": "Bicol Region",
            "center": [
                13.393,
                123.339
            ]
        },
        "Naga City": {
            "province": "Central Visayas",
            "center": [
                10.243,
                123.726
            ]
        },
        "Ocampo": {
            "province": "Bicol Region",
            "center": [
                13.582,
                123.382
            ]
        },
        "Pasacao": {
            "province": "Bicol Region",
            "center": [
                13.551,
                122.999
            ]
        },
        "Pili": {
            "province": "Bicol Region",
            "center": [
                13.588,
                123.29
            ]
        },
        "Presentacion": {
            "province": "Bicol Region",
            "center": [
                13.745,
                123.726
            ]
        },
        "Ragay": {
            "province": "Bicol Region",
            "center": [
                13.848,
                122.77
            ]
        },
        "Sagnay": {
            "province": "Bicol Region",
            "center": [
                13.559,
                123.516
            ]
        },
        "Sipocot": {
            "province": "Bicol Region",
            "center": [
                13.798,
                122.966
            ]
        },
        "Siruma": {
            "province": "Bicol Region",
            "center": [
                14.016,
                123.298
            ]
        },
        "Tigaon": {
            "province": "Bicol Region",
            "center": [
                13.629,
                123.472
            ]
        },
        "Tinambac": {
            "province": "Bicol Region",
            "center": [
                13.882,
                123.357
            ]
        },
        "Catarman": {
            "province": "Eastern Visayas",
            "center": [
                12.429,
                124.638
            ]
        },
        "Baras": {
            "province": "CALABARZON",
            "center": [
                14.542,
                121.275
            ]
        },
        "Caramoran": {
            "province": "Bicol Region",
            "center": [
                13.849,
                124.179
            ]
        },
        "Gigmoto": {
            "province": "Bicol Region",
            "center": [
                13.786,
                124.355
            ]
        },
        "Panganiban": {
            "province": "Bicol Region",
            "center": [
                13.898,
                124.276
            ]
        },
        "San Andres": {
            "province": "MIMAROPA",
            "center": [
                12.536,
                122.047
            ]
        },
        "Viga": {
            "province": "Bicol Region",
            "center": [
                13.847,
                124.309
            ]
        },
        "Virac": {
            "province": "Bicol Region",
            "center": [
                13.616,
                124.197
            ]
        },
        "Alfonso": {
            "province": "CALABARZON",
            "center": [
                14.114,
                120.85
            ]
        },
        "Amadeo": {
            "province": "CALABARZON",
            "center": [
                14.187,
                120.925
            ]
        },
        "Bacoor": {
            "province": "CALABARZON",
            "center": [
                14.416,
                120.97
            ]
        },
        "Carmona": {
            "province": "CALABARZON",
            "center": [
                14.299,
                121.037
            ]
        },
        "Cavite City": {
            "province": "CALABARZON",
            "center": [
                14.48,
                120.898
            ]
        },
        "Dasmari\u00b1as": {
            "province": "CALABARZON",
            "center": [
                14.319,
                120.966
            ]
        },
        "General Emilio Aguinaldo": {
            "province": "CALABARZON",
            "center": [
                14.18,
                120.801
            ]
        },
        "General Mariano Alvarez": {
            "province": "CALABARZON",
            "center": [
                14.307,
                121.018
            ]
        },
        "General Trias": {
            "province": "CALABARZON",
            "center": [
                14.33,
                120.9
            ]
        },
        "Imus": {
            "province": "CALABARZON",
            "center": [
                14.398,
                120.932
            ]
        },
        "Indang": {
            "province": "CALABARZON",
            "center": [
                14.189,
                120.871
            ]
        },
        "Kawit": {
            "province": "CALABARZON",
            "center": [
                14.445,
                120.901
            ]
        },
        "Maragondon": {
            "province": "CALABARZON",
            "center": [
                14.227,
                120.73
            ]
        },
        "Mendez": {
            "province": "CALABARZON",
            "center": [
                14.129,
                120.897
            ]
        },
        "Naic": {
            "province": "CALABARZON",
            "center": [
                14.292,
                120.796
            ]
        },
        "Noveleta": {
            "province": "CALABARZON",
            "center": [
                14.431,
                120.88
            ]
        },
        "Silang": {
            "province": "CALABARZON",
            "center": [
                14.213,
                120.989
            ]
        },
        "Tagaytay City": {
            "province": "CALABARZON",
            "center": [
                14.119,
                120.965
            ]
        },
        "Tanza": {
            "province": "CALABARZON",
            "center": [
                14.348,
                120.837
            ]
        },
        "Ternate": {
            "province": "CALABARZON",
            "center": [
                14.267,
                120.677
            ]
        },
        "Trece Martires City": {
            "province": "CALABARZON",
            "center": [
                14.279,
                120.87
            ]
        },
        "Alcantara": {
            "province": "MIMAROPA",
            "center": [
                12.298,
                122.055
            ]
        },
        "Alcoy": {
            "province": "Central Visayas",
            "center": [
                9.716,
                123.466
            ]
        },
        "Alegria": {
            "province": "Caraga",
            "center": [
                9.489,
                125.603
            ]
        },
        "Aloguinsan": {
            "province": "Central Visayas",
            "center": [
                10.193,
                123.578
            ]
        },
        "Argao": {
            "province": "Central Visayas",
            "center": [
                9.913,
                123.548
            ]
        },
        "Asturias": {
            "province": "Central Visayas",
            "center": [
                10.595,
                123.832
            ]
        },
        "Badian": {
            "province": "Central Visayas",
            "center": [
                9.846,
                123.42
            ]
        },
        "Balamban": {
            "province": "Central Visayas",
            "center": [
                10.482,
                123.779
            ]
        },
        "Bantayan": {
            "province": "Central Visayas",
            "center": [
                11.187,
                123.726
            ]
        },
        "Barili": {
            "province": "Central Visayas",
            "center": [
                10.114,
                123.534
            ]
        },
        "Bogo City": {
            "province": "Central Visayas",
            "center": [
                11.023,
                123.996
            ]
        },
        "Boljoon": {
            "province": "Central Visayas",
            "center": [
                9.641,
                123.445
            ]
        },
        "Borbon": {
            "province": "Central Visayas",
            "center": [
                10.849,
                123.994
            ]
        },
        "Carcar": {
            "province": "Central Visayas",
            "center": [
                10.118,
                123.632
            ]
        },
        "Catmon": {
            "province": "Central Visayas",
            "center": [
                10.67,
                123.986
            ]
        },
        "Cebu City": {
            "province": "Central Visayas",
            "center": [
                10.378,
                123.86
            ]
        },
        "Compostela": {
            "province": "Davao Region",
            "center": [
                7.689,
                126.14
            ]
        },
        "Consolacion": {
            "province": "Central Visayas",
            "center": [
                10.391,
                123.954
            ]
        },
        "Cordoba": {
            "province": "Central Visayas",
            "center": [
                10.258,
                123.952
            ]
        },
        "Daanbantayan": {
            "province": "Central Visayas",
            "center": [
                11.227,
                124.023
            ]
        },
        "Dalaguete": {
            "province": "Central Visayas",
            "center": [
                9.798,
                123.492
            ]
        },
        "Danao City": {
            "province": "Central Visayas",
            "center": [
                10.534,
                123.96
            ]
        },
        "Danao Lake": {
            "province": "Central Visayas",
            "center": [
                10.676,
                124.34
            ]
        },
        "Dumanjug": {
            "province": "Central Visayas",
            "center": [
                10.042,
                123.475
            ]
        },
        "Ginatilan": {
            "province": "Central Visayas",
            "center": [
                9.589,
                123.349
            ]
        },
        "Lapu-Lapu City": {
            "province": "Central Visayas",
            "center": [
                10.29,
                123.992
            ]
        },
        "Liloan": {
            "province": "Eastern Visayas",
            "center": [
                10.133,
                125.164
            ]
        },
        "Madridejos": {
            "province": "Central Visayas",
            "center": [
                11.267,
                123.734
            ]
        },
        "Malabuyoc": {
            "province": "Central Visayas",
            "center": [
                9.665,
                123.366
            ]
        },
        "Mandaue City": {
            "province": "Central Visayas",
            "center": [
                10.348,
                123.94
            ]
        },
        "Medellin": {
            "province": "Central Visayas",
            "center": [
                11.141,
                123.977
            ]
        },
        "Minglanilla": {
            "province": "Central Visayas",
            "center": [
                10.29,
                123.776
            ]
        },
        "Moalboal": {
            "province": "Central Visayas",
            "center": [
                9.932,
                123.431
            ]
        },
        "Oslob": {
            "province": "Central Visayas",
            "center": [
                9.539,
                123.401
            ]
        },
        "Pinamungahan": {
            "province": "Central Visayas",
            "center": [
                10.265,
                123.62
            ]
        },
        "Poro": {
            "province": "Central Visayas",
            "center": [
                10.673,
                124.429
            ]
        },
        "Ronda": {
            "province": "Central Visayas",
            "center": [
                9.999,
                123.446
            ]
        },
        "Samboan": {
            "province": "Central Visayas",
            "center": [
                9.511,
                123.328
            ]
        },
        "Santa Fe": {
            "province": "MIMAROPA",
            "center": [
                12.169,
                122.011
            ]
        },
        "Santander": {
            "province": "Central Visayas",
            "center": [
                9.442,
                123.328
            ]
        },
        "Sibonga": {
            "province": "Central Visayas",
            "center": [
                10.027,
                123.578
            ]
        },
        "Sogod": {
            "province": "Eastern Visayas",
            "center": [
                10.457,
                124.998
            ]
        },
        "Tabogon": {
            "province": "Central Visayas",
            "center": [
                10.934,
                124.0
            ]
        },
        "Tabuelan": {
            "province": "Central Visayas",
            "center": [
                10.846,
                123.911
            ]
        },
        "Talisay City": {
            "province": "Western Visayas",
            "center": [
                10.702,
                123.091
            ]
        },
        "Toledo City": {
            "province": "Central Visayas",
            "center": [
                10.357,
                123.689
            ]
        },
        "Tudela": {
            "province": "Northern Mindanao",
            "center": [
                8.25,
                123.757
            ]
        },
        "Laak": {
            "province": "Davao Region",
            "center": [
                7.87,
                125.81
            ]
        },
        "Maco": {
            "province": "Davao Region",
            "center": [
                7.411,
                125.928
            ]
        },
        "Maragusan": {
            "province": "Davao Region",
            "center": [
                7.342,
                126.161
            ]
        },
        "Mawab": {
            "province": "Davao Region",
            "center": [
                7.506,
                125.938
            ]
        },
        "Monkayo": {
            "province": "Davao Region",
            "center": [
                7.854,
                126.061
            ]
        },
        "Montevista": {
            "province": "Davao Region",
            "center": [
                7.709,
                125.978
            ]
        },
        "Nabunturan": {
            "province": "Davao Region",
            "center": [
                7.546,
                126.011
            ]
        },
        "New Bataan": {
            "province": "Davao Region",
            "center": [
                7.52,
                126.178
            ]
        },
        "Pantukan": {
            "province": "Davao Region",
            "center": [
                7.208,
                126.039
            ]
        },
        "Asuncion": {
            "province": "Davao Region",
            "center": [
                7.662,
                125.818
            ]
        },
        "Braulio E. Dujali": {
            "province": "Davao Region",
            "center": [
                7.442,
                125.655
            ]
        },
        "Kapalong": {
            "province": "Davao Region",
            "center": [
                7.831,
                125.572
            ]
        },
        "New Corella": {
            "province": "Davao Region",
            "center": [
                7.602,
                125.856
            ]
        },
        "Panabo City": {
            "province": "Davao Region",
            "center": [
                7.331,
                125.579
            ]
        },
        "Samal City": {
            "province": "Davao Region",
            "center": [
                7.05,
                125.736
            ]
        },
        "Tagum City": {
            "province": "Davao Region",
            "center": [
                7.435,
                125.799
            ]
        },
        "Talaingod": {
            "province": "Davao Region",
            "center": [
                7.648,
                125.476
            ]
        },
        "Bansalan": {
            "province": "Davao Region",
            "center": [
                6.844,
                125.218
            ]
        },
        "Davao City": {
            "province": "Davao Region",
            "center": [
                7.254,
                125.414
            ]
        },
        "Digos City": {
            "province": "Davao Region",
            "center": [
                6.829,
                125.306
            ]
        },
        "Don Marcelino": {
            "province": "Davao Region",
            "center": [
                6.131,
                125.636
            ]
        },
        "Jose Abad Santos": {
            "province": "Davao Region",
            "center": [
                5.841,
                125.523
            ]
        },
        "Kiblawan": {
            "province": "Davao Region",
            "center": [
                6.632,
                125.218
            ]
        },
        "Magsaysay": {
            "province": "MIMAROPA",
            "center": [
                10.88,
                121.056
            ]
        },
        "Malalag": {
            "province": "Davao Region",
            "center": [
                6.512,
                125.293
            ]
        },
        "Malita": {
            "province": "Davao Region",
            "center": [
                6.332,
                125.486
            ]
        },
        "Matanao": {
            "province": "Davao Region",
            "center": [
                6.719,
                125.222
            ]
        },
        "Padada": {
            "province": "Davao Region",
            "center": [
                6.656,
                125.318
            ]
        },
        "Santa Cruz": {
            "province": "Central Luzon",
            "center": [
                15.76,
                120.034
            ]
        },
        "Sarangani": {
            "province": "Davao Region",
            "center": [
                5.417,
                125.422
            ]
        },
        "Sulop": {
            "province": "Davao Region",
            "center": [
                6.618,
                125.316
            ]
        },
        "Baganga": {
            "province": "Davao Region",
            "center": [
                7.597,
                126.411
            ]
        },
        "Banaybanay": {
            "province": "Davao Region",
            "center": [
                7.115,
                126.104
            ]
        },
        "Boston": {
            "province": "Davao Region",
            "center": [
                7.917,
                126.267
            ]
        },
        "Caraga": {
            "province": "Davao Region",
            "center": [
                7.359,
                126.428
            ]
        },
        "Cateel": {
            "province": "Davao Region",
            "center": [
                7.787,
                126.34
            ]
        },
        "Governor Generoso": {
            "province": "Davao Region",
            "center": [
                6.539,
                126.135
            ]
        },
        "Lupon": {
            "province": "Davao Region",
            "center": [
                7.04,
                126.135
            ]
        },
        "Manay": {
            "province": "Davao Region",
            "center": [
                7.209,
                126.433
            ]
        },
        "Mati City": {
            "province": "Davao Region",
            "center": [
                6.833,
                126.212
            ]
        },
        "Tarragona": {
            "province": "Davao Region",
            "center": [
                7.078,
                126.378
            ]
        },
        "Basilisa": {
            "province": "Caraga",
            "center": [
                10.08,
                125.546
            ]
        },
        "Cagdianao": {
            "province": "Caraga",
            "center": [
                10.027,
                125.651
            ]
        },
        "Dinagat": {
            "province": "Caraga",
            "center": [
                9.976,
                125.6
            ]
        },
        "Libjo": {
            "province": "Caraga",
            "center": [
                10.187,
                125.562
            ]
        },
        "Tubajon": {
            "province": "Caraga",
            "center": [
                10.285,
                125.581
            ]
        },
        "Arteche": {
            "province": "Eastern Visayas",
            "center": [
                12.235,
                125.326
            ]
        },
        "Balangiga": {
            "province": "Eastern Visayas",
            "center": [
                11.202,
                125.364
            ]
        },
        "Balangkayan": {
            "province": "Eastern Visayas",
            "center": [
                11.409,
                125.405
            ]
        },
        "Borongan City": {
            "province": "Eastern Visayas",
            "center": [
                11.591,
                125.346
            ]
        },
        "Can-Avid": {
            "province": "Eastern Visayas",
            "center": [
                11.988,
                125.33
            ]
        },
        "General Macarthur": {
            "province": "Eastern Visayas",
            "center": [
                11.267,
                125.507
            ]
        },
        "Giporlos": {
            "province": "Eastern Visayas",
            "center": [
                11.127,
                125.475
            ]
        },
        "Guiuan": {
            "province": "Eastern Visayas",
            "center": [
                10.851,
                125.737
            ]
        },
        "Hernani": {
            "province": "Eastern Visayas",
            "center": [
                11.327,
                125.592
            ]
        },
        "Jipapad": {
            "province": "Eastern Visayas",
            "center": [
                12.278,
                125.204
            ]
        },
        "Lawaan": {
            "province": "Eastern Visayas",
            "center": [
                11.202,
                125.287
            ]
        },
        "Llorente": {
            "province": "Eastern Visayas",
            "center": [
                11.343,
                125.448
            ]
        },
        "Maslog": {
            "province": "Eastern Visayas",
            "center": [
                12.107,
                125.175
            ]
        },
        "Maydolong": {
            "province": "Eastern Visayas",
            "center": [
                11.46,
                125.361
            ]
        },
        "Oras": {
            "province": "Eastern Visayas",
            "center": [
                12.153,
                125.386
            ]
        },
        "Quinapondan": {
            "province": "Eastern Visayas",
            "center": [
                11.19,
                125.477
            ]
        },
        "Salcedo": {
            "province": "Ilocos Region",
            "center": [
                17.133,
                120.551
            ]
        },
        "San Julian": {
            "province": "Eastern Visayas",
            "center": [
                11.731,
                125.372
            ]
        },
        "San Policarpo": {
            "province": "Eastern Visayas",
            "center": [
                12.207,
                125.454
            ]
        },
        "Sulat": {
            "province": "Eastern Visayas",
            "center": [
                11.796,
                125.374
            ]
        },
        "Taft": {
            "province": "Eastern Visayas",
            "center": [
                11.878,
                125.34
            ]
        },
        "Jordan": {
            "province": "Western Visayas",
            "center": [
                10.606,
                122.572
            ]
        },
        "Nueva Valencia": {
            "province": "Western Visayas",
            "center": [
                10.464,
                122.544
            ]
        },
        "San Lorenzo": {
            "province": "Western Visayas",
            "center": [
                10.599,
                122.671
            ]
        },
        "Sibunag": {
            "province": "Western Visayas",
            "center": [
                10.514,
                122.617
            ]
        },
        "Aguinaldo": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.938,
                121.348
            ]
        },
        "Alfonso Lista": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.957,
                121.489
            ]
        },
        "Asipulo": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.684,
                121.07
            ]
        },
        "Banaue": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.943,
                121.097
            ]
        },
        "Hingyon": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.86,
                121.095
            ]
        },
        "Hungduan": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.87,
                120.994
            ]
        },
        "Kiangan": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.769,
                121.1
            ]
        },
        "Lagawe": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.8,
                121.217
            ]
        },
        "Lamut": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.695,
                121.202
            ]
        },
        "Mayoyao": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.9,
                121.246
            ]
        },
        "Tinoc": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.699,
                120.954
            ]
        },
        "Adams": {
            "province": "Ilocos Region",
            "center": [
                18.45,
                120.921
            ]
        },
        "Bacarra": {
            "province": "Ilocos Region",
            "center": [
                18.264,
                120.611
            ]
        },
        "Badoc": {
            "province": "Ilocos Region",
            "center": [
                17.91,
                120.508
            ]
        },
        "Bangui": {
            "province": "Ilocos Region",
            "center": [
                18.47,
                120.753
            ]
        },
        "Banna": {
            "province": "Ilocos Region",
            "center": [
                17.975,
                120.655
            ]
        },
        "Batac City": {
            "province": "Ilocos Region",
            "center": [
                18.038,
                120.58
            ]
        },
        "Carasi": {
            "province": "Ilocos Region",
            "center": [
                18.228,
                120.884
            ]
        },
        "Currimao": {
            "province": "Ilocos Region",
            "center": [
                18.007,
                120.501
            ]
        },
        "Dingras": {
            "province": "Ilocos Region",
            "center": [
                18.076,
                120.73
            ]
        },
        "Dumalneg": {
            "province": "Ilocos Region",
            "center": [
                18.474,
                120.831
            ]
        },
        "Laoag City": {
            "province": "Ilocos Region",
            "center": [
                18.196,
                120.583
            ]
        },
        "Marcos": {
            "province": "Ilocos Region",
            "center": [
                18.025,
                120.703
            ]
        },
        "Nueva Era": {
            "province": "Ilocos Region",
            "center": [
                17.947,
                120.747
            ]
        },
        "Pagudpud": {
            "province": "Ilocos Region",
            "center": [
                18.563,
                120.865
            ]
        },
        "Paoay Lake": {
            "province": "Ilocos Region",
            "center": [
                18.117,
                120.535
            ]
        },
        "Paoay": {
            "province": "Ilocos Region",
            "center": [
                18.081,
                120.519
            ]
        },
        "Pasuquin": {
            "province": "Ilocos Region",
            "center": [
                18.37,
                120.632
            ]
        },
        "Piddig": {
            "province": "Ilocos Region",
            "center": [
                18.182,
                120.757
            ]
        },
        "Pinili": {
            "province": "Ilocos Region",
            "center": [
                17.948,
                120.546
            ]
        },
        "Sarrat": {
            "province": "Ilocos Region",
            "center": [
                18.115,
                120.649
            ]
        },
        "Solsona": {
            "province": "Ilocos Region",
            "center": [
                18.115,
                120.823
            ]
        },
        "Vintar": {
            "province": "Ilocos Region",
            "center": [
                18.318,
                120.788
            ]
        },
        "Alilem": {
            "province": "Ilocos Region",
            "center": [
                16.898,
                120.586
            ]
        },
        "Banayoyo": {
            "province": "Ilocos Region",
            "center": [
                17.237,
                120.497
            ]
        },
        "Bantay": {
            "province": "Ilocos Region",
            "center": [
                17.597,
                120.45
            ]
        },
        "Cabugao": {
            "province": "Ilocos Region",
            "center": [
                17.793,
                120.468
            ]
        },
        "Candon City": {
            "province": "Ilocos Region",
            "center": [
                17.191,
                120.467
            ]
        },
        "Caoayan": {
            "province": "Ilocos Region",
            "center": [
                17.536,
                120.399
            ]
        },
        "Cervantes": {
            "province": "Ilocos Region",
            "center": [
                16.993,
                120.714
            ]
        },
        "Galimuyod": {
            "province": "Ilocos Region",
            "center": [
                17.186,
                120.516
            ]
        },
        "Gregorio Del Pilar": {
            "province": "Ilocos Region",
            "center": [
                17.144,
                120.61
            ]
        },
        "Lidlidda": {
            "province": "Ilocos Region",
            "center": [
                17.258,
                120.539
            ]
        },
        "Magsingal": {
            "province": "Ilocos Region",
            "center": [
                17.684,
                120.452
            ]
        },
        "Nagbukel": {
            "province": "Ilocos Region",
            "center": [
                17.44,
                120.552
            ]
        },
        "Narvacan": {
            "province": "Ilocos Region",
            "center": [
                17.444,
                120.501
            ]
        },
        "Quirino": {
            "province": "Cagayan Valley",
            "center": [
                17.159,
                121.745
            ]
        },
        "San Emilio": {
            "province": "Ilocos Region",
            "center": [
                17.244,
                120.613
            ]
        },
        "San Esteban": {
            "province": "Ilocos Region",
            "center": [
                17.33,
                120.456
            ]
        },
        "Santa Catalina": {
            "province": "Central Visayas",
            "center": [
                9.277,
                122.98
            ]
        },
        "Santa Lucia": {
            "province": "Ilocos Region",
            "center": [
                17.125,
                120.471
            ]
        },
        "Santa": {
            "province": "Ilocos Region",
            "center": [
                17.514,
                120.447
            ]
        },
        "Sigay": {
            "province": "Ilocos Region",
            "center": [
                17.035,
                120.602
            ]
        },
        "Sinait": {
            "province": "Ilocos Region",
            "center": [
                17.86,
                120.489
            ]
        },
        "Sugpon": {
            "province": "Ilocos Region",
            "center": [
                16.775,
                120.576
            ]
        },
        "Suyo": {
            "province": "Ilocos Region",
            "center": [
                16.979,
                120.554
            ]
        },
        "Tagudin": {
            "province": "Ilocos Region",
            "center": [
                16.938,
                120.465
            ]
        },
        "Vigan City": {
            "province": "Ilocos Region",
            "center": [
                17.562,
                120.391
            ]
        },
        "Ajuy": {
            "province": "Western Visayas",
            "center": [
                11.143,
                122.996
            ]
        },
        "Alimodian": {
            "province": "Western Visayas",
            "center": [
                10.86,
                122.381
            ]
        },
        "Anilao": {
            "province": "Western Visayas",
            "center": [
                11.001,
                122.743
            ]
        },
        "Badiangan": {
            "province": "Western Visayas",
            "center": [
                10.991,
                122.534
            ]
        },
        "Balasan": {
            "province": "Western Visayas",
            "center": [
                11.458,
                123.086
            ]
        },
        "Banate": {
            "province": "Western Visayas",
            "center": [
                11.044,
                122.793
            ]
        },
        "Barotac Nuevo": {
            "province": "Western Visayas",
            "center": [
                10.909,
                122.724
            ]
        },
        "Barotac Viejo": {
            "province": "Western Visayas",
            "center": [
                11.087,
                122.867
            ]
        },
        "Batad": {
            "province": "Western Visayas",
            "center": [
                11.4,
                123.1
            ]
        },
        "Bingawan": {
            "province": "Western Visayas",
            "center": [
                11.193,
                122.569
            ]
        },
        "Cabatuan": {
            "province": "Cagayan Valley",
            "center": [
                16.937,
                121.666
            ]
        },
        "Calinog": {
            "province": "Western Visayas",
            "center": [
                11.152,
                122.499
            ]
        },
        "Carles": {
            "province": "Western Visayas",
            "center": [
                11.522,
                123.191
            ]
        },
        "Concepcion": {
            "province": "Central Luzon",
            "center": [
                15.331,
                120.678
            ]
        },
        "Dingle": {
            "province": "Western Visayas",
            "center": [
                11.014,
                122.67
            ]
        },
        "Duenas": {
            "province": "Western Visayas",
            "center": [
                11.057,
                122.586
            ]
        },
        "Dumangas": {
            "province": "Western Visayas",
            "center": [
                10.834,
                122.712
            ]
        },
        "Estancia": {
            "province": "Western Visayas",
            "center": [
                11.452,
                123.135
            ]
        },
        "Guimbal": {
            "province": "Western Visayas",
            "center": [
                10.692,
                122.311
            ]
        },
        "Igbaras": {
            "province": "Western Visayas",
            "center": [
                10.753,
                122.243
            ]
        },
        "Iloilo City": {
            "province": "Western Visayas",
            "center": [
                10.722,
                122.556
            ]
        },
        "Janiuay": {
            "province": "Western Visayas",
            "center": [
                10.995,
                122.422
            ]
        },
        "Lambunao": {
            "province": "Western Visayas",
            "center": [
                11.11,
                122.389
            ]
        },
        "Leganes": {
            "province": "Western Visayas",
            "center": [
                10.791,
                122.6
            ]
        },
        "Leon": {
            "province": "Western Visayas",
            "center": [
                10.826,
                122.337
            ]
        },
        "Maasin": {
            "province": "Western Visayas",
            "center": [
                10.924,
                122.4
            ]
        },
        "Miagao": {
            "province": "Western Visayas",
            "center": [
                10.686,
                122.184
            ]
        },
        "Mina": {
            "province": "Western Visayas",
            "center": [
                10.93,
                122.582
            ]
        },
        "New Lucena": {
            "province": "Western Visayas",
            "center": [
                10.874,
                122.579
            ]
        },
        "Oton": {
            "province": "Western Visayas",
            "center": [
                10.725,
                122.467
            ]
        },
        "Passi City": {
            "province": "Western Visayas",
            "center": [
                11.169,
                122.67
            ]
        },
        "Pavia": {
            "province": "Western Visayas",
            "center": [
                10.768,
                122.536
            ]
        },
        "Pototan": {
            "province": "Western Visayas",
            "center": [
                10.931,
                122.634
            ]
        },
        "San Dionisio": {
            "province": "Western Visayas",
            "center": [
                11.327,
                123.079
            ]
        },
        "San Enrique": {
            "province": "Western Visayas",
            "center": [
                10.419,
                122.869
            ]
        },
        "San Joaquin": {
            "province": "Western Visayas",
            "center": [
                10.596,
                122.078
            ]
        },
        "Santa Barbara": {
            "province": "Ilocos Region",
            "center": [
                15.99,
                120.432
            ]
        },
        "Sara": {
            "province": "Western Visayas",
            "center": [
                11.299,
                122.998
            ]
        },
        "Tigbauan": {
            "province": "Western Visayas",
            "center": [
                10.715,
                122.378
            ]
        },
        "Tubungan": {
            "province": "Western Visayas",
            "center": [
                10.798,
                122.288
            ]
        },
        "Zarraga": {
            "province": "Western Visayas",
            "center": [
                10.828,
                122.629
            ]
        },
        "Angadanan": {
            "province": "Cagayan Valley",
            "center": [
                16.781,
                121.796
            ]
        },
        "Aurora": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.945,
                123.585
            ]
        },
        "Benito Soliven": {
            "province": "Cagayan Valley",
            "center": [
                16.896,
                121.941
            ]
        },
        "Cabagan": {
            "province": "Cagayan Valley",
            "center": [
                17.375,
                121.852
            ]
        },
        "Cauayan City": {
            "province": "Cagayan Valley",
            "center": [
                16.901,
                121.8
            ]
        },
        "Cordon": {
            "province": "Cagayan Valley",
            "center": [
                16.683,
                121.461
            ]
        },
        "Delfin Albano": {
            "province": "Cagayan Valley",
            "center": [
                17.266,
                121.748
            ]
        },
        "Dinapigue": {
            "province": "Cagayan Valley",
            "center": [
                16.676,
                122.244
            ]
        },
        "Divilacan": {
            "province": "Cagayan Valley",
            "center": [
                17.278,
                122.168
            ]
        },
        "Echague": {
            "province": "Cagayan Valley",
            "center": [
                16.63,
                121.827
            ]
        },
        "Gamu": {
            "province": "Cagayan Valley",
            "center": [
                17.071,
                121.812
            ]
        },
        "Ilagan": {
            "province": "Cagayan Valley",
            "center": [
                17.15,
                122.135
            ]
        },
        "Jones": {
            "province": "Cagayan Valley",
            "center": [
                16.559,
                121.778
            ]
        },
        "Maconacon": {
            "province": "Cagayan Valley",
            "center": [
                17.363,
                122.134
            ]
        },
        "Mallig": {
            "province": "Cagayan Valley",
            "center": [
                17.174,
                121.624
            ]
        },
        "Naguilian": {
            "province": "Ilocos Region",
            "center": [
                16.524,
                120.423
            ]
        },
        "Palanan": {
            "province": "Cagayan Valley",
            "center": [
                17.002,
                122.356
            ]
        },
        "Ramon": {
            "province": "Cagayan Valley",
            "center": [
                16.804,
                121.525
            ]
        },
        "Reina Mercedes": {
            "province": "Cagayan Valley",
            "center": [
                17.006,
                121.798
            ]
        },
        "Roxas": {
            "province": "MIMAROPA",
            "center": [
                10.314,
                119.289
            ]
        },
        "San Agustin": {
            "province": "Caraga",
            "center": [
                8.722,
                126.119
            ]
        },
        "San Guillermo": {
            "province": "Cagayan Valley",
            "center": [
                16.694,
                121.985
            ]
        },
        "San Manuel": {
            "province": "Central Luzon",
            "center": [
                15.829,
                120.597
            ]
        },
        "San Mariano": {
            "province": "Cagayan Valley",
            "center": [
                16.877,
                122.152
            ]
        },
        "San Mateo": {
            "province": "CALABARZON",
            "center": [
                14.691,
                121.155
            ]
        },
        "Pugo": {
            "province": "Ilocos Region",
            "center": [
                16.324,
                120.481
            ]
        },
        "San Fernando City": {
            "province": "Central Luzon",
            "center": [
                15.061,
                120.689
            ]
        },
        "San Gabriel": {
            "province": "Ilocos Region",
            "center": [
                16.678,
                120.489
            ]
        },
        "Santol": {
            "province": "Ilocos Region",
            "center": [
                16.761,
                120.491
            ]
        },
        "Sudipen": {
            "province": "Ilocos Region",
            "center": [
                16.851,
                120.491
            ]
        },
        "Tubao": {
            "province": "Ilocos Region",
            "center": [
                16.346,
                120.429
            ]
        },
        "Alaminos": {
            "province": "CALABARZON",
            "center": [
                14.045,
                121.248
            ]
        },
        "Bay": {
            "province": "CALABARZON",
            "center": [
                14.145,
                121.258
            ]
        },
        "Bi\u00b1an": {
            "province": "CALABARZON",
            "center": [
                14.305,
                121.065
            ]
        },
        "Cabuyao": {
            "province": "CALABARZON",
            "center": [
                14.25,
                121.121
            ]
        },
        "Calamba City": {
            "province": "CALABARZON",
            "center": [
                14.189,
                121.124
            ]
        },
        "Calauan": {
            "province": "CALABARZON",
            "center": [
                14.133,
                121.295
            ]
        },
        "Cavinti": {
            "province": "CALABARZON",
            "center": [
                14.243,
                121.555
            ]
        },
        "Famy": {
            "province": "CALABARZON",
            "center": [
                14.464,
                121.482
            ]
        },
        "Kalayaan": {
            "province": "CALABARZON",
            "center": [
                14.336,
                121.541
            ]
        },
        "Kalibato Lake": {
            "province": "CALABARZON",
            "center": [
                14.1,
                121.379
            ]
        },
        "Laguna lake": {
            "province": "CALABARZON",
            "center": [
                14.363,
                121.23
            ]
        },
        "Liliw": {
            "province": "CALABARZON",
            "center": [
                14.131,
                121.446
            ]
        },
        "Los Ba\u00b1os": {
            "province": "CALABARZON",
            "center": [
                14.158,
                121.224
            ]
        },
        "Luisiana": {
            "province": "CALABARZON",
            "center": [
                14.19,
                121.522
            ]
        },
        "Lumban": {
            "province": "CALABARZON",
            "center": [
                14.301,
                121.533
            ]
        },
        "Mabitac": {
            "province": "CALABARZON",
            "center": [
                14.43,
                121.401
            ]
        },
        "Magdalena": {
            "province": "CALABARZON",
            "center": [
                14.206,
                121.433
            ]
        },
        "Majayjay": {
            "province": "CALABARZON",
            "center": [
                14.142,
                121.482
            ]
        },
        "Nagcarlan": {
            "province": "CALABARZON",
            "center": [
                14.14,
                121.403
            ]
        },
        "Paete": {
            "province": "CALABARZON",
            "center": [
                14.377,
                121.555
            ]
        },
        "Pagsanjan": {
            "province": "CALABARZON",
            "center": [
                14.254,
                121.459
            ]
        },
        "Pakil": {
            "province": "CALABARZON",
            "center": [
                14.385,
                121.453
            ]
        },
        "Palakpakin Lake": {
            "province": "CALABARZON",
            "center": [
                14.119,
                121.335
            ]
        },
        "Pangil": {
            "province": "CALABARZON",
            "center": [
                14.414,
                121.49
            ]
        },
        "Pila": {
            "province": "CALABARZON",
            "center": [
                14.232,
                121.369
            ]
        },
        "Sampaloc Lake": {
            "province": "CALABARZON",
            "center": [
                14.076,
                121.332
            ]
        },
        "San Pablo City": {
            "province": "CALABARZON",
            "center": [
                14.051,
                121.332
            ]
        },
        "San Pedro": {
            "province": "CALABARZON",
            "center": [
                14.349,
                121.038
            ]
        },
        "Santa Rosa City": {
            "province": "CALABARZON",
            "center": [
                14.273,
                121.09
            ]
        },
        "Siniloan": {
            "province": "CALABARZON",
            "center": [
                14.437,
                121.487
            ]
        },
        "Victoria": {
            "province": "Central Luzon",
            "center": [
                15.576,
                120.686
            ]
        },
        "Waterbody": {
            "province": "CALABARZON",
            "center": [
                14.115,
                121.368
            ]
        },
        "Bacolod": {
            "province": "Northern Mindanao",
            "center": [
                8.147,
                124.035
            ]
        },
        "Baloi": {
            "province": "Northern Mindanao",
            "center": [
                8.092,
                124.216
            ]
        },
        "Baroy": {
            "province": "Northern Mindanao",
            "center": [
                7.979,
                123.82
            ]
        },
        "Iligan City": {
            "province": "Northern Mindanao",
            "center": [
                8.241,
                124.387
            ]
        },
        "Kapatagan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.476,
                124.18
            ]
        },
        "Kauswagan": {
            "province": "Northern Mindanao",
            "center": [
                8.166,
                124.098
            ]
        },
        "Kolambugan": {
            "province": "Northern Mindanao",
            "center": [
                8.087,
                123.889
            ]
        },
        "Lala": {
            "province": "Northern Mindanao",
            "center": [
                7.953,
                123.761
            ]
        },
        "Linamon": {
            "province": "Northern Mindanao",
            "center": [
                8.164,
                124.162
            ]
        },
        "Maigo": {
            "province": "Northern Mindanao",
            "center": [
                8.106,
                123.981
            ]
        },
        "Matungao": {
            "province": "Northern Mindanao",
            "center": [
                8.113,
                124.158
            ]
        },
        "Munai": {
            "province": "Northern Mindanao",
            "center": [
                7.964,
                124.082
            ]
        },
        "Nunungan": {
            "province": "Northern Mindanao",
            "center": [
                7.811,
                123.945
            ]
        },
        "Pantao Ragat": {
            "province": "Northern Mindanao",
            "center": [
                8.047,
                124.104
            ]
        },
        "Pantar": {
            "province": "Northern Mindanao",
            "center": [
                8.041,
                124.204
            ]
        },
        "Poona Piagapo": {
            "province": "Northern Mindanao",
            "center": [
                8.091,
                124.081
            ]
        },
        "Salvador": {
            "province": "Northern Mindanao",
            "center": [
                7.908,
                123.863
            ]
        },
        "Sapad": {
            "province": "Northern Mindanao",
            "center": [
                7.834,
                123.827
            ]
        },
        "Sultan Naga Dimaporo": {
            "province": "Northern Mindanao",
            "center": [
                7.781,
                123.746
            ]
        },
        "Tagoloan": {
            "province": "Northern Mindanao",
            "center": [
                8.529,
                124.795
            ]
        },
        "Tangcal": {
            "province": "Northern Mindanao",
            "center": [
                7.958,
                123.989
            ]
        },
        "Tubod": {
            "province": "Caraga",
            "center": [
                9.575,
                125.567
            ]
        },
        "Bacolod Kalawi": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.879,
                124.122
            ]
        },
        "Balabagan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.541,
                124.146
            ]
        },
        "Balindong": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.927,
                124.177
            ]
        },
        "Bayang": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.734,
                124.201
            ]
        },
        "Binidayan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.749,
                124.166
            ]
        },
        "Buadiposo-Buntong": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.978,
                124.389
            ]
        },
        "Bubong": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                8.018,
                124.486
            ]
        },
        "Bumbaran": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.714,
                124.639
            ]
        },
        "Butig": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.702,
                124.312
            ]
        },
        "Calanogas": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.739,
                124.044
            ]
        },
        "Dapao Lake": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.787,
                124.053
            ]
        },
        "Ditsaan-Ramain": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.999,
                124.338
            ]
        },
        "Ganassi": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.805,
                124.107
            ]
        },
        "Kapai": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                8.118,
                124.337
            ]
        },
        "Lanao Lake": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.881,
                124.247
            ]
        },
        "Lumba-Bayabao": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.751,
                124.455
            ]
        },
        "Lumbaca Unayan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.725,
                124.229
            ]
        },
        "Lumbatan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.755,
                124.243
            ]
        },
        "Lumbayanague": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.771,
                124.284
            ]
        },
        "Madalum": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.878,
                124.096
            ]
        },
        "Madamba": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.869,
                124.066
            ]
        },
        "Maguing": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.898,
                124.512
            ]
        },
        "Malabang": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.611,
                124.082
            ]
        },
        "Marantao": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.974,
                124.191
            ]
        },
        "Marawi City": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                8.028,
                124.29
            ]
        },
        "Marogong": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.615,
                124.185
            ]
        },
        "Masiu": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.813,
                124.325
            ]
        },
        "Mulondo": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.93,
                124.386
            ]
        },
        "Pagayawan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.749,
                124.117
            ]
        },
        "Piagapo": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                8.006,
                124.185
            ]
        },
        "Picong": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.689,
                123.944
            ]
        },
        "Poona Bayabao": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.838,
                124.346
            ]
        },
        "Pualas": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.814,
                124.062
            ]
        },
        "Saguiaran": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                8.036,
                124.251
            ]
        },
        "Sultan Dumalondong": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.616,
                124.283
            ]
        },
        "Tagoloan II": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                8.114,
                124.433
            ]
        },
        "Tamparan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.876,
                124.328
            ]
        },
        "Taraka": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.902,
                124.341
            ]
        },
        "Tubaran": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.694,
                124.096
            ]
        },
        "Tugaya": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.904,
                124.144
            ]
        },
        "Wao": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.667,
                124.714
            ]
        },
        "Abuyog": {
            "province": "Eastern Visayas",
            "center": [
                10.658,
                125.045
            ]
        },
        "Alangalang": {
            "province": "Eastern Visayas",
            "center": [
                11.22,
                124.864
            ]
        },
        "Albuera": {
            "province": "Eastern Visayas",
            "center": [
                10.926,
                124.746
            ]
        },
        "Babatngon": {
            "province": "Eastern Visayas",
            "center": [
                11.388,
                124.895
            ]
        },
        "Barugo": {
            "province": "Eastern Visayas",
            "center": [
                11.308,
                124.769
            ]
        },
        "Baybay City": {
            "province": "Eastern Visayas",
            "center": [
                10.689,
                124.838
            ]
        },
        "Burauen": {
            "province": "Eastern Visayas",
            "center": [
                10.964,
                124.855
            ]
        },
        "Calubian": {
            "province": "Eastern Visayas",
            "center": [
                11.484,
                124.364
            ]
        },
        "Capoocan": {
            "province": "Eastern Visayas",
            "center": [
                11.25,
                124.604
            ]
        },
        "Carigara": {
            "province": "Eastern Visayas",
            "center": [
                11.237,
                124.693
            ]
        },
        "Dagami": {
            "province": "Eastern Visayas",
            "center": [
                11.061,
                124.863
            ]
        },
        "Dulag": {
            "province": "Eastern Visayas",
            "center": [
                10.963,
                125.008
            ]
        },
        "Hilongos": {
            "province": "Eastern Visayas",
            "center": [
                10.396,
                124.823
            ]
        },
        "Hindang": {
            "province": "Eastern Visayas",
            "center": [
                10.455,
                124.813
            ]
        },
        "Inopacan": {
            "province": "Eastern Visayas",
            "center": [
                10.52,
                124.842
            ]
        },
        "Isabel": {
            "province": "Eastern Visayas",
            "center": [
                10.94,
                124.46
            ]
        },
        "Jaro": {
            "province": "Eastern Visayas",
            "center": [
                11.162,
                124.766
            ]
        },
        "Javier": {
            "province": "Eastern Visayas",
            "center": [
                10.764,
                124.925
            ]
        },
        "Julita": {
            "province": "Eastern Visayas",
            "center": [
                10.981,
                124.961
            ]
        },
        "Kananga": {
            "province": "Eastern Visayas",
            "center": [
                11.169,
                124.564
            ]
        },
        "Leyte": {
            "province": "Eastern Visayas",
            "center": [
                11.338,
                124.494
            ]
        },
        "Macarthur": {
            "province": "Eastern Visayas",
            "center": [
                10.825,
                124.938
            ]
        },
        "Mahaplag": {
            "province": "Eastern Visayas",
            "center": [
                10.591,
                124.987
            ]
        },
        "Matag-Ob": {
            "province": "Eastern Visayas",
            "center": [
                11.124,
                124.468
            ]
        },
        "Matalom": {
            "province": "Eastern Visayas",
            "center": [
                10.265,
                124.825
            ]
        },
        "Mayorga": {
            "province": "Eastern Visayas",
            "center": [
                10.883,
                124.988
            ]
        },
        "Merida": {
            "province": "Eastern Visayas",
            "center": [
                10.964,
                124.51
            ]
        },
        "Ormoc City": {
            "province": "Eastern Visayas",
            "center": [
                11.055,
                124.636
            ]
        },
        "Palo": {
            "province": "Eastern Visayas",
            "center": [
                11.146,
                124.97
            ]
        },
        "Palompon": {
            "province": "Eastern Visayas",
            "center": [
                11.034,
                124.422
            ]
        },
        "Pastrana": {
            "province": "Eastern Visayas",
            "center": [
                11.115,
                124.861
            ]
        },
        "Tabango": {
            "province": "Eastern Visayas",
            "center": [
                11.309,
                124.404
            ]
        },
        "Pagalungan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.947,
                124.746
            ]
        },
        "Paglat": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.816,
                124.795
            ]
        },
        "Pandag": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.757,
                124.791
            ]
        },
        "Rajah Buayan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.933,
                124.577
            ]
        },
        "Shariff Aguak": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.885,
                124.453
            ]
        },
        "South Upi": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.84,
                124.176
            ]
        },
        "Sultan Sa Barongis": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.902,
                124.64
            ]
        },
        "Talayan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.932,
                124.32
            ]
        },
        "Talitay": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.029,
                124.375
            ]
        },
        "Boac": {
            "province": "MIMAROPA",
            "center": [
                13.407,
                121.901
            ]
        },
        "Gasan": {
            "province": "MIMAROPA",
            "center": [
                13.327,
                121.889
            ]
        },
        "Mogpog": {
            "province": "MIMAROPA",
            "center": [
                13.497,
                121.897
            ]
        },
        "Torrijos": {
            "province": "MIMAROPA",
            "center": [
                13.337,
                122.045
            ]
        },
        "Aroroy": {
            "province": "Bicol Region",
            "center": [
                12.451,
                123.333
            ]
        },
        "Baleno": {
            "province": "Bicol Region",
            "center": [
                12.412,
                123.472
            ]
        },
        "Balud": {
            "province": "Bicol Region",
            "center": [
                12.023,
                123.233
            ]
        },
        "Cataingan": {
            "province": "Bicol Region",
            "center": [
                11.999,
                123.962
            ]
        },
        "Cawayan": {
            "province": "Bicol Region",
            "center": [
                12.032,
                123.738
            ]
        },
        "Tabontabon": {
            "province": "Eastern Visayas",
            "center": [
                11.044,
                124.947
            ]
        },
        "Tacloban City": {
            "province": "Eastern Visayas",
            "center": [
                11.272,
                124.955
            ]
        },
        "Tanauan": {
            "province": "Eastern Visayas",
            "center": [
                11.085,
                124.991
            ]
        },
        "Tolosa": {
            "province": "Eastern Visayas",
            "center": [
                11.037,
                125.02
            ]
        },
        "Tunga": {
            "province": "Eastern Visayas",
            "center": [
                11.248,
                124.757
            ]
        },
        "Villaba": {
            "province": "Eastern Visayas",
            "center": [
                11.196,
                124.435
            ]
        },
        "Ampatuan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.789,
                124.377
            ]
        },
        "Buluan Lake": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.633,
                124.827
            ]
        },
        "Buluan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.722,
                124.794
            ]
        },
        "Cotabato City": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.2,
                124.238
            ]
        },
        "Datu Abdullah Sanki": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.804,
                124.521
            ]
        },
        "Datu Anggal Midtimbang": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.0,
                124.346
            ]
        },
        "Datu Paglas": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.725,
                124.902
            ]
        },
        "Datu Piang": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.022,
                124.462
            ]
        },
        "Datu Saudi-Ampatuan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.965,
                124.46
            ]
        },
        "Datu Unsay": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.887,
                124.389
            ]
        },
        "Gen. S. K. Pendatun": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.818,
                124.728
            ]
        },
        "Guindulungan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.935,
                124.349
            ]
        },
        "Mamasapano": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.938,
                124.511
            ]
        },
        "Mangudadatu": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.685,
                124.823
            ]
        },
        "Pagagawan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.097,
                124.756
            ]
        },
        "Dimasalang": {
            "province": "Bicol Region",
            "center": [
                12.157,
                123.84
            ]
        },
        "Mandaon": {
            "province": "Bicol Region",
            "center": [
                12.253,
                123.306
            ]
        },
        "Masbate City": {
            "province": "Bicol Region",
            "center": [
                12.338,
                123.565
            ]
        },
        "Milagros": {
            "province": "Bicol Region",
            "center": [
                12.201,
                123.495
            ]
        },
        "Mobo": {
            "province": "Bicol Region",
            "center": [
                12.278,
                123.665
            ]
        },
        "Monreal": {
            "province": "Bicol Region",
            "center": [
                12.63,
                123.638
            ]
        },
        "Palanas": {
            "province": "Bicol Region",
            "center": [
                12.099,
                123.891
            ]
        },
        "Pio V. Corpuz": {
            "province": "Bicol Region",
            "center": [
                11.851,
                124.034
            ]
        },
        "Placer": {
            "province": "Caraga",
            "center": [
                9.637,
                125.566
            ]
        },
        "San Jacinto": {
            "province": "Ilocos Region",
            "center": [
                16.086,
                120.454
            ]
        },
        "Uson": {
            "province": "Bicol Region",
            "center": [
                12.185,
                123.751
            ]
        },
        "Kalookan City": {
            "province": "Metropolitan Manila",
            "center": [
                14.724,
                121.033
            ]
        },
        "Las Pi\u00b1as": {
            "province": "Metropolitan Manila",
            "center": [
                14.443,
                120.994
            ]
        },
        "Makati City": {
            "province": "Metropolitan Manila",
            "center": [
                14.549,
                121.034
            ]
        },
        "Malabon": {
            "province": "Metropolitan Manila",
            "center": [
                14.672,
                120.958
            ]
        },
        "Mandaluyong": {
            "province": "Metropolitan Manila",
            "center": [
                14.584,
                121.039
            ]
        },
        "Manila": {
            "province": "Metropolitan Manila",
            "center": [
                14.6,
                120.985
            ]
        },
        "Marikina": {
            "province": "Metropolitan Manila",
            "center": [
                14.647,
                121.103
            ]
        },
        "Muntinlupa": {
            "province": "Metropolitan Manila",
            "center": [
                14.402,
                121.033
            ]
        },
        "Navotas": {
            "province": "Metropolitan Manila",
            "center": [
                14.663,
                120.944
            ]
        },
        "Para\u00b1aque": {
            "province": "Metropolitan Manila",
            "center": [
                14.484,
                121.015
            ]
        },
        "Pasay City": {
            "province": "Metropolitan Manila",
            "center": [
                14.531,
                121.004
            ]
        },
        "Pasig City": {
            "province": "Metropolitan Manila",
            "center": [
                14.583,
                121.084
            ]
        },
        "Pateros": {
            "province": "Metropolitan Manila",
            "center": [
                14.547,
                121.069
            ]
        },
        "Quezon City": {
            "province": "Metropolitan Manila",
            "center": [
                14.674,
                121.057
            ]
        },
        "Taguig": {
            "province": "Metropolitan Manila",
            "center": [
                14.515,
                121.066
            ]
        },
        "Valenzuela": {
            "province": "Metropolitan Manila",
            "center": [
                14.704,
                120.982
            ]
        },
        "Aloran": {
            "province": "Northern Mindanao",
            "center": [
                8.392,
                123.764
            ]
        },
        "Baliangao": {
            "province": "Northern Mindanao",
            "center": [
                8.615,
                123.617
            ]
        },
        "Bonifacio": {
            "province": "Northern Mindanao",
            "center": [
                8.086,
                123.601
            ]
        },
        "Calamba": {
            "province": "Northern Mindanao",
            "center": [
                8.526,
                123.646
            ]
        },
        "Don Victoriano Chiongbian": {
            "province": "Northern Mindanao",
            "center": [
                8.264,
                123.607
            ]
        },
        "Jimenez": {
            "province": "Northern Mindanao",
            "center": [
                8.322,
                123.754
            ]
        },
        "Lopez Jaena": {
            "province": "Northern Mindanao",
            "center": [
                8.523,
                123.721
            ]
        },
        "Oroquieta City": {
            "province": "Northern Mindanao",
            "center": [
                8.443,
                123.713
            ]
        },
        "Ozamis City": {
            "province": "Northern Mindanao",
            "center": [
                8.15,
                123.771
            ]
        },
        "Panaon": {
            "province": "Northern Mindanao",
            "center": [
                8.353,
                123.77
            ]
        },
        "Sapang Dalaga": {
            "province": "Northern Mindanao",
            "center": [
                8.531,
                123.579
            ]
        },
        "Sinacaban": {
            "province": "Northern Mindanao",
            "center": [
                8.291,
                123.766
            ]
        },
        "Tangub City": {
            "province": "Northern Mindanao",
            "center": [
                8.09,
                123.691
            ]
        },
        "Alubijid": {
            "province": "Northern Mindanao",
            "center": [
                8.512,
                124.437
            ]
        },
        "Balingasag": {
            "province": "Northern Mindanao",
            "center": [
                8.736,
                124.822
            ]
        },
        "Balingoan": {
            "province": "Northern Mindanao",
            "center": [
                8.939,
                124.865
            ]
        },
        "Binuangan": {
            "province": "Northern Mindanao",
            "center": [
                8.92,
                124.801
            ]
        },
        "Cagayan de Oro City": {
            "province": "Northern Mindanao",
            "center": [
                8.409,
                124.624
            ]
        },
        "El Salvador City": {
            "province": "Northern Mindanao",
            "center": [
                8.486,
                124.48
            ]
        },
        "Gingoog City": {
            "province": "Northern Mindanao",
            "center": [
                8.776,
                125.09
            ]
        },
        "Gitagum": {
            "province": "Northern Mindanao",
            "center": [
                8.557,
                124.4
            ]
        },
        "Initao": {
            "province": "Northern Mindanao",
            "center": [
                8.49,
                124.337
            ]
        },
        "Jasaan": {
            "province": "Northern Mindanao",
            "center": [
                8.651,
                124.778
            ]
        },
        "Kinoguitan": {
            "province": "Northern Mindanao",
            "center": [
                8.964,
                124.821
            ]
        },
        "Lagonglong": {
            "province": "Northern Mindanao",
            "center": [
                8.812,
                124.822
            ]
        },
        "Laguindingan": {
            "province": "Northern Mindanao",
            "center": [
                8.588,
                124.441
            ]
        },
        "Lugait": {
            "province": "Northern Mindanao",
            "center": [
                8.35,
                124.275
            ]
        },
        "Manticao": {
            "province": "Northern Mindanao",
            "center": [
                8.374,
                124.349
            ]
        },
        "Medina": {
            "province": "Northern Mindanao",
            "center": [
                8.887,
                124.966
            ]
        },
        "Naawan": {
            "province": "Northern Mindanao",
            "center": [
                8.431,
                124.345
            ]
        },
        "Opol": {
            "province": "Northern Mindanao",
            "center": [
                8.429,
                124.503
            ]
        },
        "Salay": {
            "province": "Northern Mindanao",
            "center": [
                8.871,
                124.821
            ]
        },
        "Sugbongcogon": {
            "province": "Northern Mindanao",
            "center": [
                8.939,
                124.807
            ]
        },
        "Talisayan": {
            "province": "Northern Mindanao",
            "center": [
                8.949,
                124.909
            ]
        },
        "Villanueva": {
            "province": "Northern Mindanao",
            "center": [
                8.574,
                124.797
            ]
        },
        "Barlig": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.08,
                121.144
            ]
        },
        "Bauko": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.932,
                120.883
            ]
        },
        "Besao": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.115,
                120.837
            ]
        },
        "Bontoc": {
            "province": "Eastern Visayas",
            "center": [
                10.371,
                124.928
            ]
        },
        "Natonin": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.122,
                121.293
            ]
        },
        "Paracelis": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.195,
                121.459
            ]
        },
        "Sabangan": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.952,
                120.936
            ]
        },
        "Sadanga": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.19,
                121.025
            ]
        },
        "Sagada": {
            "province": "Cordillera Administrative Region",
            "center": [
                17.102,
                120.905
            ]
        },
        "Tadian": {
            "province": "Cordillera Administrative Region",
            "center": [
                16.971,
                120.821
            ]
        },
        "Bacolod City": {
            "province": "Western Visayas",
            "center": [
                10.652,
                122.989
            ]
        },
        "Bago City": {
            "province": "Western Visayas",
            "center": [
                10.51,
                122.966
            ]
        },
        "Binalbagan": {
            "province": "Western Visayas",
            "center": [
                10.132,
                122.996
            ]
        },
        "Cadiz City": {
            "province": "Western Visayas",
            "center": [
                10.852,
                123.253
            ]
        },
        "Calatrava": {
            "province": "MIMAROPA",
            "center": [
                12.611,
                122.073
            ]
        },
        "Candoni": {
            "province": "Western Visayas",
            "center": [
                9.763,
                122.628
            ]
        },
        "Cauayan": {
            "province": "Western Visayas",
            "center": [
                9.909,
                122.557
            ]
        },
        "Enrique B. Magalona": {
            "province": "Western Visayas",
            "center": [
                10.843,
                123.052
            ]
        },
        "Escalante City": {
            "province": "Western Visayas",
            "center": [
                10.803,
                123.478
            ]
        },
        "Himamaylan City": {
            "province": "Western Visayas",
            "center": [
                10.057,
                122.927
            ]
        },
        "Hinigaran": {
            "province": "Western Visayas",
            "center": [
                10.269,
                122.907
            ]
        },
        "Hinoba-An": {
            "province": "Western Visayas",
            "center": [
                9.577,
                122.585
            ]
        },
        "Ilog": {
            "province": "Western Visayas",
            "center": [
                9.837,
                122.729
            ]
        },
        "Isabela": {
            "province": "Western Visayas",
            "center": [
                10.207,
                123.038
            ]
        },
        "Kabankalan City": {
            "province": "Western Visayas",
            "center": [
                9.85,
                122.828
            ]
        },
        "La Carlota City": {
            "province": "Western Visayas",
            "center": [
                10.416,
                122.987
            ]
        },
        "La Castellana": {
            "province": "Western Visayas",
            "center": [
                10.342,
                123.066
            ]
        },
        "Manapla": {
            "province": "Western Visayas",
            "center": [
                10.914,
                123.141
            ]
        },
        "Moises Padilla": {
            "province": "Western Visayas",
            "center": [
                10.271,
                123.112
            ]
        },
        "Murcia": {
            "province": "Western Visayas",
            "center": [
                10.558,
                123.104
            ]
        },
        "Pulupandan": {
            "province": "Western Visayas",
            "center": [
                10.52,
                122.818
            ]
        },
        "Sagay City": {
            "province": "Western Visayas",
            "center": [
                10.85,
                123.394
            ]
        },
        "Salvador Benedicto": {
            "province": "Western Visayas",
            "center": [
                10.583,
                123.259
            ]
        },
        "San Carlos City": {
            "province": "Ilocos Region",
            "center": [
                15.91,
                120.334
            ]
        },
        "Silay City": {
            "province": "Western Visayas",
            "center": [
                10.772,
                123.073
            ]
        },
        "Sipalay City": {
            "province": "Western Visayas",
            "center": [
                9.75,
                122.476
            ]
        },
        "Toboso": {
            "province": "Western Visayas",
            "center": [
                10.726,
                123.447
            ]
        },
        "Valladolid": {
            "province": "Western Visayas",
            "center": [
                10.463,
                122.853
            ]
        },
        "Victorias City": {
            "province": "Western Visayas",
            "center": [
                10.851,
                123.113
            ]
        },
        "Amlan": {
            "province": "Central Visayas",
            "center": [
                9.425,
                123.174
            ]
        },
        "Ayungon": {
            "province": "Central Visayas",
            "center": [
                9.875,
                123.071
            ]
        },
        "Bacong": {
            "province": "Central Visayas",
            "center": [
                9.245,
                123.272
            ]
        },
        "Bais City": {
            "province": "Central Visayas",
            "center": [
                9.599,
                123.024
            ]
        },
        "Basay": {
            "province": "Central Visayas",
            "center": [
                9.448,
                122.677
            ]
        },
        "Bayawan City": {
            "province": "Central Visayas",
            "center": [
                9.503,
                122.816
            ]
        },
        "Bindoy": {
            "province": "Central Visayas",
            "center": [
                9.794,
                123.056
            ]
        },
        "Canlaon City": {
            "province": "Central Visayas",
            "center": [
                10.35,
                123.206
            ]
        },
        "Dauin": {
            "province": "Central Visayas",
            "center": [
                9.207,
                123.221
            ]
        },
        "Dumaguete City": {
            "province": "Central Visayas",
            "center": [
                9.302,
                123.287
            ]
        },
        "Guihulngan City": {
            "province": "Central Visayas",
            "center": [
                10.18,
                123.217
            ]
        },
        "Jimalalud": {
            "province": "Central Visayas",
            "center": [
                10.014,
                123.132
            ]
        },
        "La Libertad": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.463,
                123.524
            ]
        },
        "Mabinay": {
            "province": "Central Visayas",
            "center": [
                9.717,
                122.943
            ]
        },
        "Manjuyod": {
            "province": "Central Visayas",
            "center": [
                9.693,
                123.096
            ]
        },
        "Siaton": {
            "province": "Central Visayas",
            "center": [
                9.124,
                123.034
            ]
        },
        "Sibulan": {
            "province": "Central Visayas",
            "center": [
                9.35,
                123.158
            ]
        },
        "Tanjay City": {
            "province": "Central Visayas",
            "center": [
                9.506,
                123.039
            ]
        },
        "Tayasan": {
            "province": "Central Visayas",
            "center": [
                9.959,
                123.086
            ]
        },
        "Vallehermoso": {
            "province": "Central Visayas",
            "center": [
                10.341,
                123.289
            ]
        },
        "Zamboanguita": {
            "province": "Central Visayas",
            "center": [
                9.148,
                123.165
            ]
        },
        "Alamada": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.514,
                124.56
            ]
        },
        "Aleosan": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.178,
                124.618
            ]
        },
        "Antipas": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.289,
                125.007
            ]
        },
        "Arakan": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.379,
                125.19
            ]
        },
        "Banisilan": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.505,
                124.723
            ]
        },
        "Kabacan": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.12,
                124.832
            ]
        },
        "Kidapawan City": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.038,
                125.079
            ]
        },
        "Libungan": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.311,
                124.538
            ]
        },
        "M'Lang": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.95,
                124.912
            ]
        },
        "Magpet": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.122,
                125.179
            ]
        },
        "Makilala": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.932,
                125.124
            ]
        },
        "Matalam": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.169,
                124.924
            ]
        },
        "Midsayap": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.136,
                124.517
            ]
        },
        "Pigkawayan": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.274,
                124.422
            ]
        },
        "Pikit": {
            "province": "SOCCSKSARGEN",
            "center": [
                7.057,
                124.641
            ]
        },
        "Tulunan": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.813,
                124.965
            ]
        },
        "Allen": {
            "province": "Eastern Visayas",
            "center": [
                12.505,
                124.314
            ]
        },
        "Biri": {
            "province": "Eastern Visayas",
            "center": [
                12.66,
                124.389
            ]
        },
        "Bobon": {
            "province": "Eastern Visayas",
            "center": [
                12.411,
                124.536
            ]
        },
        "Capul": {
            "province": "Eastern Visayas",
            "center": [
                12.428,
                124.162
            ]
        },
        "Catubig": {
            "province": "Eastern Visayas",
            "center": [
                12.4,
                125.077
            ]
        },
        "Gamay": {
            "province": "Eastern Visayas",
            "center": [
                12.39,
                125.258
            ]
        },
        "Laoang": {
            "province": "Eastern Visayas",
            "center": [
                12.543,
                125.029
            ]
        },
        "Lapinig": {
            "province": "Eastern Visayas",
            "center": [
                12.311,
                125.283
            ]
        },
        "Las Navas": {
            "province": "Eastern Visayas",
            "center": [
                12.302,
                125.027
            ]
        },
        "Lavezares": {
            "province": "Eastern Visayas",
            "center": [
                12.539,
                124.36
            ]
        },
        "Lope de Vega": {
            "province": "Eastern Visayas",
            "center": [
                12.321,
                124.659
            ]
        },
        "Mapanas": {
            "province": "Eastern Visayas",
            "center": [
                12.451,
                125.208
            ]
        },
        "Mondragon": {
            "province": "Eastern Visayas",
            "center": [
                12.411,
                124.776
            ]
        },
        "Palapag": {
            "province": "Eastern Visayas",
            "center": [
                12.519,
                125.137
            ]
        },
        "Pambujan": {
            "province": "Eastern Visayas",
            "center": [
                12.459,
                124.939
            ]
        },
        "San Antonio": {
            "province": "Central Luzon",
            "center": [
                14.875,
                120.11
            ]
        },
        "San Roque": {
            "province": "Eastern Visayas",
            "center": [
                12.462,
                124.877
            ]
        },
        "Silvino Lobos": {
            "province": "Eastern Visayas",
            "center": [
                12.281,
                124.865
            ]
        },
        "Aliaga": {
            "province": "Central Luzon",
            "center": [
                15.507,
                120.859
            ]
        },
        "Bongabon": {
            "province": "Central Luzon",
            "center": [
                15.651,
                121.231
            ]
        },
        "Cabanatuan City": {
            "province": "Central Luzon",
            "center": [
                15.492,
                120.99
            ]
        },
        "Cabiao": {
            "province": "Central Luzon",
            "center": [
                15.234,
                120.85
            ]
        },
        "Carranglan": {
            "province": "Central Luzon",
            "center": [
                16.003,
                121.041
            ]
        },
        "Cuyapo": {
            "province": "Central Luzon",
            "center": [
                15.793,
                120.7
            ]
        },
        "Gabaldon": {
            "province": "Central Luzon",
            "center": [
                15.519,
                121.293
            ]
        },
        "Gapan City": {
            "province": "Central Luzon",
            "center": [
                15.283,
                121.005
            ]
        },
        "General Mamerto Natividad": {
            "province": "Central Luzon",
            "center": [
                15.588,
                121.046
            ]
        },
        "General Tinio": {
            "province": "Central Luzon",
            "center": [
                15.34,
                121.218
            ]
        },
        "Guimba": {
            "province": "Central Luzon",
            "center": [
                15.667,
                120.756
            ]
        },
        "Jaen": {
            "province": "Central Luzon",
            "center": [
                15.379,
                120.879
            ]
        },
        "Laur": {
            "province": "Central Luzon",
            "center": [
                15.523,
                121.179
            ]
        },
        "Licab": {
            "province": "Central Luzon",
            "center": [
                15.551,
                120.76
            ]
        },
        "Llanera": {
            "province": "Central Luzon",
            "center": [
                15.662,
                120.994
            ]
        },
        "Lupao": {
            "province": "Central Luzon",
            "center": [
                15.847,
                120.913
            ]
        },
        "Mu\u00b1oz City": {
            "province": "Central Luzon",
            "center": [
                15.729,
                120.894
            ]
        },
        "Nampicuan": {
            "province": "Central Luzon",
            "center": [
                15.72,
                120.661
            ]
        },
        "Palayan City": {
            "province": "Central Luzon",
            "center": [
                15.522,
                121.105
            ]
        },
        "Pantabangan": {
            "province": "Central Luzon",
            "center": [
                15.809,
                121.159
            ]
        },
        "Pe\u00b1aranda": {
            "province": "Central Luzon",
            "center": [
                15.355,
                121.025
            ]
        },
        "San Jose City": {
            "province": "Central Luzon",
            "center": [
                15.785,
                120.998
            ]
        },
        "San Leonardo": {
            "province": "Central Luzon",
            "center": [
                15.36,
                120.947
            ]
        },
        "Santa Rosa": {
            "province": "Central Luzon",
            "center": [
                15.431,
                120.988
            ]
        },
        "Talavera": {
            "province": "Central Luzon",
            "center": [
                15.614,
                120.935
            ]
        },
        "Talugtug": {
            "province": "Central Luzon",
            "center": [
                15.764,
                120.809
            ]
        },
        "Zaragoza": {
            "province": "Central Luzon",
            "center": [
                15.453,
                120.788
            ]
        },
        "Alfonso Castaneda": {
            "province": "Cagayan Valley",
            "center": [
                15.911,
                121.325
            ]
        },
        "Ambaguio": {
            "province": "Cagayan Valley",
            "center": [
                16.551,
                121.048
            ]
        },
        "Aritao": {
            "province": "Cagayan Valley",
            "center": [
                16.243,
                121.03
            ]
        },
        "Bagabag": {
            "province": "Cagayan Valley",
            "center": [
                16.586,
                121.272
            ]
        },
        "Bambang": {
            "province": "Cagayan Valley",
            "center": [
                16.391,
                121.116
            ]
        },
        "Bayombong": {
            "province": "Cagayan Valley",
            "center": [
                16.481,
                121.141
            ]
        },
        "Diadi": {
            "province": "Cagayan Valley",
            "center": [
                16.626,
                121.355
            ]
        },
        "Dupax Del Norte": {
            "province": "Cagayan Valley",
            "center": [
                16.206,
                121.236
            ]
        },
        "Dupax Del Sur": {
            "province": "Cagayan Valley",
            "center": [
                16.115,
                121.186
            ]
        },
        "Kasibu": {
            "province": "Cagayan Valley",
            "center": [
                16.358,
                121.329
            ]
        },
        "Kayapa": {
            "province": "Cagayan Valley",
            "center": [
                16.409,
                120.918
            ]
        },
        "Solano": {
            "province": "Cagayan Valley",
            "center": [
                16.535,
                121.19
            ]
        },
        "Villaverde": {
            "province": "Cagayan Valley",
            "center": [
                16.601,
                121.162
            ]
        },
        "Abra de Ilog": {
            "province": "MIMAROPA",
            "center": [
                13.401,
                120.743
            ]
        },
        "Calintaan": {
            "province": "MIMAROPA",
            "center": [
                12.592,
                121.083
            ]
        },
        "Looc": {
            "province": "MIMAROPA",
            "center": [
                12.275,
                121.999
            ]
        },
        "Lubang": {
            "province": "MIMAROPA",
            "center": [
                13.812,
                120.137
            ]
        },
        "Mamburao": {
            "province": "MIMAROPA",
            "center": [
                13.254,
                120.661
            ]
        },
        "Paluan": {
            "province": "MIMAROPA",
            "center": [
                13.42,
                120.481
            ]
        },
        "Sablayan": {
            "province": "MIMAROPA",
            "center": [
                12.866,
                121.035
            ]
        },
        "Baco": {
            "province": "MIMAROPA",
            "center": [
                13.29,
                121.067
            ]
        },
        "Bansud": {
            "province": "MIMAROPA",
            "center": [
                12.832,
                121.368
            ]
        },
        "Bongabong": {
            "province": "MIMAROPA",
            "center": [
                12.716,
                121.386
            ]
        },
        "Bulalacao": {
            "province": "MIMAROPA",
            "center": [
                12.369,
                121.318
            ]
        },
        "Calapan City": {
            "province": "MIMAROPA",
            "center": [
                13.333,
                121.178
            ]
        },
        "Gloria": {
            "province": "MIMAROPA",
            "center": [
                12.922,
                121.375
            ]
        },
        "Mansalay": {
            "province": "MIMAROPA",
            "center": [
                12.548,
                121.348
            ]
        },
        "Naujan Lake": {
            "province": "MIMAROPA",
            "center": [
                13.171,
                121.348
            ]
        },
        "Naujan": {
            "province": "MIMAROPA",
            "center": [
                13.225,
                121.221
            ]
        },
        "Pinamalayan": {
            "province": "MIMAROPA",
            "center": [
                13.023,
                121.403
            ]
        },
        "Pola": {
            "province": "MIMAROPA",
            "center": [
                13.14,
                121.445
            ]
        },
        "Puerto Galera": {
            "province": "MIMAROPA",
            "center": [
                13.393,
                120.896
            ]
        },
        "San Teodoro": {
            "province": "MIMAROPA",
            "center": [
                13.326,
                120.972
            ]
        },
        "Socorro": {
            "province": "Caraga",
            "center": [
                9.656,
                125.943
            ]
        },
        "Aborlan": {
            "province": "MIMAROPA",
            "center": [
                9.507,
                118.462
            ]
        },
        "Agutaya": {
            "province": "MIMAROPA",
            "center": [
                11.26,
                120.915
            ]
        },
        "Araceli": {
            "province": "MIMAROPA",
            "center": [
                10.578,
                119.912
            ]
        },
        "Balabac": {
            "province": "MIMAROPA",
            "center": [
                8.067,
                117.108
            ]
        },
        "Bataraza": {
            "province": "MIMAROPA",
            "center": [
                8.575,
                117.419
            ]
        },
        "Brooke's Point": {
            "province": "MIMAROPA",
            "center": [
                8.865,
                117.798
            ]
        },
        "Busuanga": {
            "province": "MIMAROPA",
            "center": [
                12.177,
                119.954
            ]
        },
        "Cagayancillo": {
            "province": "MIMAROPA",
            "center": [
                9.587,
                121.183
            ]
        },
        "Coron": {
            "province": "MIMAROPA",
            "center": [
                12.049,
                120.171
            ]
        },
        "Culion": {
            "province": "MIMAROPA",
            "center": [
                11.861,
                119.967
            ]
        },
        "Cuyo": {
            "province": "MIMAROPA",
            "center": [
                10.928,
                120.909
            ]
        },
        "Dumaran": {
            "province": "MIMAROPA",
            "center": [
                10.502,
                119.672
            ]
        },
        "El Nido": {
            "province": "MIMAROPA",
            "center": [
                11.205,
                119.456
            ]
        },
        "Linapacan": {
            "province": "MIMAROPA",
            "center": [
                11.432,
                119.817
            ]
        },
        "Narra": {
            "province": "MIMAROPA",
            "center": [
                9.287,
                118.303
            ]
        },
        "Puerto Princesa City": {
            "province": "MIMAROPA",
            "center": [
                9.907,
                118.769
            ]
        },
        "Sofronio Espanola": {
            "province": "MIMAROPA",
            "center": [
                9.062,
                118.007
            ]
        },
        "Taytay": {
            "province": "CALABARZON",
            "center": [
                14.561,
                121.132
            ]
        },
        "Angeles City": {
            "province": "Central Luzon",
            "center": [
                15.146,
                120.586
            ]
        },
        "Apalit": {
            "province": "Central Luzon",
            "center": [
                14.948,
                120.804
            ]
        },
        "Arayat": {
            "province": "Central Luzon",
            "center": [
                15.176,
                120.779
            ]
        },
        "Bacolor": {
            "province": "Central Luzon",
            "center": [
                15.032,
                120.656
            ]
        },
        "Candaba": {
            "province": "Central Luzon",
            "center": [
                15.102,
                120.905
            ]
        },
        "Floridablanca": {
            "province": "Central Luzon",
            "center": [
                14.988,
                120.487
            ]
        },
        "Guagua": {
            "province": "Central Luzon",
            "center": [
                14.968,
                120.631
            ]
        },
        "Lubao": {
            "province": "Central Luzon",
            "center": [
                14.889,
                120.574
            ]
        },
        "Mabalacat": {
            "province": "Central Luzon",
            "center": [
                15.188,
                120.516
            ]
        },
        "Macabebe": {
            "province": "Central Luzon",
            "center": [
                14.898,
                120.714
            ]
        },
        "Magalang": {
            "province": "Central Luzon",
            "center": [
                15.231,
                120.693
            ]
        },
        "Masantol": {
            "province": "Central Luzon",
            "center": [
                14.834,
                120.681
            ]
        },
        "Mexico": {
            "province": "Central Luzon",
            "center": [
                15.104,
                120.716
            ]
        },
        "Minalin": {
            "province": "Central Luzon",
            "center": [
                14.953,
                120.72
            ]
        },
        "Porac": {
            "province": "Central Luzon",
            "center": [
                15.084,
                120.516
            ]
        },
        "San Simon": {
            "province": "Central Luzon",
            "center": [
                14.993,
                120.811
            ]
        },
        "Santa Rita": {
            "province": "Eastern Visayas",
            "center": [
                11.444,
                125.005
            ]
        },
        "Sasmuan": {
            "province": "Central Luzon",
            "center": [
                14.88,
                120.641
            ]
        },
        "Agno": {
            "province": "Ilocos Region",
            "center": [
                16.113,
                119.808
            ]
        },
        "Aguilar": {
            "province": "Ilocos Region",
            "center": [
                15.829,
                120.227
            ]
        },
        "Alaminos City": {
            "province": "Ilocos Region",
            "center": [
                16.151,
                119.971
            ]
        },
        "Asingan": {
            "province": "Ilocos Region",
            "center": [
                16.012,
                120.66
            ]
        },
        "Balungao": {
            "province": "Ilocos Region",
            "center": [
                15.898,
                120.693
            ]
        },
        "Bani": {
            "province": "Ilocos Region",
            "center": [
                16.209,
                119.855
            ]
        },
        "Basista": {
            "province": "Ilocos Region",
            "center": [
                15.866,
                120.408
            ]
        },
        "Bautista": {
            "province": "Ilocos Region",
            "center": [
                15.805,
                120.524
            ]
        },
        "Bayambang": {
            "province": "Ilocos Region",
            "center": [
                15.796,
                120.455
            ]
        },
        "Binalonan": {
            "province": "Ilocos Region",
            "center": [
                16.072,
                120.599
            ]
        },
        "Binmaley": {
            "province": "Ilocos Region",
            "center": [
                16.004,
                120.293
            ]
        },
        "Bolinao": {
            "province": "Ilocos Region",
            "center": [
                16.323,
                119.868
            ]
        },
        "Bugallon": {
            "province": "Ilocos Region",
            "center": [
                15.91,
                120.195
            ]
        },
        "Calasiao": {
            "province": "Ilocos Region",
            "center": [
                15.994,
                120.363
            ]
        },
        "Dagupan City": {
            "province": "Ilocos Region",
            "center": [
                16.056,
                120.347
            ]
        },
        "Dasol": {
            "province": "Ilocos Region",
            "center": [
                15.951,
                119.902
            ]
        },
        "Infanta": {
            "province": "CALABARZON",
            "center": [
                14.717,
                121.651
            ]
        },
        "Labrador": {
            "province": "Ilocos Region",
            "center": [
                15.992,
                120.135
            ]
        },
        "Laoac": {
            "province": "Ilocos Region",
            "center": [
                16.046,
                120.541
            ]
        },
        "Lingayen": {
            "province": "Ilocos Region",
            "center": [
                16.002,
                120.227
            ]
        },
        "Malasiqui": {
            "province": "Ilocos Region",
            "center": [
                15.911,
                120.462
            ]
        },
        "Manaoag": {
            "province": "Ilocos Region",
            "center": [
                16.047,
                120.496
            ]
        },
        "Mangaldan": {
            "province": "Ilocos Region",
            "center": [
                16.062,
                120.403
            ]
        },
        "Mangatarem": {
            "province": "Ilocos Region",
            "center": [
                15.734,
                120.285
            ]
        },
        "Mapandan": {
            "province": "Ilocos Region",
            "center": [
                16.024,
                120.461
            ]
        },
        "Natividad": {
            "province": "Ilocos Region",
            "center": [
                16.053,
                120.828
            ]
        },
        "Pozzorubio": {
            "province": "Ilocos Region",
            "center": [
                16.12,
                120.52
            ]
        },
        "Rosales": {
            "province": "Ilocos Region",
            "center": [
                15.875,
                120.634
            ]
        },
        "San Fabian": {
            "province": "Ilocos Region",
            "center": [
                16.147,
                120.433
            ]
        },
        "Sison": {
            "province": "Caraga",
            "center": [
                9.673,
                125.49
            ]
        },
        "Sual": {
            "province": "Ilocos Region",
            "center": [
                16.082,
                120.055
            ]
        },
        "Tayug": {
            "province": "Ilocos Region",
            "center": [
                16.019,
                120.743
            ]
        },
        "Umingan": {
            "province": "Ilocos Region",
            "center": [
                15.899,
                120.82
            ]
        },
        "Urbiztondo": {
            "province": "Ilocos Region",
            "center": [
                15.824,
                120.364
            ]
        },
        "Urdaneta City": {
            "province": "Ilocos Region",
            "center": [
                15.978,
                120.559
            ]
        },
        "Villasis": {
            "province": "Ilocos Region",
            "center": [
                15.919,
                120.572
            ]
        },
        "Agdangan": {
            "province": "CALABARZON",
            "center": [
                13.882,
                121.923
            ]
        },
        "Alabat": {
            "province": "CALABARZON",
            "center": [
                14.122,
                122.025
            ]
        },
        "Atimonan": {
            "province": "CALABARZON",
            "center": [
                13.983,
                121.886
            ]
        },
        "Burdeos": {
            "province": "CALABARZON",
            "center": [
                14.913,
                121.99
            ]
        },
        "Calauag": {
            "province": "CALABARZON",
            "center": [
                14.05,
                122.282
            ]
        },
        "Candelaria": {
            "province": "Central Luzon",
            "center": [
                15.638,
                120.083
            ]
        },
        "Catanauan": {
            "province": "CALABARZON",
            "center": [
                13.642,
                122.319
            ]
        },
        "General Luna": {
            "province": "Caraga",
            "center": [
                9.781,
                126.138
            ]
        },
        "General Nakar": {
            "province": "CALABARZON",
            "center": [
                14.89,
                121.466
            ]
        },
        "Guinayangan": {
            "province": "CALABARZON",
            "center": [
                13.907,
                122.428
            ]
        },
        "Gumaca": {
            "province": "CALABARZON",
            "center": [
                13.876,
                122.121
            ]
        },
        "Hinunangan": {
            "province": "Eastern Visayas",
            "center": [
                10.397,
                125.146
            ]
        },
        "Jomalig": {
            "province": "CALABARZON",
            "center": [
                14.701,
                122.376
            ]
        },
        "Lopez": {
            "province": "CALABARZON",
            "center": [
                13.833,
                122.299
            ]
        },
        "Lucban": {
            "province": "CALABARZON",
            "center": [
                14.113,
                121.568
            ]
        },
        "Lucena City": {
            "province": "CALABARZON",
            "center": [
                13.938,
                121.615
            ]
        },
        "Macalelon": {
            "province": "CALABARZON",
            "center": [
                13.765,
                122.179
            ]
        },
        "Mauban": {
            "province": "CALABARZON",
            "center": [
                14.233,
                121.703
            ]
        },
        "Mulanay": {
            "province": "CALABARZON",
            "center": [
                13.526,
                122.458
            ]
        },
        "Padre Burgos": {
            "province": "Eastern Visayas",
            "center": [
                10.079,
                125.0
            ]
        },
        "Pagbilao": {
            "province": "CALABARZON",
            "center": [
                13.981,
                121.729
            ]
        },
        "Panukulan": {
            "province": "CALABARZON",
            "center": [
                14.972,
                121.887
            ]
        },
        "Patnanungan": {
            "province": "CALABARZON",
            "center": [
                14.796,
                122.186
            ]
        },
        "Perez": {
            "province": "CALABARZON",
            "center": [
                14.179,
                121.958
            ]
        },
        "Pitogo": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.452,
                123.337
            ]
        },
        "Polillo": {
            "province": "CALABARZON",
            "center": [
                14.742,
                121.952
            ]
        },
        "Real": {
            "province": "CALABARZON",
            "center": [
                14.554,
                121.562
            ]
        },
        "Sampaloc": {
            "province": "CALABARZON",
            "center": [
                14.184,
                121.627
            ]
        },
        "San Narciso": {
            "province": "Central Luzon",
            "center": [
                15.012,
                120.112
            ]
        },
        "Sariaya": {
            "province": "CALABARZON",
            "center": [
                13.927,
                121.504
            ]
        },
        "Tagkawayan": {
            "province": "CALABARZON",
            "center": [
                14.026,
                122.539
            ]
        },
        "Tayabas City": {
            "province": "CALABARZON",
            "center": [
                14.041,
                121.612
            ]
        },
        "Tiaong": {
            "province": "CALABARZON",
            "center": [
                13.94,
                121.336
            ]
        },
        "Unisan": {
            "province": "CALABARZON",
            "center": [
                13.861,
                121.998
            ]
        },
        "Aglipay": {
            "province": "Cagayan Valley",
            "center": [
                16.434,
                121.62
            ]
        },
        "Cabarroguis": {
            "province": "Cagayan Valley",
            "center": [
                16.437,
                121.506
            ]
        },
        "Diffun": {
            "province": "Cagayan Valley",
            "center": [
                16.552,
                121.461
            ]
        },
        "Maddela": {
            "province": "Cagayan Valley",
            "center": [
                16.36,
                121.798
            ]
        },
        "Nagtipunan": {
            "province": "Cagayan Valley",
            "center": [
                16.156,
                121.512
            ]
        },
        "Saguday": {
            "province": "Cagayan Valley",
            "center": [
                16.545,
                121.58
            ]
        },
        "Angono": {
            "province": "CALABARZON",
            "center": [
                14.544,
                121.165
            ]
        },
        "Antipolo City": {
            "province": "CALABARZON",
            "center": [
                14.666,
                121.259
            ]
        },
        "Binangonan": {
            "province": "CALABARZON",
            "center": [
                14.457,
                121.202
            ]
        },
        "Cainta": {
            "province": "CALABARZON",
            "center": [
                14.595,
                121.115
            ]
        },
        "Cardona": {
            "province": "CALABARZON",
            "center": [
                14.418,
                121.228
            ]
        },
        "Jala-Jala": {
            "province": "CALABARZON",
            "center": [
                14.344,
                121.34
            ]
        },
        "Pililla": {
            "province": "CALABARZON",
            "center": [
                14.455,
                121.345
            ]
        },
        "Rodriguez": {
            "province": "CALABARZON",
            "center": [
                14.787,
                121.25
            ]
        },
        "Tanay": {
            "province": "CALABARZON",
            "center": [
                14.589,
                121.361
            ]
        },
        "Teresa": {
            "province": "CALABARZON",
            "center": [
                14.567,
                121.219
            ]
        },
        "Banton": {
            "province": "MIMAROPA",
            "center": [
                12.938,
                122.069
            ]
        },
        "Cajidiocan": {
            "province": "MIMAROPA",
            "center": [
                12.416,
                122.637
            ]
        },
        "Corcuera": {
            "province": "MIMAROPA",
            "center": [
                12.806,
                122.055
            ]
        },
        "Ferrol": {
            "province": "MIMAROPA",
            "center": [
                12.326,
                121.949
            ]
        },
        "Magdiwang": {
            "province": "MIMAROPA",
            "center": [
                12.466,
                122.525
            ]
        },
        "Odiongan": {
            "province": "MIMAROPA",
            "center": [
                12.399,
                122.018
            ]
        },
        "Romblon": {
            "province": "MIMAROPA",
            "center": [
                12.549,
                122.285
            ]
        },
        "Almagro": {
            "province": "Eastern Visayas",
            "center": [
                11.928,
                124.311
            ]
        },
        "Basey": {
            "province": "Eastern Visayas",
            "center": [
                11.394,
                125.152
            ]
        },
        "Calbayog City": {
            "province": "Eastern Visayas",
            "center": [
                12.193,
                124.589
            ]
        },
        "Calbiga": {
            "province": "Eastern Visayas",
            "center": [
                11.62,
                125.087
            ]
        },
        "Catbalogan City": {
            "province": "Eastern Visayas",
            "center": [
                11.838,
                124.885
            ]
        },
        "Daram": {
            "province": "Eastern Visayas",
            "center": [
                11.63,
                124.779
            ]
        },
        "Gandara": {
            "province": "Eastern Visayas",
            "center": [
                12.071,
                124.823
            ]
        },
        "Hinabangan": {
            "province": "Eastern Visayas",
            "center": [
                11.723,
                125.179
            ]
        },
        "Jiabong": {
            "province": "Eastern Visayas",
            "center": [
                11.848,
                124.966
            ]
        },
        "Marabut": {
            "province": "Eastern Visayas",
            "center": [
                11.206,
                125.218
            ]
        },
        "Matuguinao": {
            "province": "Eastern Visayas",
            "center": [
                12.194,
                125.007
            ]
        },
        "Motiong": {
            "province": "Eastern Visayas",
            "center": [
                11.881,
                125.016
            ]
        },
        "Pagsanghan": {
            "province": "Eastern Visayas",
            "center": [
                11.965,
                124.755
            ]
        },
        "Paranas": {
            "province": "Eastern Visayas",
            "center": [
                11.873,
                125.131
            ]
        },
        "Pinabacdao": {
            "province": "Eastern Visayas",
            "center": [
                11.558,
                125.08
            ]
        },
        "San Jorge": {
            "province": "Eastern Visayas",
            "center": [
                11.983,
                124.904
            ]
        },
        "San Jose de Buan": {
            "province": "Eastern Visayas",
            "center": [
                12.066,
                125.045
            ]
        },
        "San Sebastian": {
            "province": "Eastern Visayas",
            "center": [
                11.7,
                125.022
            ]
        },
        "Santa Margarita": {
            "province": "Eastern Visayas",
            "center": [
                12.062,
                124.715
            ]
        },
        "Santo Nino": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.442,
                124.675
            ]
        },
        "Tagapul-An": {
            "province": "Eastern Visayas",
            "center": [
                12.062,
                124.19
            ]
        },
        "Talalora": {
            "province": "Eastern Visayas",
            "center": [
                11.51,
                124.847
            ]
        },
        "Tarangnan": {
            "province": "Eastern Visayas",
            "center": [
                11.911,
                124.784
            ]
        },
        "Villareal": {
            "province": "Eastern Visayas",
            "center": [
                11.541,
                124.943
            ]
        },
        "Zumarraga": {
            "province": "Eastern Visayas",
            "center": [
                11.661,
                124.857
            ]
        },
        "Alabel": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.155,
                125.365
            ]
        },
        "Glan": {
            "province": "SOCCSKSARGEN",
            "center": [
                5.789,
                125.341
            ]
        },
        "Kiamba": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.0,
                124.709
            ]
        },
        "Maasim": {
            "province": "SOCCSKSARGEN",
            "center": [
                5.933,
                124.968
            ]
        },
        "Maitum": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.117,
                124.474
            ]
        },
        "Malapatan": {
            "province": "SOCCSKSARGEN",
            "center": [
                5.997,
                125.39
            ]
        },
        "Malungon": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.31,
                125.294
            ]
        },
        "Barira": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.458,
                124.322
            ]
        },
        "Buldon": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.472,
                124.407
            ]
        },
        "Datu Blah T. Sinsuat": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.926,
                124.03
            ]
        },
        "Datu Odin Sinsuat": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.091,
                124.246
            ]
        },
        "Kabuntalan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.109,
                124.37
            ]
        },
        "Matanog": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.461,
                124.251
            ]
        },
        "Northern Kabuntalan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.172,
                124.432
            ]
        },
        "Prieto Diaz": {
            "province": "Bicol Region",
            "center": [
                13.037,
                124.163
            ]
        },
        "Santa Magdalena": {
            "province": "Bicol Region",
            "center": [
                12.656,
                124.088
            ]
        },
        "Sorsogon City": {
            "province": "Bicol Region",
            "center": [
                13.017,
                123.995
            ]
        },
        "General Santos City": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.143,
                125.152
            ]
        },
        "Koronadal City": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.472,
                124.893
            ]
        },
        "Lake Sebu": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.215,
                124.573
            ]
        },
        "Norala": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.523,
                124.676
            ]
        },
        "Polomolok": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.24,
                125.071
            ]
        },
        "Surallah": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.317,
                124.724
            ]
        },
        "T'Boli": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.126,
                124.906
            ]
        },
        "Tampakan": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.462,
                125.055
            ]
        },
        "Tantangan": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.57,
                124.754
            ]
        },
        "Tupi": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.337,
                124.982
            ]
        },
        "Anahawan": {
            "province": "Eastern Visayas",
            "center": [
                10.299,
                125.215
            ]
        },
        "Hinundayan": {
            "province": "Eastern Visayas",
            "center": [
                10.344,
                125.229
            ]
        },
        "Libagon": {
            "province": "Eastern Visayas",
            "center": [
                10.332,
                125.068
            ]
        },
        "Limasawa": {
            "province": "Eastern Visayas",
            "center": [
                9.931,
                125.072
            ]
        },
        "Maasin City": {
            "province": "Eastern Visayas",
            "center": [
                10.184,
                124.853
            ]
        },
        "Macrohon": {
            "province": "Eastern Visayas",
            "center": [
                10.092,
                124.949
            ]
        },
        "Pintuyan": {
            "province": "Eastern Visayas",
            "center": [
                9.976,
                125.241
            ]
        },
        "Saint Bernard": {
            "province": "Eastern Visayas",
            "center": [
                10.306,
                125.121
            ]
        },
        "San Ricardo": {
            "province": "Eastern Visayas",
            "center": [
                9.989,
                125.259
            ]
        },
        "Silago": {
            "province": "Eastern Visayas",
            "center": [
                10.52,
                125.129
            ]
        },
        "Tomas Oppus": {
            "province": "Eastern Visayas",
            "center": [
                10.278,
                124.943
            ]
        },
        "Bagumbayan": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.471,
                124.519
            ]
        },
        "Columbio": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.63,
                125.054
            ]
        },
        "Isulan": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.607,
                124.438
            ]
        },
        "Kalamansig": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.511,
                124.16
            ]
        },
        "Lambayong": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.799,
                124.624
            ]
        },
        "Lebak": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.672,
                124.16
            ]
        },
        "Lutayan": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.583,
                124.877
            ]
        },
        "Palimbang": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.299,
                124.224
            ]
        },
        "President Quirino": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.716,
                124.744
            ]
        },
        "Sen. Ninoy Aquino": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.411,
                124.355
            ]
        },
        "Tacurong City": {
            "province": "SOCCSKSARGEN",
            "center": [
                6.687,
                124.68
            ]
        },
        "Hadji Panglima Tahil": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.219,
                120.926
            ]
        },
        "Indanan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.993,
                120.961
            ]
        },
        "Jolo": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.05,
                121.012
            ]
        },
        "Kalingalan Caluang": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.912,
                121.28
            ]
        },
        "Lugus": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.686,
                120.838
            ]
        },
        "Luuk": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.977,
                121.358
            ]
        },
        "Maimbung": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.95,
                121.011
            ]
        },
        "Old Panamao": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.984,
                121.233
            ]
        },
        "Pandami": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.56,
                120.714
            ]
        },
        "Panglima Estino": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.967,
                121.182
            ]
        },
        "Pangutaran": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.207,
                120.452
            ]
        },
        "Pata": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.817,
                121.167
            ]
        },
        "Patikul": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.052,
                121.09
            ]
        },
        "Siasi": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.529,
                120.854
            ]
        },
        "Talipao": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.963,
                121.094
            ]
        },
        "Tapul": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.709,
                120.964
            ]
        },
        "Tongkil": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.051,
                121.748
            ]
        },
        "Bacuag": {
            "province": "Caraga",
            "center": [
                9.571,
                125.629
            ]
        },
        "Claver": {
            "province": "Caraga",
            "center": [
                9.475,
                125.785
            ]
        },
        "Dapa": {
            "province": "Caraga",
            "center": [
                9.771,
                126.054
            ]
        },
        "Del Carmen": {
            "province": "Caraga",
            "center": [
                9.864,
                125.983
            ]
        },
        "Gigaquit": {
            "province": "Caraga",
            "center": [
                9.503,
                125.687
            ]
        },
        "Mainit": {
            "province": "Caraga",
            "center": [
                9.565,
                125.499
            ]
        },
        "Malimono": {
            "province": "Caraga",
            "center": [
                9.574,
                125.435
            ]
        },
        "San Benito": {
            "province": "Caraga",
            "center": [
                9.944,
                126.008
            ]
        },
        "Santa Monica": {
            "province": "Caraga",
            "center": [
                10.027,
                126.05
            ]
        },
        "Surigao City": {
            "province": "Caraga",
            "center": [
                9.793,
                125.549
            ]
        },
        "Tagana-An": {
            "province": "Caraga",
            "center": [
                9.71,
                125.59
            ]
        },
        "Barobo": {
            "province": "Caraga",
            "center": [
                8.522,
                126.151
            ]
        },
        "Bayabas": {
            "province": "Caraga",
            "center": [
                8.967,
                126.26
            ]
        },
        "Bislig City": {
            "province": "Caraga",
            "center": [
                8.201,
                126.312
            ]
        },
        "Cagwait": {
            "province": "Caraga",
            "center": [
                8.887,
                126.232
            ]
        },
        "Cantilan": {
            "province": "Caraga",
            "center": [
                9.275,
                125.89
            ]
        },
        "Carrascal": {
            "province": "Caraga",
            "center": [
                9.353,
                125.854
            ]
        },
        "Hinatuan": {
            "province": "Caraga",
            "center": [
                8.412,
                126.327
            ]
        },
        "Lanuza": {
            "province": "Caraga",
            "center": [
                9.169,
                126.026
            ]
        },
        "Lianga": {
            "province": "Caraga",
            "center": [
                8.623,
                126.056
            ]
        },
        "Lingig": {
            "province": "Caraga",
            "center": [
                8.064,
                126.389
            ]
        },
        "Madrid": {
            "province": "Caraga",
            "center": [
                9.216,
                125.898
            ]
        },
        "Marihatag": {
            "province": "Caraga",
            "center": [
                8.795,
                126.142
            ]
        },
        "Tagbina": {
            "province": "Caraga",
            "center": [
                8.437,
                126.182
            ]
        },
        "Tago": {
            "province": "Caraga",
            "center": [
                8.938,
                126.132
            ]
        },
        "Tandag City": {
            "province": "Caraga",
            "center": [
                9.074,
                126.058
            ]
        },
        "Anao": {
            "province": "Central Luzon",
            "center": [
                15.742,
                120.614
            ]
        },
        "Bamban": {
            "province": "Central Luzon",
            "center": [
                15.243,
                120.473
            ]
        },
        "Camiling": {
            "province": "Central Luzon",
            "center": [
                15.693,
                120.418
            ]
        },
        "Capas": {
            "province": "Central Luzon",
            "center": [
                15.33,
                120.443
            ]
        },
        "Gerona": {
            "province": "Central Luzon",
            "center": [
                15.601,
                120.566
            ]
        },
        "Mayantoc": {
            "province": "Central Luzon",
            "center": [
                15.56,
                120.308
            ]
        },
        "Moncada": {
            "province": "Central Luzon",
            "center": [
                15.745,
                120.553
            ]
        },
        "Paniqui": {
            "province": "Central Luzon",
            "center": [
                15.672,
                120.541
            ]
        },
        "Pura": {
            "province": "Central Luzon",
            "center": [
                15.628,
                120.646
            ]
        },
        "Ramos": {
            "province": "Central Luzon",
            "center": [
                15.679,
                120.626
            ]
        },
        "San Clemente": {
            "province": "Central Luzon",
            "center": [
                15.667,
                120.333
            ]
        },
        "Santa Ignacia": {
            "province": "Central Luzon",
            "center": [
                15.583,
                120.447
            ]
        },
        "Tarlac City": {
            "province": "Central Luzon",
            "center": [
                15.484,
                120.602
            ]
        },
        "Bongao": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.093,
                119.824
            ]
        },
        "Languyan": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.266,
                120.091
            ]
        },
        "Mapun": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                7.015,
                118.477
            ]
        },
        "Panglima Sugala": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.151,
                120.02
            ]
        },
        "Sapa-Sapa": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.091,
                120.221
            ]
        },
        "Sibutu": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                4.78,
                119.476
            ]
        },
        "Simunul": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                4.866,
                119.824
            ]
        },
        "Sitangkai": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                4.75,
                119.405
            ]
        },
        "South Ubian": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.294,
                120.563
            ]
        },
        "Tandubas": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                5.22,
                120.245
            ]
        },
        "Turtle Islands": {
            "province": "Autonomous Region of Muslim Mindanao",
            "center": [
                6.233,
                118.351
            ]
        },
        "Botolan": {
            "province": "Central Luzon",
            "center": [
                15.23,
                120.2
            ]
        },
        "Cabangan": {
            "province": "Central Luzon",
            "center": [
                15.161,
                120.123
            ]
        },
        "Castillejos": {
            "province": "Central Luzon",
            "center": [
                14.942,
                120.218
            ]
        },
        "Iba": {
            "province": "Central Luzon",
            "center": [
                15.376,
                120.05
            ]
        },
        "Masinloc": {
            "province": "Central Luzon",
            "center": [
                15.535,
                120.054
            ]
        },
        "Olongapo City": {
            "province": "Central Luzon",
            "center": [
                14.886,
                120.343
            ]
        },
        "Palauig": {
            "province": "Central Luzon",
            "center": [
                15.452,
                120.042
            ]
        },
        "San Felipe": {
            "province": "Central Luzon",
            "center": [
                15.074,
                120.126
            ]
        },
        "San Marcelino": {
            "province": "Central Luzon",
            "center": [
                15.027,
                120.282
            ]
        },
        "Subic": {
            "province": "Central Luzon",
            "center": [
                14.895,
                120.263
            ]
        },
        "Bacungan": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.05,
                122.959
            ]
        },
        "Baliguian": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.799,
                122.259
            ]
        },
        "Dapitan City": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.591,
                123.439
            ]
        },
        "Dipolog City": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.462,
                123.355
            ]
        },
        "Godod": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.981,
                122.823
            ]
        },
        "Gutalac": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.939,
                122.365
            ]
        },
        "Jose Dalman": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.379,
                123.06
            ]
        },
        "Kalawit": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.92,
                122.526
            ]
        },
        "Katipunan": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.41,
                123.282
            ]
        },
        "Labason": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.03,
                122.53
            ]
        },
        "Liloy": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.083,
                122.676
            ]
        },
        "Manukan": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.438,
                123.124
            ]
        },
        "Mutia": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.385,
                123.509
            ]
        },
        "Pinan": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.401,
                123.441
            ]
        },
        "Polanco": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.495,
                123.387
            ]
        },
        "Pres. Manuel A. Roxas": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.442,
                123.209
            ]
        },
        "Salug": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.076,
                122.806
            ]
        },
        "Sergio Osmena Sr.": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.279,
                123.383
            ]
        },
        "Siayan": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.153,
                123.125
            ]
        },
        "Sibuco": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.302,
                122.08
            ]
        },
        "Sibutad": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.606,
                123.484
            ]
        },
        "Sindangan": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.223,
                123.027
            ]
        },
        "Siocon": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.678,
                122.193
            ]
        },
        "Sirawai": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.541,
                122.173
            ]
        },
        "Tampilisan": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.976,
                122.671
            ]
        },
        "Bayog": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.894,
                123.028
            ]
        },
        "Dimataling": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.531,
                123.32
            ]
        },
        "Dinas": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.629,
                123.344
            ]
        },
        "Dumalinao": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.775,
                123.384
            ]
        },
        "Dumingag": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.164,
                123.288
            ]
        },
        "Guipos": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.748,
                123.316
            ]
        },
        "Josefina": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.185,
                123.529
            ]
        },
        "Kumalarang": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.77,
                123.139
            ]
        },
        "Labangan": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.913,
                123.42
            ]
        },
        "Lakewood Lake": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.845,
                123.17
            ]
        },
        "Lakewood": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.891,
                123.159
            ]
        },
        "Lapuyan": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.683,
                123.202
            ]
        },
        "Mahayag": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.14,
                123.434
            ]
        },
        "Margosatubig": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.574,
                123.185
            ]
        },
        "Midsalip": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.026,
                123.259
            ]
        },
        "Molave": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.132,
                123.493
            ]
        },
        "Pagadian City": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.884,
                123.344
            ]
        },
        "Ramon Magsaysay": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.015,
                123.46
            ]
        },
        "Sominot": {
            "province": "Zamboanga Peninsula",
            "center": [
                8.036,
                123.379
            ]
        },
        "Titay": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.852,
                122.578
            ]
        },
        "Tungawan": {
            "province": "Zamboanga Peninsula",
            "center": [
                7.556,
                122.345
            ]
        }
    },
    'region_center': [14.8, 121.107],
    'start_city_center': [14.8, 121.107],
    'starting_zoom': 5.5,
    'minimum_zoom': 5
  }
};

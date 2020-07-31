export default {
  id: 'pb',
  name: 'petabencana',
  height_units: 'cm',
  supported_languages: [
    { key: 'en', name: 'English', code: 'EN' },
    { key: 'id', name: 'Bahasa', code: 'BI' }
  ],
  map: {
    'instance_regions': {
      'Bali': {
        'region': 'ID-BA',
        'bounds': { 'sw': [-8.85, 114.432], 'ne': [-8.062, 115.712] },
        'center': [-8.36973255954, 115.132168072]
      },
      'Nusa Tenggara Barat': {
        'region': 'ID-NB',
        'bounds': { 'sw': [-9.109, 115.821], 'ne': [-8.08, 119.346] },
        'center': [-8.60664308169, 117.508502604]
      },
      'Banten': {
        'region': 'ID-BT',
        'bounds': { 'sw': [-7.016, 105.1], 'ne': [-5.808, 106.78] },
        'center': [-6.4560436924, 106.109003345]
      },
      'Jawa Tengah': {
        'region': 'ID-JT',
        'bounds': { 'sw': [-8.212, 108.556], 'ne': [-5.726, 111.691] },
        'center': [-7.25948735657, 110.20004621]
      },
      'Jawa Barat': {
        'region': 'ID-JB',
        'bounds': { 'sw': [-7.821, 106.371], 'ne': [-5.915, 108.838] },
        'center': [-6.91984099888, 107.603019928]
      },
      'Kalimantan Tengah': {
        'region': 'ID-KT',
        'bounds': { 'sw': [-3.544, 110.733], 'ne': [0.795, 115.849] },
        'center': [-1.59986833375, 113.416768894]
      },
      'Kalimantan Selatan': {
        'region': 'ID-KS',
        'bounds': { 'sw': [-4.943, 114.351], 'ne': [-1.302, 117.458] },
        'center': [-3.00041784628, 115.435540688]
      },
      'Kalimantan Barat': {
        'region': 'ID-KB',
        'bounds': { 'sw': [-3.068, 108.599], 'ne': [2.082, 114.207] },
        'center': [-0.0848925686634, 111.121996064]
      },
      'Sulawesi Tengah': {
        'region': 'ID-ST',
        'bounds': { 'sw': [-3.322, 119.422], 'ne': [1.374, 124.033] },
        'center': [-1.00566716709, 121.204195805]
      },
      'Gorontalo': {
        'region': 'ID-GO',
        'bounds': { 'sw': [0.306, 121.156], 'ne': [1.041, 123.552] },
        'center': [0.686199890399, 122.378574556]
      },
      'Sulawesi Utara': {
        'region': 'ID-SA',
        'bounds': { 'sw': [0.292, 123.112], 'ne': [5.566, 127.164] },
        'center': [1.26232917435, 124.523721467]
      },
      'Sulawesi Selatan': {
        'region': 'ID-SN',
        'bounds': { 'sw': [-7.76, 117.038], 'ne': [-1.891, 122.222] },
        'center': [-3.70844057841, 120.173198612]
      },
      'Sulawesi Tenggara': {
        'region': 'ID-SG',
        'bounds': { 'sw': [-6.213, 120.866], 'ne': [-2.77, 124.612] },
        'center': [-4.14210580132, 122.078902867]
      },
      'Sulawesi Barat': {
        'region': 'ID-SR',
        'bounds': { 'sw': [-3.571, 118.757], 'ne': [-0.861, 119.876] },
        'center': [-2.46403742395, 119.3428688]
      },
      'Aceh': {
        'region': 'ID-AC',
        'bounds': { 'sw': [1.976, 95.011], 'ne': [6.077, 98.286] },
        'center': [4.22568208825, 96.9100985353]
      },
      'Bengkulu': {
        'region': 'ID-BE',
        'bounds': { 'sw': [-5.514, 100.635], 'ne': [-2.277, 103.781] },
        'center': [-3.55942250949, 102.342881214]
      },
      'Jambi': {
        'region': 'ID-JA',
        'bounds': { 'sw': [-2.782, 101.123], 'ne': [-0.746, 104.491] },
        'center': [-1.697925239, 102.718958759]
      },
      'Lampung': {
        'region': 'ID-LA',
        'bounds': { 'sw': [-6.168, 103.593], 'ne': [-3.724, 105.916] },
        'center': [-4.91741365604, 105.020973741]
      },
      'Riau': {
        'region': 'ID-RI',
        'bounds': { 'sw': [-1.12, 100.025], 'ne': [2.883, 103.815] },
        'center': [0.509489372568, 101.817168906]
      },
      'Sumatera Barat': {
        'region': 'ID-SB',
        'bounds': { 'sw': [-3.349, 98.596], 'ne': [0.907, 101.886] },
        'center': [-0.841344968749, 100.464249647]
      },
      'Sumatera Selatan': {
        'region': 'ID-SS',
        'bounds': { 'sw': [-4.924, 102.041], 'ne': [-1.627, 106.221] },
        'center': [-3.21342238304, 104.168798179]
      },
      'Sumatera Utara': {
        'region': 'ID-SU',
        'bounds': { 'sw': [-0.639, 97.058], 'ne': [4.302, 100.571] },
        'center': [2.19265505812, 99.0510137796]
      },
      'Nusa Tenggara Timur': {
        'region': 'ID-NT',
        'bounds': { 'sw': [-11.008, 118.927], 'ne': [-7.778, 125.193] },
        'center': [-9.26053073914, 122.179813719]
      },
      'Maluku': {
        'region': 'ID-MA',
        'bounds': { 'sw': [-8.345, 125.723], 'ne': [-2.725, 134.909] },
        'center': [-4.74070528384, 129.850905684]
      },
      'Maluku Utara': {
        'region': 'ID-MU',
        'bounds': { 'sw': [-2.477, 124.144], 'ne': [2.645, 129.657] },
        'center': [0.212859801992, 127.539815607]
      },
      'Jawa Timur': {
        'region': 'ID-JI',
        'bounds': { 'sw': [-8.781, 110.899], 'ne': [-5.043, 116.27] },
        'center': [-7.72095096893, 112.726913253]
      },
      'Kepulauan Bangka Belitung': {
        'region': 'ID-BB',
        'bounds': { 'sw': [-3.341, 105.108], 'ne': [-0.909, 109.389] },
        'center': [-2.42164574375, 106.574940677]
      },
      'Kepulauan Riau': {
        'region': 'ID-KR',
        'bounds': { 'sw': [-0.87, 103.284], 'ne': [4.796, 109.168] },
        'center': [1.48126244893, 105.404211405]
      },
      'Papua': {
        'region': 'ID-PA',
        'bounds': { 'sw': [-9.127, 134.299], 'ne': [0.938, 141.02] },
        'center': [-4.65867452699, 138.695140787]
      },
      'Papua Barat': {
        'region': 'ID-PB',
        'bounds': { 'sw': [-4.315, 129.3], 'ne': [1.081, 135.258] },
        'center': [-2.04271934888, 132.972376543]
      },
      'Kalimantan Timur': {
        'region': 'ID-KI',
        'bounds': { 'sw': [-2.541, 113.836], 'ne': [2.569, 119.038] },
        'center': [0.453493733739, 116.459483436]
      },
      'Kalimantan Utara': {
        'region': 'ID-KU',
        'bounds': { 'sw': [1.114, 114.565], 'ne': [4.408, 117.991] },
        'center': [2.9182033782, 116.249394237]
      },
      'Daerah Istimewa Yogyakarta': {
        'region': 'ID-YO',
        'bounds': { 'sw': [-8.204, 110.003], 'ne': [-7.541, 110.839] },
        'center': [-7.89510163766, 110.445807952]
      },
      'Daerah Khusus Ibukota Jakarta': {
        'region': 'ID-JK',
        'bounds': { 'sw': [-6.374, 106.39], 'ne': [-5.202, 106.974] },
        'center': [-6.19875625864, 106.834075859]
      }
    },
    'default_region': {
      'region': 'java',
      'bounds': {
        'sw': [-11.5076711, 92.0107985], // [ymin , xmin]
        'ne': [8.076744, 144.0200345] // [ymax, xmax]
      },
      'center': [4.22568208825, 96.9100985353]
    },
    'sub_regions': {
      'simeulue': { 'province': 'Aceh', 'center': [2.61330153417, 96.0856750686] },
      'aceh singkil': {
        'province': 'Aceh',
        'center': [2.34907122027, 97.8442472628]
      },
      'aceh selatan': { 'province': 'Aceh', 'center': [3.16287086479, 97.435347533] },
      'aceh tenggara': {
        'province': 'Aceh',
        'center': [3.36959791066, 97.695539865]
      },
      'aceh timur': { 'province': 'Aceh', 'center': [4.62913326313, 97.6288919982] },
      'aceh tengah': { 'province': 'Aceh', 'center': [4.53006890913, 96.8589944837] },
      'aceh barat': { 'province': 'Aceh', 'center': [4.45664396828, 96.1854578813] },
      'aceh besar': { 'province': 'Aceh', 'center': [5.38054401756, 95.5149892205] },
      'pidie': { 'province': 'Aceh', 'center': [5.06815830847, 96.0072061208] },
      'bireuen': { 'province': 'Aceh', 'center': [5.09346477298, 96.6092168556] },
      'aceh utara': { 'province': 'Aceh', 'center': [5.0149122484, 97.1818879681] },
      'aceh barat daya': {
        'province': 'Aceh',
        'center': [3.82489922535, 96.8783204433]
      },
      'gayo lues': { 'province': 'Aceh', 'center': [3.98192762872, 97.3575332091] },
      'aceh tamiang': {
        'province': 'Aceh',
        'center': [4.22787552681, 97.9770203942]
      },
      'nagan raya': { 'province': 'Aceh', 'center': [4.15540593492, 96.5067839719] },
      'aceh jaya': { 'province': 'Aceh', 'center': [4.83218285512, 95.6787093026] },
      'bener meriah': {
        'province': 'Aceh',
        'center': [4.76723463361, 97.0072961175]
      },
      'pidie jaya': { 'province': 'Aceh', 'center': [5.12454227194, 96.2167538822] },
      'banda aceh': { 'province': 'Aceh', 'center': [5.55929619259, 95.3268157318] },
      'sabang': { 'province': 'Aceh', 'center': [5.83841824565, 95.3054360522] },
      'langsa': { 'province': 'Aceh', 'center': [4.48311929364, 97.9822620785] },
      'lhokseumawe': { 'province': 'Aceh', 'center': [5.16449402248, 97.1103123062] },
      'subulussalam': {
        'province': 'Aceh',
        'center': [2.73585267856, 97.9374019032]
      },
      'nias': {
        'province': 'Sumatera Utara',
        'center': [1.06502601906, 97.7317652705]
      },
      'mandailing natal': {
        'province': 'Sumatera Utara',
        'center': [0.774374853884, 99.3694291381]
      },
      'tapanuli selatan': {
        'province': 'Sumatera Utara',
        'center': [1.49275653968, 99.258067765]
      },
      'tapanuli tengah': {
        'province': 'Sumatera Utara',
        'center': [1.83506685085, 98.6611403074]
      },
      'tapanuli utara': {
        'province': 'Sumatera Utara',
        'center': [1.98949690123, 99.0716886181]
      },
      'toba samosir': {
        'province': 'Sumatera Utara',
        'center': [2.37973426854, 99.2642078381]
      },
      'labuhan batu': {
        'province': 'Sumatera Utara',
        'center': [2.27872491197, 100.056404333]
      },
      'asahan': {
        'province': 'Sumatera Utara',
        'center': [2.80236880356, 99.5625628484]
      },
      'simalungun': {
        'province': 'Sumatera Utara',
        'center': [2.97684269506, 99.0330606119]
      },
      'dairi': {
        'province': 'Sumatera Utara',
        'center': [2.84360584088, 98.2673200022]
      },
      'karo': {
        'province': 'Sumatera Utara',
        'center': [3.12068001904, 98.2960321585]
      },
      'deli serdang': {
        'province': 'Sumatera Utara',
        'center': [3.48009626639, 98.6940647253]
      },
      'langkat': {
        'province': 'Sumatera Utara',
        'center': [3.71077523527, 98.2202378621]
      },
      'nias selatan': {
        'province': 'Sumatera Utara',
        'center': [0.320788483483, 98.1035154293]
      },
      'humbang hasundutan': {
        'province': 'Sumatera Utara',
        'center': [2.27130016634, 98.571499121]
      },
      'pakpak bharat': {
        'province': 'Sumatera Utara',
        'center': [2.55412710292, 98.2406637313]
      },
      'samosir': {
        'province': 'Sumatera Utara',
        'center': [2.55880377869, 98.7213510099]
      },
      'serdang bedagai': {
        'province': 'Sumatera Utara',
        'center': [3.36642374693, 99.0575348709]
      },
      'batu bara': {
        'province': 'Sumatera Utara',
        'center': [3.23399384798, 99.4750305493]
      },
      'padang lawas utara': {
        'province': 'Sumatera Utara',
        'center': [1.59325621967, 99.7574521913]
      },
      'padang lawas': {
        'province': 'Sumatera Utara',
        'center': [1.14040365307, 99.844120889]
      },
      'labuhan batu selatan': {
        'province': 'Sumatera Utara',
        'center': [1.83887391308, 100.130536582]
      },
      'labuhan batu utara': {
        'province': 'Sumatera Utara',
        'center': [2.406297035, 99.7524718509]
      },
      'nias utara': {
        'province': 'Sumatera Utara',
        'center': [1.31278262599, 97.3554773004]
      },
      'nias barat': {
        'province': 'Sumatera Utara',
        'center': [1.02891714029, 97.4951732305]
      },
      'sibolga': {
        'province': 'Sumatera Utara',
        'center': [1.73836446499, 98.7859056336]
      },
      'tanjung balai': {
        'province': 'Sumatera Utara',
        'center': [2.96441642824, 99.7949879483]
      },
      'pematang siantar': {
        'province': 'Sumatera Utara',
        'center': [2.96220272384, 99.058764079]
      },
      'tebing tinggi': {
        'province': 'Sumatera Utara',
        'center': [3.32836058505, 99.15570766]
      },
      'medan': {
        'province': 'Sumatera Utara',
        'center': [3.62765849803, 98.6679852033]
      },
      'binjai': {
        'province': 'Sumatera Utara',
        'center': [3.59949341491, 98.4887112972]
      },
      'padangsidimpuan': {
        'province': 'Sumatera Utara',
        'center': [1.39631086442, 99.2807967564]
      },
      'gunungsitoli': {
        'province': 'Sumatera Utara',
        'center': [1.26509447056, 97.5830894732]
      },
      'danau toba': {
        'province': 'Sumatera Utara',
        'center': [2.60478890174, 98.8115072748]
      },
      'kepulauan mentawai': {
        'province': 'Sumatera Barat',
        'center': [-1.84851893397, 99.3361903677]
      },
      'pesisir selatan': {
        'province': 'Sumatera Barat',
        'center': [-1.73828282353, 100.88070245]
      },
      'solok': {
        'province': 'Sumatera Barat',
        'center': [-0.782351202195, 100.63036452]
      },
      'sijunjung': {
        'province': 'Sumatera Barat',
        'center': [-0.684085917343, 101.089510838]
      },
      'tanah datar': {
        'province': 'Sumatera Barat',
        'center': [-0.460539970515, 100.586072454]
      },
      'padang pariaman': {
        'province': 'Sumatera Barat',
        'center': [-0.56233973444, 100.227718246]
      },
      'agam': {
        'province': 'Sumatera Barat',
        'center': [-0.249434146365, 100.168512343]
      },
      'lima puluh kota': {
        'province': 'Sumatera Barat',
        'center': [0.0297823457034, 100.565922836]
      },
      'pasaman': {
        'province': 'Sumatera Barat',
        'center': [0.387292218365, 100.082760047]
      },
      'solok selatan': {
        'province': 'Sumatera Barat',
        'center': [-1.40635652053, 101.25257887]
      },
      'dharmasraya': {
        'province': 'Sumatera Barat',
        'center': [-1.1309871404, 101.554193697]
      },
      'pasaman barat': {
        'province': 'Sumatera Barat',
        'center': [0.206952704305, 99.6781167282]
      },
      'padang': {
        'province': 'Sumatera Barat',
        'center': [-0.895717897239, 100.435354541]
      },
      'sawah lunto': {
        'province': 'Sumatera Barat',
        'center': [-0.653771444743, 100.757031092]
      },
      'padang panjang': {
        'province': 'Sumatera Barat',
        'center': [-0.471194522959, 100.403715386]
      },
      'bukittinggi': {
        'province': 'Sumatera Barat',
        'center': [-0.300099908378, 100.372041582]
      },
      'payakumbuh': {
        'province': 'Sumatera Barat',
        'center': [-0.226071994765, 100.630980607]
      },
      'pariaman': {
        'province': 'Sumatera Barat',
        'center': [-0.607655372678, 100.13722926]
      },
      'danau': {
        'province': 'Sulawesi Utara',
        'center': [1.17045051969, 124.84427615]
      },
      'kuantan singingi': {
        'province': 'Riau',
        'center': [-0.47882156076, 101.50347815]
      },
      'indragiri hulu': {
        'province': 'Riau',
        'center': [-0.533191337281, 102.327573762]
      },
      'indragiri hilir': {
        'province': 'Riau',
        'center': [-0.233308943982, 103.157314342]
      },
      'pelalawan': { 'province': 'Riau', 'center': [0.219424254317, 102.267626115] },
      's i a k': { 'province': 'Riau', 'center': [0.826469954705, 101.824895541] },
      'kampar': { 'province': 'Riau', 'center': [0.325620708165, 101.072114847] },
      'rokan hulu': { 'province': 'Riau', 'center': [0.939540357748, 100.475742949] },
      'bengkalis': { 'province': 'Riau', 'center': [1.4060950555, 101.663345679] },
      'rokan hilir': { 'province': 'Riau', 'center': [1.77045205067, 100.745920551] },
      'kepulauan meranti': {
        'province': 'Riau',
        'center': [1.00280484888, 102.650346239]
      },
      'pekanbaru': { 'province': 'Riau', 'center': [0.54988949652, 101.464437745] },
      'd u m a i': { 'province': 'Riau', 'center': [1.79766516179, 101.311653689] },
      'kerinci': { 'province': 'Jambi', 'center': [-2.03690738719, 101.469423784] },
      'merangin': { 'province': 'Jambi', 'center': [-2.19620098629, 102.064419021] },
      'sarolangun': {
        'province': 'Jambi',
        'center': [-2.30911276832, 102.664566493]
      },
      'batang hari': {
        'province': 'Jambi',
        'center': [-1.74974075784, 103.096068885]
      },
      'muaro jambi': {
        'province': 'Jambi',
        'center': [-1.60918910365, 103.745174592]
      },
      'tanjung jabung timur': {
        'province': 'Jambi',
        'center': [-1.21982116911, 103.967351474]
      },
      'tanjung jabung barat': {
        'province': 'Jambi',
        'center': [-1.07107003795, 103.113310658]
      },
      'tebo': { 'province': 'Jambi', 'center': [-1.3102005132, 102.361275315] },
      'bungo': { 'province': 'Jambi', 'center': [-1.59888603154, 101.931001123] },
      'jambi': { 'province': 'Jambi', 'center': [-1.61699669552, 103.600221306] },
      'sungai penuh': {
        'province': 'Jambi',
        'center': [-2.11334853169, 101.341113502]
      },
      'ogan komering ulu': {
        'province': 'Sumatera Selatan',
        'center': [-4.10067007018, 104.093829511]
      },
      'ogan komering ilir': {
        'province': 'Sumatera Selatan',
        'center': [-3.34317307792, 105.390681025]
      },
      'muara enim': {
        'province': 'Sumatera Selatan',
        'center': [-3.6358343867, 104.001565339]
      },
      'lahat': {
        'province': 'Sumatera Selatan',
        'center': [-3.83055731565, 103.385324252]
      },
      'musi rawas': {
        'province': 'Sumatera Selatan',
        'center': [-3.16673076586, 103.145221058]
      },
      'musi banyuasin': {
        'province': 'Sumatera Selatan',
        'center': [-2.44396393173, 103.82957603]
      },
      'banyuasin': {
        'province': 'Sumatera Selatan',
        'center': [-2.49054028715, 104.666315052]
      },
      'ogan komering ulu selatan': {
        'province': 'Sumatera Selatan',
        'center': [-4.59024720472, 103.915240586]
      },
      'ogan komering ulu timur': {
        'province': 'Sumatera Selatan',
        'center': [-4.06887254957, 104.5679225]
      },
      'ogan ilir': {
        'province': 'Sumatera Selatan',
        'center': [-3.4099779707, 104.600903065]
      },
      'empat lawang': {
        'province': 'Sumatera Selatan',
        'center': [-3.75194350113, 102.953595888]
      },
      'penukal abab lematang ilir': {
        'province': 'Sumatera Selatan',
        'center': [-3.2129342727, 103.983291746]
      },
      'musi rawas utara': {
        'province': 'Sumatera Selatan',
        'center': [-2.74439869058, 102.735839567]
      },
      'palembang': {
        'province': 'Sumatera Selatan',
        'center': [-2.97328349017, 104.731542693]
      },
      'prabumulih': {
        'province': 'Sumatera Selatan',
        'center': [-3.45283507509, 104.229387931]
      },
      'pagar alam': {
        'province': 'Sumatera Selatan',
        'center': [-4.10911154496, 103.262673725]
      },
      'lubuklinggau': {
        'province': 'Sumatera Selatan',
        'center': [-3.2635241325, 102.879358129]
      },
      'bengkulu selatan': {
        'province': 'Bengkulu',
        'center': [-4.34866287035, 103.023729534]
      },
      'rejang lebong': {
        'province': 'Bengkulu',
        'center': [-3.43079011232, 102.698893968]
      },
      'bengkulu utara': {
        'province': 'Bengkulu',
        'center': [-3.33202546502, 102.005230215]
      },
      'kaur': { 'province': 'Bengkulu', 'center': [-4.60719682254, 103.407504087] },
      'seluma': { 'province': 'Bengkulu', 'center': [-4.05231242255, 102.657819591] },
      'mukomuko': {
        'province': 'Bengkulu',
        'center': [-2.70139447457, 101.485595983]
      },
      'lebong': { 'province': 'Bengkulu', 'center': [-3.09034629962, 102.249144695] },
      'kepahiang': {
        'province': 'Bengkulu',
        'center': [-3.62823085715, 102.641688539]
      },
      'bengkulu tengah': {
        'province': 'Bengkulu',
        'center': [-3.68754742146, 102.411669469]
      },
      'bengkulu': {
        'province': 'Bengkulu',
        'center': [-3.82769798586, 102.312690978]
      },
      'lampung barat': {
        'province': 'Lampung',
        'center': [-5.03183030703, 104.190326575]
      },
      'tanggamus': {
        'province': 'Lampung',
        'center': [-5.43586436537, 104.675210506]
      },
      'lampung selatan': {
        'province': 'Lampung',
        'center': [-5.53277190808, 105.500500499]
      },
      'lampung timur': {
        'province': 'Lampung',
        'center': [-5.13665162649, 105.649036917]
      },
      'lampung tengah': {
        'province': 'Lampung',
        'center': [-4.86129610916, 105.264648765]
      },
      'lampung utara': {
        'province': 'Lampung',
        'center': [-4.80923839567, 104.805893503]
      },
      'way kanan': {
        'province': 'Lampung',
        'center': [-4.51645224911, 104.614489956]
      },
      'tulangbawang': {
        'province': 'Lampung',
        'center': [-4.37276294273, 105.53193829]
      },
      'pesawaran': {
        'province': 'Lampung',
        'center': [-5.47349119722, 105.110218641]
      },
      'pringsewu': {
        'province': 'Lampung',
        'center': [-5.33084526052, 104.920015796]
      },
      'mesuji': { 'province': 'Lampung', 'center': [-4.02373602283, 105.377875233] },
      'tulang bawang barat': {
        'province': 'Lampung',
        'center': [-4.42481844752, 105.092057864]
      },
      'pesisir barat': {
        'province': 'Lampung',
        'center': [-5.38269931357, 104.205318463]
      },
      'bandar lampung': {
        'province': 'Lampung',
        'center': [-5.41515683297, 105.266770237]
      },
      'metro': { 'province': 'Lampung', 'center': [-5.12182457802, 105.306443178] },
      'bangka': {
        'province': 'Kepulauan Bangka Belitung',
        'center': [-1.90588710667, 105.921232688]
      },
      'belitung': {
        'province': 'Kepulauan Bangka Belitung',
        'center': [-2.86994566648, 107.711031627]
      },
      'bangka barat': {
        'province': 'Kepulauan Bangka Belitung',
        'center': [-1.89077298407, 105.489271255]
      },
      'bangka tengah': {
        'province': 'Kepulauan Bangka Belitung',
        'center': [-2.43011752279, 106.243323871]
      },
      'bangka selatan': {
        'province': 'Kepulauan Bangka Belitung',
        'center': [-2.77112090003, 106.342422592]
      },
      'belitung timur': {
        'province': 'Kepulauan Bangka Belitung',
        'center': [-2.90711388454, 108.052375511]
      },
      'pangkal pinang': {
        'province': 'Kepulauan Bangka Belitung',
        'center': [-2.11066478244, 106.113477931]
      },
      'karimun': {
        'province': 'Kepulauan Riau',
        'center': [0.8248068018, 103.530918215]
      },
      'bintan': {
        'province': 'Kepulauan Riau',
        'center': [1.01188130123, 104.703265035]
      },
      'natuna': {
        'province': 'Kepulauan Riau',
        'center': [3.78591506778, 108.264798578]
      },
      'lingga': {
        'province': 'Kepulauan Riau',
        'center': [-0.224557782136, 104.527089878]
      },
      'kepulauan anambas': {
        'province': 'Kepulauan Riau',
        'center': [3.08776585838, 106.065228777]
      },
      'batam': {
        'province': 'Kepulauan Riau',
        'center': [0.965210143917, 104.063797329]
      },
      'tanjungpinang': {
        'province': 'Kepulauan Riau',
        'center': [0.92031619453, 104.485226791]
      },
      'kepulauan seribu': {
        'province': 'Daerah Khusus Ibukota Jakarta',
        'center': [-5.70015537376, 106.57935282]
      },
      'jakarta selatan': {
        'province': 'Daerah Khusus Ibukota Jakarta',
        'center': [-6.27254908064, 106.809997409]
      },
      'jakarta timur': {
        'province': 'Daerah Khusus Ibukota Jakarta',
        'center': [-6.25537320817, 106.900268513]
      },
      'jakarta pusat': {
        'province': 'Daerah Khusus Ibukota Jakarta',
        'center': [-6.18123044595, 106.835076081]
      },
      'jakarta barat': {
        'province': 'Daerah Khusus Ibukota Jakarta',
        'center': [-6.16546946397, 106.748326773]
      },
      'jakarta utara': {
        'province': 'Daerah Khusus Ibukota Jakarta',
        'center': [-6.12918460187, 106.86946244]
      },
      'bogor': {
        'province': 'Jawa Barat',
        'center': [-6.59345331721, 106.799564188]
      },
      'sukabumi': {
        'province': 'Jawa Barat',
        'center': [-6.93987168707, 106.924331942]
      },
      'cianjur': {
        'province': 'Jawa Barat',
        'center': [-7.13371257377, 107.15777187]
      },
      'bandung': {
        'province': 'Jawa Barat',
        'center': [-6.91913539764, 107.636602216]
      },
      'garut': {
        'province': 'Jawa Barat',
        'center': [-7.35958638035, 107.788862702]
      },
      'tasikmalaya': {
        'province': 'Jawa Barat',
        'center': [-7.36025120903, 108.21935548]
      },
      'ciamis': {
        'province': 'Jawa Barat',
        'center': [-7.29053695108, 108.428648616]
      },
      'kuningan': {
        'province': 'Jawa Barat',
        'center': [-7.00423321027, 108.560300358]
      },
      'cirebon': {
        'province': 'Jawa Barat',
        'center': [-6.74188614109, 108.553504742]
      },
      'majalengka': {
        'province': 'Jawa Barat',
        'center': [-6.81586526191, 108.257811452]
      },
      'sumedang': {
        'province': 'Jawa Barat',
        'center': [-6.82506573768, 107.980849828]
      },
      'indramayu': {
        'province': 'Jawa Barat',
        'center': [-6.44863792212, 108.168727988]
      },
      'subang': {
        'province': 'Jawa Barat',
        'center': [-6.48419377462, 107.732225474]
      },
      'purwakarta': {
        'province': 'Jawa Barat',
        'center': [-6.59501639329, 107.432209601]
      },
      'karawang': {
        'province': 'Jawa Barat',
        'center': [-6.2520034537, 107.353927022]
      },
      'bekasi': {
        'province': 'Jawa Barat',
        'center': [-6.28023097405, 106.975682214]
      },
      'bandung barat': {
        'province': 'Jawa Barat',
        'center': [-6.89705590425, 107.414952649]
      },
      'pangandaran': {
        'province': 'Jawa Barat',
        'center': [-7.63594105604, 108.518690845]
      },
      'depok': {
        'province': 'Jawa Barat',
        'center': [-6.39610214417, 106.816808113]
      },
      'cimahi': {
        'province': 'Jawa Barat',
        'center': [-6.88649611872, 107.543582991]
      },
      'banjar': {
        'province': 'Kalimantan Selatan',
        'center': [-3.32034292264, 115.08461617]
      },
      'waduk cira': {
        'province': 'Jawa Barat',
        'center': [-6.73769030583, 107.299000108]
      },
      'cilacap': {
        'province': 'Jawa Tengah',
        'center': [-7.49096273086, 108.890412717]
      },
      'banyumas': {
        'province': 'Jawa Tengah',
        'center': [-7.45514526784, 109.175579929]
      },
      'purbalingga': {
        'province': 'Jawa Tengah',
        'center': [-7.3229163925, 109.407318225]
      },
      'banjarnegara': {
        'province': 'Jawa Tengah',
        'center': [-7.35188192603, 109.657419177]
      },
      'kebumen': {
        'province': 'Jawa Tengah',
        'center': [-7.65526652333, 109.617409475]
      },
      'purworejo': {
        'province': 'Jawa Tengah',
        'center': [-7.69946822027, 109.965719467]
      },
      'wonosobo': {
        'province': 'Jawa Tengah',
        'center': [-7.41553509248, 109.907223]
      },
      'magelang': {
        'province': 'Jawa Tengah',
        'center': [-7.47714246479, 110.220132203]
      },
      'boyolali': {
        'province': 'Jawa Tengah',
        'center': [-7.41856160865, 110.650656834]
      },
      'klaten': {
        'province': 'Jawa Tengah',
        'center': [-7.68616852504, 110.6198468]
      },
      'sukoharjo': {
        'province': 'Jawa Tengah',
        'center': [-7.6804341365, 110.834923964]
      },
      'wonogiri': {
        'province': 'Jawa Tengah',
        'center': [-7.91971843138, 111.000808259]
      },
      'karanganyar': {
        'province': 'Jawa Tengah',
        'center': [-7.61445772899, 111.019265466]
      },
      'sragen': {
        'province': 'Jawa Tengah',
        'center': [-7.38713087766, 110.977434358]
      },
      'grobogan': {
        'province': 'Jawa Tengah',
        'center': [-7.11687977057, 110.9271011]
      },
      'blora': {
        'province': 'Jawa Tengah',
        'center': [-7.0759623392, 111.387636309]
      },
      'rembang': {
        'province': 'Jawa Tengah',
        'center': [-6.77548971191, 111.46129925]
      },
      'pati': { 'province': 'Jawa Tengah', 'center': [-6.74342376591, 111.04141362] },
      'kudus': {
        'province': 'Jawa Tengah',
        'center': [-6.78906796341, 110.869722094]
      },
      'jepara': {
        'province': 'Jawa Tengah',
        'center': [-6.54866154007, 110.767674571]
      },
      'demak': {
        'province': 'Jawa Tengah',
        'center': [-6.91111682615, 110.632015334]
      },
      'semarang': {
        'province': 'Jawa Tengah',
        'center': [-7.02041814045, 110.389535021]
      },
      'temanggung': {
        'province': 'Jawa Tengah',
        'center': [-7.25785878478, 110.135632236]
      },
      'kendal': {
        'province': 'Jawa Tengah',
        'center': [-7.03778098408, 110.156030808]
      },
      'batang': {
        'province': 'Jawa Tengah',
        'center': [-7.02129951854, 109.861469607]
      },
      'pekalongan': {
        'province': 'Jawa Tengah',
        'center': [-6.89300909659, 109.677884653]
      },
      'pemalang': {
        'province': 'Jawa Tengah',
        'center': [-7.03654078787, 109.394978927]
      },
      'tegal': {
        'province': 'Jawa Tengah',
        'center': [-6.86882287901, 109.115770281]
      },
      'brebes': {
        'province': 'Jawa Tengah',
        'center': [-7.05932481251, 108.927516706]
      },
      'surakarta': {
        'province': 'Jawa Tengah',
        'center': [-7.55808192315, 110.823389584]
      },
      'salatiga': {
        'province': 'Jawa Tengah',
        'center': [-7.3382719688, 110.498427367]
      },
      'waduk kedu': {
        'province': 'Jawa Tengah',
        'center': [-7.28294304416, 110.814645477]
      },
      'hutan': {
        'province': 'Jawa Tengah',
        'center': [-7.16743418683, 110.357084976]
      },
      'kulonprogo': {
        'province': 'Daerah Istimewa Yogyakarta',
        'center': [-7.81848109523, 110.167078667]
      },
      'bantul': {
        'province': 'Daerah Istimewa Yogyakarta',
        'center': [-7.90187101841, 110.354397457]
      },
      'gunungkidul': {
        'province': 'Daerah Istimewa Yogyakarta',
        'center': [-7.99436072162, 110.612542203]
      },
      'sleman': {
        'province': 'Daerah Istimewa Yogyakarta',
        'center': [-7.71581672309, 110.383437432]
      },
      'kota yogyakarta': {
        'province': 'Daerah Istimewa Yogyakarta',
        'center': [-7.80334832459, 110.374416186]
      },
      'pacitan': {
        'province': 'Jawa Timur',
        'center': [-8.12621317144, 111.179056355]
      },
      'ponorogo': {
        'province': 'Jawa Timur',
        'center': [-7.93132015529, 111.499365813]
      },
      'trenggalek': {
        'province': 'Jawa Timur',
        'center': [-8.1618403662, 111.626213182]
      },
      'tulungagung': {
        'province': 'Jawa Timur',
        'center': [-8.11325475933, 111.887201952]
      },
      'blitar': {
        'province': 'Jawa Timur',
        'center': [-8.09502469708, 112.16699663]
      },
      'kediri': {
        'province': 'Jawa Timur',
        'center': [-7.82630540225, 112.013838432]
      },
      'malang': {
        'province': 'Jawa Timur',
        'center': [-7.97896350354, 112.636379858]
      },
      'lumajang': {
        'province': 'Jawa Timur',
        'center': [-8.12530107237, 113.137574379]
      },
      'jember': {
        'province': 'Jawa Timur',
        'center': [-8.2359781352, 113.655695298]
      },
      'banyuwangi': {
        'province': 'Jawa Timur',
        'center': [-8.36486215257, 114.205416384]
      },
      'bondowoso': {
        'province': 'Jawa Timur',
        'center': [-7.94402336735, 113.947550618]
      },
      'situbondo': {
        'province': 'Jawa Timur',
        'center': [-7.80137751716, 114.052406084]
      },
      'probolinggo': {
        'province': 'Jawa Timur',
        'center': [-7.77506978278, 113.205321914]
      },
      'pasuruan': {
        'province': 'Jawa Timur',
        'center': [-7.64996289291, 112.90969405]
      },
      'sidoarjo': {
        'province': 'Jawa Timur',
        'center': [-7.45163218865, 112.700280967]
      },
      'mojokerto': {
        'province': 'Jawa Timur',
        'center': [-7.4713128207, 112.437435583]
      },
      'jombang': {
        'province': 'Jawa Timur',
        'center': [-7.54510226144, 112.265129502]
      },
      'nganjuk': {
        'province': 'Jawa Timur',
        'center': [-7.59742267671, 111.93843861]
      },
      'madiun': { 'province': 'Jawa Timur', 'center': [-7.6279828985, 111.52817686] },
      'magetan': {
        'province': 'Jawa Timur',
        'center': [-7.66288104688, 111.357902358]
      },
      'ngawi': {
        'province': 'Jawa Timur',
        'center': [-7.43923853915, 111.343090048]
      },
      'bojonegoro': {
        'province': 'Jawa Timur',
        'center': [-7.25543270894, 111.80983723]
      },
      'tuban': {
        'province': 'Jawa Timur',
        'center': [-6.95315669996, 111.891486059]
      },
      'lamongan': {
        'province': 'Jawa Timur',
        'center': [-7.13119854172, 112.300783167]
      },
      'gresik': {
        'province': 'Jawa Timur',
        'center': [-6.92791287055, 112.558334776]
      },
      'bangkalan': {
        'province': 'Jawa Timur',
        'center': [-7.04386676621, 112.930190146]
      },
      'sampang': {
        'province': 'Jawa Timur',
        'center': [-7.05225687594, 113.256085488]
      },
      'pamekasan': {
        'province': 'Jawa Timur',
        'center': [-7.06525970964, 113.503889174]
      },
      'sumenep': {
        'province': 'Jawa Timur',
        'center': [-6.96655104372, 114.405247327]
      },
      'surabaya': {
        'province': 'Jawa Timur',
        'center': [-7.2753878095, 112.722672312]
      },
      'batu': { 'province': 'Jawa Timur', 'center': [-7.83310885106, 112.53111999] },
      'pandeglang': {
        'province': 'Banten',
        'center': [-6.59022538901, 105.742949417]
      },
      'lebak': { 'province': 'Banten', 'center': [-6.64210090224, 106.212834504] },
      'tangerang': {
        'province': 'Banten',
        'center': [-6.18286875095, 106.651797926]
      },
      'serang': { 'province': 'Banten', 'center': [-6.12341322982, 106.166292329] },
      'cilegon': { 'province': 'Banten', 'center': [-5.9981775574, 106.019378584] },
      'tangerang selatan': {
        'province': 'Banten',
        'center': [-6.30181264651, 106.707423155]
      },
      'jembrana': { 'province': 'Bali', 'center': [-8.31236632884, 114.682202735] },
      'tabanan': { 'province': 'Bali', 'center': [-8.42931418982, 115.078015085] },
      'badung': { 'province': 'Bali', 'center': [-8.58285349483, 115.188349631] },
      'gianyar': { 'province': 'Bali', 'center': [-8.48065916749, 115.287580966] },
      'klungkung': { 'province': 'Bali', 'center': [-8.66628543973, 115.49326666] },
      'bangli': { 'province': 'Bali', 'center': [-8.29346374284, 115.346732112] },
      'karang asem': {
        'province': 'Bali',
        'center': [-8.37417782871, 115.530169651]
      },
      'buleleng': { 'province': 'Bali', 'center': [-8.20069160395, 114.963100712] },
      'denpasar': { 'province': 'Bali', 'center': [-8.6687139674, 115.220936619] },
      'lombok barat': {
        'province': 'Nusa Tenggara Barat',
        'center': [-8.66440791596, 116.09423571]
      },
      'lombok tengah': {
        'province': 'Nusa Tenggara Barat',
        'center': [-8.72295634388, 116.28929957]
      },
      'lombok timur': {
        'province': 'Nusa Tenggara Barat',
        'center': [-8.53279527692, 116.53081238]
      },
      'sumbawa': {
        'province': 'Nusa Tenggara Barat',
        'center': [-8.70322122535, 117.484938193]
      },
      'dompu': {
        'province': 'Nusa Tenggara Barat',
        'center': [-8.47214197891, 118.216806232]
      },
      'bima': {
        'province': 'Nusa Tenggara Barat',
        'center': [-8.45579929157, 118.784906066]
      },
      'sumbawa barat': {
        'province': 'Nusa Tenggara Barat',
        'center': [-8.82970870124, 116.915057847]
      },
      'lombok utara': {
        'province': 'Nusa Tenggara Barat',
        'center': [-8.34904049342, 116.283497366]
      },
      'mataram': {
        'province': 'Nusa Tenggara Barat',
        'center': [-8.59026842429, 116.111093124]
      },
      'sumba barat': {
        'province': 'Nusa Tenggara Timur',
        'center': [-9.64218080955, 119.379713933]
      },
      'sumba timur': {
        'province': 'Nusa Tenggara Timur',
        'center': [-9.87729798587, 120.254968005]
      },
      'kupang': {
        'province': 'Nusa Tenggara Timur',
        'center': [-9.91821364458, 123.859956712]
      },
      'timor tengah selatan': {
        'province': 'Nusa Tenggara Timur',
        'center': [-9.82795067934, 124.396761407]
      },
      'timor tengah utara': {
        'province': 'Nusa Tenggara Timur',
        'center': [-9.37733465034, 124.569662939]
      },
      'belu': {
        'province': 'Nusa Tenggara Timur',
        'center': [-9.15384981, 124.968444454]
      },
      'alor': {
        'province': 'Nusa Tenggara Timur',
        'center': [-8.30368536815, 124.56876932]
      },
      'lembata': {
        'province': 'Nusa Tenggara Timur',
        'center': [-8.3802807183, 123.542344219]
      },
      'flores timur': {
        'province': 'Nusa Tenggara Timur',
        'center': [-8.36509421468, 122.944422865]
      },
      'sikka': {
        'province': 'Nusa Tenggara Timur',
        'center': [-8.60866206272, 122.303721465]
      },
      'ende': {
        'province': 'Nusa Tenggara Timur',
        'center': [-8.67723940082, 121.734131515]
      },
      'ngada': {
        'province': 'Nusa Tenggara Timur',
        'center': [-8.66752696142, 121.001181872]
      },
      'manggarai': {
        'province': 'Nusa Tenggara Timur',
        'center': [-8.56936098044, 120.401522178]
      },
      'rote ndao': {
        'province': 'Nusa Tenggara Timur',
        'center': [-10.7260353441, 123.124357248]
      },
      'manggarai barat': {
        'province': 'Nusa Tenggara Timur',
        'center': [-8.60254344279, 119.988922041]
      },
      'sumba tengah': {
        'province': 'Nusa Tenggara Timur',
        'center': [-9.54771307855, 119.665622584]
      },
      'sumba barat daya': {
        'province': 'Nusa Tenggara Timur',
        'center': [-9.53424332938, 119.180036328]
      },
      'nagekeo': {
        'province': 'Nusa Tenggara Timur',
        'center': [-8.68870878996, 121.273011651]
      },
      'manggarai timur': {
        'province': 'Nusa Tenggara Timur',
        'center': [-8.57164218646, 120.690596358]
      },
      'sabu raijua': {
        'province': 'Nusa Tenggara Timur',
        'center': [-10.5357433942, 121.844354321]
      },
      'malaka': {
        'province': 'Nusa Tenggara Timur',
        'center': [-9.52175695175, 124.889334541]
      },
      'kota kupang': {
        'province': 'Nusa Tenggara Timur',
        'center': [-10.2042973095, 123.60718424]
      },
      'sambas': {
        'province': 'Kalimantan Barat',
        'center': [1.42950159419, 109.346316547]
      },
      'bengkayang': {
        'province': 'Kalimantan Barat',
        'center': [1.01060275428, 109.563118304]
      },
      'landak': {
        'province': 'Kalimantan Barat',
        'center': [0.516558358335, 109.771180319]
      },
      'pontianak': {
        'province': 'Kalimantan Barat',
        'center': [-0.025214451392, 109.331405566]
      },
      'sanggau': {
        'province': 'Kalimantan Barat',
        'center': [0.268937840532, 110.432011125]
      },
      'ketapang': {
        'province': 'Kalimantan Barat',
        'center': [-1.63312063005, 110.61387426]
      },
      'sintang': {
        'province': 'Kalimantan Barat',
        'center': [0.0934331966074, 112.070006791]
      },
      'kapuas hulu': {
        'province': 'Kalimantan Barat',
        'center': [0.83216065711, 112.799881418]
      },
      'sekadau': {
        'province': 'Kalimantan Barat',
        'center': [-0.00387937615548, 110.95131858]
      },
      'melawi': {
        'province': 'Kalimantan Barat',
        'center': [-0.631342150656, 111.727894193]
      },
      'kayong utara': {
        'province': 'Kalimantan Barat',
        'center': [-1.09205523804, 109.924674332]
      },
      'kubu raya': {
        'province': 'Kalimantan Barat',
        'center': [-0.386562290398, 109.53760499]
      },
      'singkawang': {
        'province': 'Kalimantan Barat',
        'center': [0.898496301968, 109.034917828]
      },
      'kotawaringin barat': {
        'province': 'Kalimantan Tengah',
        'center': [-2.54597953453, 111.746751633]
      },
      'kotawaringin timur': {
        'province': 'Kalimantan Tengah',
        'center': [-2.06487961797, 112.713003889]
      },
      'kapuas': {
        'province': 'Kalimantan Tengah',
        'center': [-1.74719463578, 114.297911934]
      },
      'barito selatan': {
        'province': 'Kalimantan Tengah',
        'center': [-1.81162772893, 114.906027015]
      },
      'barito utara': {
        'province': 'Kalimantan Tengah',
        'center': [-0.931036756934, 115.133895963]
      },
      'sukamara': {
        'province': 'Kalimantan Tengah',
        'center': [-2.62319551792, 111.160836888]
      },
      'lamandau': {
        'province': 'Kalimantan Tengah',
        'center': [-1.80047628609, 111.406625359]
      },
      'seruyan': {
        'province': 'Kalimantan Tengah',
        'center': [-2.2807098776, 112.175560639]
      },
      'katingan': {
        'province': 'Kalimantan Tengah',
        'center': [-1.69852489712, 113.059689734]
      },
      'pulang pisau': {
        'province': 'Kalimantan Tengah',
        'center': [-2.71593444487, 113.954579179]
      },
      'gunung mas': {
        'province': 'Kalimantan Tengah',
        'center': [-1.02557182351, 113.533111961]
      },
      'barito timur': {
        'province': 'Kalimantan Tengah',
        'center': [-1.98079309321, 115.14657423]
      },
      'murung raya': {
        'province': 'Kalimantan Tengah',
        'center': [-0.0302334843462, 114.279556309]
      },
      'palangka raya': {
        'province': 'Kalimantan Tengah',
        'center': [-2.01845736643, 113.769071379]
      },
      'tanah laut': {
        'province': 'Kalimantan Selatan',
        'center': [-3.81950752619, 114.903469882]
      },
      'kota baru': {
        'province': 'Kalimantan Selatan',
        'center': [-2.98689548917, 116.065426574]
      },
      'barito kuala': {
        'province': 'Kalimantan Selatan',
        'center': [-3.0915654697, 114.624742111]
      },
      'tapin': {
        'province': 'Kalimantan Selatan',
        'center': [-2.92470099696, 115.047861186]
      },
      'hulu sungai selatan': {
        'province': 'Kalimantan Selatan',
        'center': [-2.7282747977, 115.206867979]
      },
      'hulu sungai tengah': {
        'province': 'Kalimantan Selatan',
        'center': [-2.60349136585, 115.502134448]
      },
      'hulu sungai utara': {
        'province': 'Kalimantan Selatan',
        'center': [-2.43783842968, 115.153764684]
      },
      'tabalong': {
        'province': 'Kalimantan Selatan',
        'center': [-1.85770482874, 115.499093318]
      },
      'tanah bumbu': {
        'province': 'Kalimantan Selatan',
        'center': [-3.44498625214, 115.653688098]
      },
      'balangan': {
        'province': 'Kalimantan Selatan',
        'center': [-2.31916075212, 115.642412855]
      },
      'banjarmasin': {
        'province': 'Kalimantan Selatan',
        'center': [-3.32934609898, 114.591913226]
      },
      'banjar baru': {
        'province': 'Kalimantan Selatan',
        'center': [-3.47644430601, 114.818391828]
      },
      'paser': {
        'province': 'Kalimantan Timur',
        'center': [-1.73330779819, 116.094838724]
      },
      'kutai barat': {
        'province': 'Kalimantan Timur',
        'center': [-0.505959352962, 115.834365251]
      },
      'kutai kartanegara': {
        'province': 'Kalimantan Timur',
        'center': [0.0906523018851, 116.509576675]
      },
      'kutai timur': {
        'province': 'Kalimantan Timur',
        'center': [0.957951228021, 117.138140397]
      },
      'berau': {
        'province': 'Kalimantan Timur',
        'center': [1.91737178957, 117.314640711]
      },
      'penajam paser utara': {
        'province': 'Kalimantan Timur',
        'center': [-1.15739066631, 116.59778264]
      },
      'mahakam ulu': {
        'province': 'Kalimantan Timur',
        'center': [0.723441358516, 114.864588669]
      },
      'balikpapan': {
        'province': 'Kalimantan Timur',
        'center': [-1.1600865649, 116.86606996]
      },
      'samarinda': {
        'province': 'Kalimantan Timur',
        'center': [-0.500699834786, 117.178677397]
      },
      'bontang': {
        'province': 'Kalimantan Timur',
        'center': [0.0910191494618, 117.457202054]
      },
      'malinau': {
        'province': 'Kalimantan Utara',
        'center': [2.47785119345, 115.714733738]
      },
      'bulungan': {
        'province': 'Kalimantan Utara',
        'center': [2.80142944956, 117.024568288]
      },
      'tana tidung': {
        'province': 'Kalimantan Utara',
        'center': [3.54970063623, 117.16995179]
      },
      'nunukan': {
        'province': 'Kalimantan Utara',
        'center': [3.99415454908, 116.662699342]
      },
      'tarakan': {
        'province': 'Kalimantan Utara',
        'center': [3.35494463745, 117.600686432]
      },
      'bolaang mongondow': {
        'province': 'Sulawesi Utara',
        'center': [0.709338237018, 124.038525216]
      },
      'minahasa': {
        'province': 'Sulawesi Utara',
        'center': [1.25468306252, 124.854166283]
      },
      'kepulauan sangihe': {
        'province': 'Sulawesi Utara',
        'center': [3.55070251694, 125.541310314]
      },
      'kepulauan talaud': {
        'province': 'Sulawesi Utara',
        'center': [4.22603433983, 126.781826566]
      },
      'minahasa selatan': {
        'province': 'Sulawesi Utara',
        'center': [1.08461864252, 124.521036078]
      },
      'minahasa utara': {
        'province': 'Sulawesi Utara',
        'center': [1.54970396025, 125.008014263]
      },
      'bolaang mongondow utara': {
        'province': 'Sulawesi Utara',
        'center': [0.766628368282, 123.473431244]
      },
      'siau tagulandang biaro': {
        'province': 'Sulawesi Utara',
        'center': [2.53982435541, 125.397015582]
      },
      'minahasa tenggara': {
        'province': 'Sulawesi Utara',
        'center': [1.01032297545, 124.721780583]
      },
      'bolaang mongondow selatan': {
        'province': 'Sulawesi Utara',
        'center': [0.444150555294, 123.932707554]
      },
      'bolaang mongondow timur': {
        'province': 'Sulawesi Utara',
        'center': [0.718786053126, 124.510336352]
      },
      'manado': {
        'province': 'Sulawesi Utara',
        'center': [1.52471134468, 124.848553336]
      },
      'bitung': {
        'province': 'Sulawesi Utara',
        'center': [1.48478776548, 125.161431482]
      },
      'tomohon': {
        'province': 'Sulawesi Utara',
        'center': [1.32431217326, 124.814900277]
      },
      'kotamobagu': {
        'province': 'Sulawesi Utara',
        'center': [0.73199922838, 124.313673935]
      },
      'banggai kepulauan': {
        'province': 'Sulawesi Tengah',
        'center': [-1.37222653088, 123.143782969]
      },
      'banggai': {
        'province': 'Sulawesi Tengah',
        'center': [-1.0208285925, 122.583642801]
      },
      'morowali': {
        'province': 'Sulawesi Tengah',
        'center': [-2.69359611165, 121.91336267]
      },
      'poso': {
        'province': 'Sulawesi Tengah',
        'center': [-1.68082267747, 120.521094889]
      },
      'donggala': {
        'province': 'Sulawesi Tengah',
        'center': [-0.395871403392, 119.83572137]
      },
      'toli-toli': {
        'province': 'Sulawesi Tengah',
        'center': [0.926045392474, 120.718934868]
      },
      'buol': {
        'province': 'Sulawesi Tengah',
        'center': [0.97797648988, 121.372778705]
      },
      'parigi moutong': {
        'province': 'Sulawesi Tengah',
        'center': [0.0165347718344, 120.451263882]
      },
      'tojo una-una': {
        'province': 'Sulawesi Tengah',
        'center': [-1.11236413057, 121.576235657]
      },
      'sigi': {
        'province': 'Sulawesi Tengah',
        'center': [-1.40848612809, 119.970443753]
      },
      'banggai laut': {
        'province': 'Sulawesi Tengah',
        'center': [-1.78884917157, 123.534605142]
      },
      'morowali utara': {
        'province': 'Sulawesi Tengah',
        'center': [-1.8145562776, 121.384968297]
      },
      'palu': {
        'province': 'Sulawesi Tengah',
        'center': [-0.829801082077, 119.909974006]
      },
      'kepulauan selayar': {
        'province': 'Sulawesi Selatan',
        'center': [-6.56188428005, 120.715253093]
      },
      'bulukumba': {
        'province': 'Sulawesi Selatan',
        'center': [-5.43246919682, 120.236006589]
      },
      'bantaeng': {
        'province': 'Sulawesi Selatan',
        'center': [-5.48818936089, 119.986911259]
      },
      'jeneponto': {
        'province': 'Sulawesi Selatan',
        'center': [-5.56751730429, 119.698446855]
      },
      'takalar': {
        'province': 'Sulawesi Selatan',
        'center': [-5.41983157703, 119.470578037]
      },
      'gowa': {
        'province': 'Sulawesi Selatan',
        'center': [-5.30927117692, 119.718683505]
      },
      'sinjai': {
        'province': 'Sulawesi Selatan',
        'center': [-5.20974633608, 120.135866853]
      },
      'maros': {
        'province': 'Sulawesi Selatan',
        'center': [-5.00069625804, 119.724749126]
      },
      'pangkajene dan kepulauan': {
        'province': 'Sulawesi Selatan',
        'center': [-4.93983547501, 119.478686126]
      },
      'barru': {
        'province': 'Sulawesi Selatan',
        'center': [-4.44167780599, 119.694145323]
      },
      'bone': {
        'province': 'Sulawesi Selatan',
        'center': [-4.695119428, 120.129795176]
      },
      'soppeng': {
        'province': 'Sulawesi Selatan',
        'center': [-4.33904554572, 119.89211098]
      },
      'wajo': {
        'province': 'Sulawesi Selatan',
        'center': [-4.00653765735, 120.171000069]
      },
      'sidenreng rappang': {
        'province': 'Sulawesi Selatan',
        'center': [-3.80729004049, 119.971426837]
      },
      'pinrang': {
        'province': 'Sulawesi Selatan',
        'center': [-3.62245662701, 119.599916419]
      },
      'enrekang': {
        'province': 'Sulawesi Selatan',
        'center': [-3.50372386266, 119.872029971]
      },
      'luwu': {
        'province': 'Sulawesi Selatan',
        'center': [-3.19855035666, 120.182551286]
      },
      'tana toraja': {
        'province': 'Sulawesi Selatan',
        'center': [-3.10851245786, 119.712375317]
      },
      'luwu utara': {
        'province': 'Sulawesi Selatan',
        'center': [-2.39526371409, 120.160900988]
      },
      'luwu timur': {
        'province': 'Sulawesi Selatan',
        'center': [-2.55067976206, 121.138512852]
      },
      'toraja utara': {
        'province': 'Sulawesi Selatan',
        'center': [-2.88817967907, 119.868933783]
      },
      'makassar': {
        'province': 'Sulawesi Selatan',
        'center': [-5.13341699959, 119.461147829]
      },
      'parepare': {
        'province': 'Sulawesi Selatan',
        'center': [-4.02935193759, 119.661602504]
      },
      'palopo': {
        'province': 'Sulawesi Selatan',
        'center': [-2.98047064463, 120.147894274]
      },
      'buton': {
        'province': 'Sulawesi Tenggara',
        'center': [-5.36775484531, 122.733305867]
      },
      'muna': {
        'province': 'Sulawesi Tenggara',
        'center': [-4.90221487032, 122.595329183]
      },
      'konawe': {
        'province': 'Sulawesi Tenggara',
        'center': [-3.52539567148, 121.886158071]
      },
      'kolaka': {
        'province': 'Sulawesi Tenggara',
        'center': [-4.07481429462, 121.528456884]
      },
      'konawe selatan': {
        'province': 'Sulawesi Tenggara',
        'center': [-4.11441592973, 123.095054507]
      },
      'bombana': {
        'province': 'Sulawesi Tenggara',
        'center': [-4.79778926902, 121.850750721]
      },
      'wakatobi': {
        'province': 'Sulawesi Tenggara',
        'center': [-5.57534152308, 123.795211104]
      },
      'kolaka utara': {
        'province': 'Sulawesi Tenggara',
        'center': [-3.24771892067, 121.156266246]
      },
      'buton utara': {
        'province': 'Sulawesi Tenggara',
        'center': [-4.70149651725, 123.015946322]
      },
      'konawe utara': {
        'province': 'Sulawesi Tenggara',
        'center': [-3.38521017777, 121.996977817]
      },
      'kolaka timur': {
        'province': 'Sulawesi Tenggara',
        'center': [-3.80458822733, 121.617120605]
      },
      'kendari': {
        'province': 'Sulawesi Tenggara',
        'center': [-4.00039272863, 122.532588571]
      },
      'baubau': {
        'province': 'Sulawesi Tenggara',
        'center': [-5.42990079996, 122.6752717]
      },
      'boalemo': {
        'province': 'Gorontalo',
        'center': [0.65573158801, 122.325832517]
      },
      'gorontalo': {
        'province': 'Gorontalo',
        'center': [0.539760397302, 123.056895168]
      },
      'pohuwato': {
        'province': 'Gorontalo',
        'center': [0.688010863255, 121.71111044]
      },
      'bone bolango': {
        'province': 'Gorontalo',
        'center': [0.533160895942, 123.290874487]
      },
      'gorontalo utara': {
        'province': 'Gorontalo',
        'center': [0.885921800219, 122.661436607]
      },
      'majene': {
        'province': 'Sulawesi Barat',
        'center': [-3.16775943567, 118.919464437]
      },
      'polewali mandar': {
        'province': 'Sulawesi Barat',
        'center': [-3.31194528243, 119.144481655]
      },
      'mamasa': {
        'province': 'Sulawesi Barat',
        'center': [-2.94880472989, 119.311892159]
      },
      'mamuju': {
        'province': 'Sulawesi Barat',
        'center': [-2.53067529384, 119.324967889]
      },
      'mamuju utara': {
        'province': 'Sulawesi Barat',
        'center': [-1.48566422403, 119.507207304]
      },
      'mamuju tengah': {
        'province': 'Sulawesi Barat',
        'center': [-2.00776800492, 119.518437255]
      },
      'maluku tenggara barat': {
        'province': 'Maluku',
        'center': [-7.57942034076, 131.366763131]
      },
      'maluku tenggara': {
        'province': 'Maluku',
        'center': [-5.67412441423, 132.887916812]
      },
      'maluku tengah': {
        'province': 'Maluku',
        'center': [-3.1594928422, 129.291335305]
      },
      'buru': { 'province': 'Maluku', 'center': [-3.30293813206, 126.721285343] },
      'kepulauan aru': {
        'province': 'Maluku',
        'center': [-6.19540059176, 134.450114271]
      },
      'seram bagian barat': {
        'province': 'Maluku',
        'center': [-3.13051623852, 128.356677477]
      },
      'seram bagian timur': {
        'province': 'Maluku',
        'center': [-3.42131965447, 130.443862631]
      },
      'maluku barat daya': {
        'province': 'Maluku',
        'center': [-7.83234310614, 127.31096988]
      },
      'buru selatan': {
        'province': 'Maluku',
        'center': [-3.58276789683, 126.576386214]
      },
      'ambon': { 'province': 'Maluku', 'center': [-3.67721936391, 128.179989716] },
      'tual': { 'province': 'Maluku', 'center': [-5.55834619885, 132.449508378] },
      'halmahera barat': {
        'province': 'Maluku Utara',
        'center': [1.36416236985, 127.589665298]
      },
      'halmahera tengah': {
        'province': 'Maluku Utara',
        'center': [0.402740883761, 128.282196498]
      },
      'kepulauan sula': {
        'province': 'Maluku Utara',
        'center': [-1.96329660537, 125.839074442]
      },
      'halmahera selatan': {
        'province': 'Maluku Utara',
        'center': [-0.819602248046, 127.702007978]
      },
      'halmahera utara': {
        'province': 'Maluku Utara',
        'center': [1.54231318305, 127.83106241]
      },
      'halmahera timur': {
        'province': 'Maluku Utara',
        'center': [1.0311731706, 128.308555505]
      },
      'pulau morotai': {
        'province': 'Maluku Utara',
        'center': [2.31657836336, 128.448358071]
      },
      'pulau taliabu': {
        'province': 'Maluku Utara',
        'center': [-1.81885998118, 124.740642227]
      },
      'ternate': {
        'province': 'Maluku Utara',
        'center': [0.838836762738, 127.172577016]
      },
      'tidore kepulauan': {
        'province': 'Maluku Utara',
        'center': [0.485191714252, 127.673670222]
      },
      'fakfak': {
        'province': 'Papua Barat',
        'center': [-3.05930092257, 132.912084534]
      },
      'kaimana': {
        'province': 'Papua Barat',
        'center': [-3.61302776813, 134.022503221]
      },
      'teluk wondama': {
        'province': 'Papua Barat',
        'center': [-2.82281102027, 134.374487062]
      },
      'teluk bintuni': {
        'province': 'Papua Barat',
        'center': [-2.00309822292, 133.308511104]
      },
      'manokwari': {
        'province': 'Papua Barat',
        'center': [-0.909981880718, 133.852578696]
      },
      'sorong selatan': {
        'province': 'Papua Barat',
        'center': [-1.71623741533, 132.150483334]
      },
      'sorong': {
        'province': 'Papua Barat',
        'center': [-0.87047647989, 131.337838309]
      },
      'raja ampat': {
        'province': 'Papua Barat',
        'center': [-0.900147619229, 130.574279566]
      },
      'tambrauw': {
        'province': 'Papua Barat',
        'center': [-0.806709430578, 132.751132702]
      },
      'maybrat': {
        'province': 'Papua Barat',
        'center': [-1.32224751655, 132.375680159]
      },
      'manokwari selatan': {
        'province': 'Papua Barat',
        'center': [-1.59417727806, 133.972088885]
      },
      'pegunungan arfak': {
        'province': 'Papua Barat',
        'center': [-1.19541266262, 133.733704777]
      },
      'merauke': { 'province': 'Papua', 'center': [-7.84014897121, 139.704340709] },
      'jayawijaya': {
        'province': 'Papua',
        'center': [-4.08825616392, 138.869338227]
      },
      'jayapura': { 'province': 'Papua', 'center': [-2.65935200185, 140.808897143] },
      'nabire': { 'province': 'Papua', 'center': [-3.37655490856, 135.584324782] },
      'kepulauan yapen': {
        'province': 'Papua',
        'center': [-1.74569820414, 136.174134507]
      },
      'biak numfor': {
        'province': 'Papua',
        'center': [-1.00399425233, 135.844315612]
      },
      'paniai': { 'province': 'Papua', 'center': [-3.80519947649, 136.49284121] },
      'puncak jaya': {
        'province': 'Papua',
        'center': [-3.46021562564, 137.843757263]
      },
      'mimika': { 'province': 'Papua', 'center': [-4.50049621677, 136.693886004] },
      'boven digoel': {
        'province': 'Papua',
        'center': [-5.98700113895, 140.366451457]
      },
      'mappi': { 'province': 'Papua', 'center': [-6.49580571321, 139.399014473] },
      'asmat': { 'province': 'Papua', 'center': [-5.3690803202, 138.560350916] },
      'yahukimo': { 'province': 'Papua', 'center': [-4.48920657622, 139.603251036] },
      'pegunungan bintang': {
        'province': 'Papua',
        'center': [-4.51749824794, 140.532694627]
      },
      'tolikara': { 'province': 'Papua', 'center': [-3.48392800799, 138.408586737] },
      'sarmi': { 'province': 'Papua', 'center': [-2.47187834179, 139.003167381] },
      'keerom': { 'province': 'Papua', 'center': [-3.33212954834, 140.683260153] },
      'waropen': { 'province': 'Papua', 'center': [-2.74696783169, 136.728184995] },
      'supiori': { 'province': 'Papua', 'center': [-0.732093117579, 135.564655411] },
      'mamberamo raya': {
        'province': 'Papua',
        'center': [-2.48962220992, 137.969066959]
      },
      'nduga': { 'province': 'Papua', 'center': [-4.4273930985, 138.240472784] },
      'lanny jaya': {
        'province': 'Papua',
        'center': [-3.98566686695, 138.270982482]
      },
      'mamberamo tengah': {
        'province': 'Papua',
        'center': [-3.60863415765, 139.027664672]
      },
      'yalimo': { 'province': 'Papua', 'center': [-3.81387896873, 139.45859216] },
      'puncak': { 'province': 'Papua', 'center': [-3.61954124075, 137.400032177] },
      'dogiyai': { 'province': 'Papua', 'center': [-4.01685542334, 135.667599443] },
      'intan jaya': {
        'province': 'Papua',
        'center': [-3.53638684273, 136.744808089]
      },
      'deiyai': { 'province': 'Papua', 'center': [-4.14028972199, 136.384615475] },
      'Bali': { 'province': 'Bali', 'center': [-8.36973255954, 115.132168072] },
      'Nusa Tenggara Barat': {
        'province': 'Nusa Tenggara Barat',
        'center': [-8.60664308169, 117.508502604]
      },
      'Banten': { 'province': 'Banten', 'center': [-6.4560436924, 106.109003345] },
      'Jawa Tengah': {
        'province': 'Jawa Tengah',
        'center': [-7.25948735657, 110.20004621]
      },
      'Jawa Barat': {
        'province': 'Jawa Barat',
        'center': [-6.91984099888, 107.603019928]
      },
      'Kalimantan Tengah': {
        'province': 'Kalimantan Tengah',
        'center': [-1.59986833375, 113.416768894]
      },
      'Kalimantan Selatan': {
        'province': 'Kalimantan Selatan',
        'center': [-3.00041784628, 115.435540688]
      },
      'Kalimantan Barat': {
        'province': 'Kalimantan Barat',
        'center': [-0.0848925686634, 111.121996064]
      },
      'Sulawesi Tengah': {
        'province': 'Sulawesi Tengah',
        'center': [-1.00566716709, 121.204195805]
      },
      'Gorontalo': {
        'province': 'Gorontalo',
        'center': [0.686199890399, 122.378574556]
      },
      'Sulawesi Utara': {
        'province': 'Sulawesi Utara',
        'center': [1.26232917435, 124.523721467]
      },
      'Sulawesi Selatan': {
        'province': 'Sulawesi Selatan',
        'center': [-3.70844057841, 120.173198612]
      },
      'Sulawesi Tenggara': {
        'province': 'Sulawesi Tenggara',
        'center': [-4.14210580132, 122.078902867]
      },
      'Sulawesi Barat': {
        'province': 'Sulawesi Barat',
        'center': [-2.46403742395, 119.3428688]
      },
      'Aceh': { 'province': 'Aceh', 'center': [4.22568208825, 96.9100985353] },
      'Bengkulu': {
        'province': 'Bengkulu',
        'center': [-3.55942250949, 102.342881214]
      },
      'Jambi': { 'province': 'Jambi', 'center': [-1.697925239, 102.718958759] },
      'Lampung': { 'province': 'Lampung', 'center': [-4.91741365604, 105.020973741] },
      'Riau': { 'province': 'Riau', 'center': [0.509489372568, 101.817168906] },
      'Sumatera Barat': {
        'province': 'Sumatera Barat',
        'center': [-0.841344968749, 100.464249647]
      },
      'Sumatera Selatan': {
        'province': 'Sumatera Selatan',
        'center': [-3.21342238304, 104.168798179]
      },
      'Sumatera Utara': {
        'province': 'Sumatera Utara',
        'center': [2.19265505812, 99.0510137796]
      },
      'Nusa Tenggara Timur': {
        'province': 'Nusa Tenggara Timur',
        'center': [-9.26053073914, 122.179813719]
      },
      'Maluku': { 'province': 'Maluku', 'center': [-4.74070528384, 129.850905684] },
      'Maluku Utara': {
        'province': 'Maluku Utara',
        'center': [0.212859801992, 127.539815607]
      },
      'Jawa Timur': {
        'province': 'Jawa Timur',
        'center': [-7.72095096893, 112.726913253]
      },
      'Kepulauan Bangka Belitung': {
        'province': 'Kepulauan Bangka Belitung',
        'center': [-2.42164574375, 106.574940677]
      },
      'Kepulauan Riau': {
        'province': 'Kepulauan Riau',
        'center': [1.48126244893, 105.404211405]
      },
      'Papua': { 'province': 'Papua', 'center': [-4.65867452699, 138.695140787] },
      'Papua Barat': {
        'province': 'Papua Barat',
        'center': [-2.04271934888, 132.972376543]
      },
      'Kalimantan Timur': {
        'province': 'Kalimantan Timur',
        'center': [0.453493733739, 116.459483436]
      },
      'Kalimantan Utara': {
        'province': 'Kalimantan Utara',
        'center': [2.9182033782, 116.249394237]
      },
      'Daerah Istimewa Yogyakarta': {
        'province': 'Daerah Istimewa Yogyakarta',
        'center': [-7.89510163766, 110.445807952]
      },
      'Daerah Khusus Ibukota Jakarta': {
        'province': 'Daerah Khusus Ibukota Jakarta',
        'center': [-6.19875625864, 106.834075859]
      }
    },
    'region_center': [-2.465463549999999, 118.01541650000001],
    'start_city_center': [-6.1754, 106.8271],
    'starting_zoom': 5.5,
    'minimum_zoom': 5
  }
};

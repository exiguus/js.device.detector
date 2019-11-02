import vendorConfig from './vendor.config';

const config = {
      'browsers': {
        'names': {
          'edge': {
            'id': 'edge',
            'name': 'Microsoft Edge',
            'pattern': vendorConfig.vendors.microsoft.edge.pattern,
          },
          'ie': {
            'id': 'msie',
            'name': 'Microsoft Internet Explorer',
            'pattern': vendorConfig.vendors.microsoft.ie.pattern,
          },
          'ieMobile': {
            'id': 'ieMobile',
            'name': 'Microsoft Internet Explorer Mobile',
            'pattern': vendorConfig.vendors.microsoft.ieMobile.pattern,
          },
          'chrome': {
            'id': 'chrome',
            'name': 'Google Chrome',
            'pattern': vendorConfig.vendors.google.chrome.pattern,
          },
          'safari': {
            'id': 'safari',
            'name': 'Apple Safari',
            'pattern': vendorConfig.vendors.apple.safari.pattern,
          },
          'firefox': {
            'id': 'firefox',
            'name': 'Mozilla Firefox',
            'pattern': vendorConfig.vendors.mozilla.firefox.pattern,
          },
          'opera': {
            'id': 'opera',
            'name': 'Opera',
            'pattern': vendorConfig.vendors.opera.opera.pattern,
          },
          'operaMini': {
            'id': 'operaMini',
            'name': 'Opera Mini',
            'pattern': vendorConfig.vendors.opera.operaMini.pattern,
          },
          'blackberry': {
            'id': 'blackberry',
            'name': 'BlackBerry',
            'pattern': vendorConfig.vendors.blackberry.blackberry.pattern,
          },
        },
        'versions': {
          'default': {
            'index': 'rv:',
            'map': 3,
          },
          'edge': {
            'index': 'edge/',
            'map': 5,
          },
          'msie': {
            'index': 'msie ',
            'map': 5,
          },
          'ieMobile': {
            'index': 'iemobile/',
            'map': 9,
          },
          'chrome': {
            'index': 'chrome/',
            'map': 7,
          },
          'firefox': {
            'index': 'firefox/',
            'map': 8,
          },
          'opr': {
            'index': 'opr/',
            'map': 4,
          },
          'operaMini': {
            'index': 'opera/',
            'map': 6,
          },
          'opera': {
            'index': 'opera ',
            'map': 5,
          },
          'safari': {
            'index': 'version/',
            'map': 8,
          },
        },
      },
    };
export default config;

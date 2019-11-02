import vendorConfig from './vendor.config';

const config = {
  'oss': {
    'names': {
      'windowsPhone': {
        'id': 'windowsPhone',
        'name': 'Microsoft Windows Phone',
        'pattern': vendorConfig.vendors.microsoft.windowsPhone.pattern,
      },
      'windowsXp': {
        'id': 'windowsXp',
        'name': 'Microsoft Windows XP',
        'pattern': vendorConfig.vendors.microsoft.windowsXp.pattern,
      },
      'windowsVista': {
        'id': 'windowsVista',
        'name': 'Microsoft Windows Vista',
        'pattern': vendorConfig.vendors.microsoft.windowsVista.pattern,
      },
      'windows7': {
        'id': 'windows7',
        'name': 'Microsoft Windows 7',
        'pattern': vendorConfig.vendors.microsoft.windows7.pattern,
      },
      'window8': {
        'id': 'windows8',
        'name': 'Microsoft Windows 8',
        'pattern': vendorConfig.vendors.microsoft.windows8.pattern,
      },
      'window81': {
        'id': 'windows81',
        'name': 'Microsoft Windows 8.1',
        'pattern': vendorConfig.vendors.microsoft.windows81.pattern,
      },
      'windows10': {
        'id': 'windows10',
        'name': 'Microsoft Windows 10',
        'pattern': vendorConfig.vendors.microsoft.windows10.pattern,
      },
      'macos': {
        'id': 'macos',
        'name': 'Apple Mac OS X',
        'pattern': vendorConfig.vendors.apple.macos.pattern,
      },
      'ios': {
        'id': 'ios',
        'name': 'Apple iOS',
        'pattern': vendorConfig.vendors.apple.ios.pattern,
      },
      'android': {
        'id': 'android',
        'name': 'Android Linux',
        'pattern': vendorConfig.vendors.google.android.pattern,
      },
      'linux': {
        'id': 'linux',
        'name': 'GNU/Linux OS',
        'pattern': vendorConfig.vendors.lbu.linux.pattern,
      },
      'bsd': {
        'id': 'bsd',
        'name': 'BSD OS',
        'pattern': vendorConfig.vendors.lbu.bsd.pattern,
      },
      'blackberry': {
        'id': 'blackberry',
        'name': 'BlackBerry OS',
        'pattern': vendorConfig.vendors.blackberry.blackberry.pattern,
      },
    },
    'versions': {
      'windowsPhone': {
        'index': vendorConfig.vendors.microsoft.windowsPhone.pattern.include,
        'map': 14,
        'cut': /;|\)/,
        'chop': '.',
      },
      'windowsXp': {
        'index': vendorConfig.vendors.microsoft.windowsXp.pattern.include,
        'map': 11,
        'cut': /;|\)/,
        'chop': '.',
      },
      'windowsVista': {
        'index': vendorConfig.vendors.microsoft.windowsVista.pattern.include,
        'map': 11,
        'cut': /;|\)/,
        'chop': '.',
      },
      'windows7': {
        'index': vendorConfig.vendors.microsoft.windows7.pattern.include,
        'map': 11,
        'cut': /;|\)/,
        'chop': '.',
      },
      'windows8': {
        'index': vendorConfig.vendors.microsoft.windows8.pattern.include,
        'map': 11,
        'cut': /;|\)/,
        'chop': '.',
      },
      'windows81': {
        'index': vendorConfig.vendors.microsoft.windows81.pattern.include,
        'map': 11,
        'cut': /;|\)/,
        'chop': '.',
      },
      'windows10': {
        'index': vendorConfig.vendors.microsoft.windows10.pattern.include,
        'map': 11,
        'cut': /;|\)/,
        'chop': '.',
      },
      'android': {
        'index': vendorConfig.vendors.google.android.pattern.include,
        'map': 8,
        'cut': /;|\)/,
        'chop': '.',
      },
      'ios': {
        'index': 'cpu os ',
        'map': 7,
        'cut': / |\)/,
        'chop': '_',
      },
      'iphone': {
        'index': 'iphone os ',
        'map': 10,
        'cut': / |\)/,
        'chop': '_',
      },
      'ipad': {
        'index': 'ipad os ',
        'map': 8,
        'cut': / |\)/,
        'chop': '_',
      },
      'macos': {
        'index': 'mac os x',
        'map': 9,
        'cut': / |\)|;/,
        'chop': /_|\./,
      },
      'bsd': {
        'index': vendorConfig.vendors.lbu.bsd.pattern.include,
        'map': 5,
        'cut': / |\)/,
        'chop': '.',
      },
      'linux': {
        'index': vendorConfig.vendors.lbu.linux.pattern.include,
        'map': 5,
        'cut': /;| |\)/,
        'chop': '.',
      },
      'blackberry': {
        'index': vendorConfig.vendors.blackberry.blackberry.pattern.include,
        'map': 10,
        'cut': /;|\)/,
        'chop': '.',
      },
    },
  },
};

export default config;

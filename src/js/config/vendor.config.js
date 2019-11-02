const config = {
  'vendors': {
    'apple': {
      'safari': {
        'pattern': {
          'include': 'safari',
          'exclude': ['chrome', 'iemobile', 'opr/', 'opera'],
        },
      },
      'iphone': {
        'pattern': {
          'include': 'iphone',
          'exclude': 'iemobile',
        },
      },
      'ipad': {
        'pattern': {
          'include': 'ipad',
          'exclude': 'iemobile',
        },
      },
      'ios': {
        'pattern': {
          'include': ['ipad', 'iphone', 'ipod'],
          'exclude': 'iemobile',
        },
      },
      'macos': {
        'pattern': {
          'include': 'mac os',
          'exclude': ['iphone', 'ipad', 'ipod'],
        },
      },
    },
    'google': {
      'chrome': {
        'pattern': {
          'include': 'chrome',
          'exclude': ['edge', 'msie', 'firefox', 'opr/', 'opera'],
        },
      },
      'android': {
        'pattern': {
          'include': 'android',
          'exclude': 'windows phone',
        },
      },
    },
    'mozilla': {
      'firefox': {
        'pattern': {
          'include': 'firefox',
          'exclude': '',
        },
      },
    },
    'microsoft': {
      'msie': {
        'pattern': {
          'include': ['trident', 'msie'],
          'exclude': 'iemobile',
        },
      },
      'edge': {
        'pattern': {
          'include': 'edge',
          'exclude': 'iemobile',
        },
      },
      'ie': {
        'pattern': {
          'include': [
            'trident',
            'msie',
            'edge',
          ],
          'exclude': 'iemobile',
        },
      },
      'ieMobile': {
        'pattern': {
          'include': 'iemobile',
          'exclude': '',
        },
      },
      'windows': {
        'pattern': {
          'include': 'windows nt',
          'exclude': '',
        },
      },
      'windowsMobile': {
        'pattern': {
          'include': 'windows phone',
          'exclude': '',
        },
      },
      'windowsXp': {
        'pattern': {
          'include': 'windows nt 5',
          'exclude': '',
        },
      },
      'windowsVista': {
        'pattern': {
          'include': 'windows nt 6.0',
          'exclude': '',
        },
      },
      'windows7': {
        'pattern': {
          'include': 'windows nt 6.1',
          'exclude': '',
        },
      },
      'windows8': {
        'pattern': {
          'include': 'windows nt 6.2',
          'exclude': '',
        },
      },
      'windows81': {
        'pattern': {
          'include': 'windows nt 6.3',
          'exclude': '',
        },
      },
      'windows10': {
        'pattern': {
          'include': 'windows nt 10.0',
          'exclude': '',
        },
      },
      'windowsPhone': {
        'pattern': {
          'include': 'windows phone',
          'exclude': '',
        },
      },
    },
    'opera': {
      'opera': {
        'pattern': {
          'include': ['opera', 'opr', 'presto'],
          'exclude': 'opera mini',
        },
      },
      'operaMini': {
        'pattern': {
          'include': 'opera mini',
          'exclude': '',
        },
      },
    },
    'blackberry': {
      'blackberry': {
        'pattern': {
          'include': 'blackberry',
          'exclude': '',
        },
      },
    },
    'lbu': {
      'linux': {
        'pattern': {
          'include': 'linux',
          'exclude': '',
        },
      },
      'bsd': {
        'pattern': {
          'include': ['bsd', 'unix', 'sunos'],
          'exclude': '',
        },
      },
      'unixlike': {
        'pattern': {
          'include': ['linux', 'bsd', 'unix', 'sunos', 'X11'],
          'exclude': ['mobile', 'tablet', 'phone', 'droid'],
        },
      },
    },
  },
};
export default config;

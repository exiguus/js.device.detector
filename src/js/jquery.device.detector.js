/**
 * @fileOverview device detector
  jQuery Plugin to get Device and Browser informations
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 1.0.0
 */

/**
 * @external "jQuery.fn"
 * @see {@link http://docs.jquery.com/Plugins/Authoring The jQuery Plugin Guide}
 */

(function($) {
  'use strict';
  /**
   * jQuery Methods to get Device and Browser informations
   * @function external:"jQuery.fn".deviceDetector
   * @external "jQuery.fn.deviceDetector"
   */

  $.fn.deviceDetector = function(options) {
    if (typeof options !== undefined) $.extend(true, config, options);
    return true;
  };

  /**
   * Method to detect mobile devices.
   * @function external:"jQuery.fn.deviceDetector".isMobile
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isMobile = function() {
    return isDeviceType(
      config.vendors.apple.ios.pattern.include,
      config.vendors.apple.ios.pattern.exclude
    ) ||
    isDeviceType(
      config.vendors.google.android.pattern.include,
      config.vendors.google.android.pattern.exclude
    ) ||
    isDeviceType(
      config.vendors.microsoft.windowsPhone.pattern.include,
      config.vendors.microsoft.windowsPhone.exclude
    ) ||
    isDeviceType(
      config.vendors.blackberry.blackberry.pattern.include,
      config.vendors.blackberry.blackberry.exclude
    ) ||
    isDeviceType(
      config.mobile.pattern.include,
      config.mobile.pattern.exclude
    );
  };

  /**
   * Method to detect desktop devices.
   * @function external:"jQuery.fn.deviceDetector".isDesktop
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isDesktop = function() {
    return isDeviceType(
      config.vendors.apple.macos.pattern.include,
      config.vendors.apple.macos.pattern.exclude
    ) ||
    isDeviceType(
      config.vendors.lbu.unixlike.pattern.include,
      config.vendors.lbu.unixlike.pattern.exclude
    ) ||
    isDeviceType(
      config.vendors.microsoft.windows.pattern.include,
      config.vendors.microsoft.windows.pattern.exclude
    );
  };

  /**
   * Method to detect Safari.
   * @function external:"jQuery.fn.deviceDetector".isSafari
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isSafari = function() {
    return isDeviceType(
      config.vendors.apple.safari.pattern.include,
      config.vendors.apple.safari.pattern.exclude
    );
  };

  /**
   * Method to detect iPad.
   * @function external:"jQuery.fn.deviceDetector".isIpad
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isIpad = function() {
    return isDeviceType(
      config.vendors.apple.ipad.pattern.include,
      config.vendors.apple.ipad.pattern.exclude
    );
  };

  /**
   * Method to detect iPhone.
   * @function external:"jQuery.fn.deviceDetector".isIphone
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isIphone = function() {
    return isDeviceType(
      config.vendors.apple.iphone.pattern.include,
      config.vendors.apple.iphone.pattern.exclude
    );
  };

  /**
   * Method to detect iOS.
   * @function external:"jQuery.fn.deviceDetector".isIos
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isIos = function() {
    return isDeviceType(
      config.vendors.apple.ios.pattern.include,
      config.vendors.apple.ios.pattern.exclude
    );
  };

  /**
   * Method to detect Mac OS.
   * @function external:"jQuery.fn.deviceDetector".isMacos
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isMacos = function() {
    return isDeviceType(
      config.vendors.apple.macos.pattern.include,
      config.vendors.apple.macos.pattern.exclude
    );
  };

  /**
   * Method to detect Chrome.
   * @function external:"jQuery.fn.deviceDetector".isChrome
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isChrome = function() {
    return isDeviceType(
      config.vendors.google.chrome.pattern.include,
      config.vendors.google.chrome.pattern.exclude
    );
  };

  /**
   * Method to detect Android.
   * @function external:"jQuery.fn.deviceDetector".isAndroid
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isAndroid = function() {
    return isDeviceType(
      config.vendors.google.android.pattern.include,
      config.vendors.google.android.pattern.exclude
    );
  };

  /**
   * Method to detect Firefox.
   * @function external:"jQuery.fn.deviceDetector".isFirefox
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isFirefox = function() {
    return isDeviceType(
      config.vendors.mozilla.firefox.pattern.include,
      config.vendors.mozilla.firefox.pattern.exclude
    );
  };

  /**
   * Method to detect Microsoft Internet Explorer (IE/Edge).
   * @function external:"jQuery.fn.deviceDetector".isMsie
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isMsie = function() {
    return isDeviceType(
      config.vendors.microsoft.msie.pattern.include,
      config.vendors.microsoft.msie.pattern.exclude
    );
  };

  /**
   * Method to detect Microsoft Edge.
   * @function external:"jQuery.fn.deviceDetector".isEdge
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isEdge = function() {
    return isDeviceType(
      config.vendors.microsoft.edge.pattern.include,
      config.vendors.microsoft.edge.pattern.exclude
    );
  };

  /**
   * Method to detect Internet Explorer.
   * @function external:"jQuery.fn.deviceDetector".isIe
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isIe = function() {
    return isDeviceType(
      config.vendors.microsoft.ie.pattern.include,
      config.vendors.microsoft.ie.pattern.exclude
    );
  };

  /**
   * Method to detect Microsoft Internet Explorer Mobile.
   * @function external:"jQuery.fn.deviceDetector".isIeMobile
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isIeMobile = function() {
    return isDeviceType(
      config.vendors.microsoft.ieMobile.pattern.include,
      config.vendors.microsoft.ieMobile.pattern.exclude
    );
  };

  /**
   * Method to detect Windows.
   * @function external:"jQuery.fn.deviceDetector".isWindows
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isWindows = function() {
    return isDeviceType(
      config.vendors.microsoft.windows.pattern.include,
      config.vendors.microsoft.windows.pattern.exclude
    );
  };

  /**
   * Method to detect Windows Phone.
   * @function external:"jQuery.fn.deviceDetector".isWindowsPhone
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isWindowsPhone = function() {
    return isDeviceType(
      config.vendors.microsoft.windowsPhone.pattern.include,
      config.vendors.microsoft.windowsPhone.pattern.exclude
    );
  };

  /**
   * Method to detect Opera.
   * @function external:"jQuery.fn.deviceDetector".isOpera
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isOpera = function() {
    return isDeviceType(
      config.vendors.opera.opera.pattern.include,
      config.vendors.opera.opera.pattern.exclude
    );
  };

  /**
   * Method to detect Opera Mini.
   * @function external:"jQuery.fn.deviceDetector".isOperaMini
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isOperaMini = function() {
    return isDeviceType(
      config.vendors.opera.operaMini.pattern.include,
      config.vendors.opera.operaMini.pattern.exclude
    );
  };

  /**
   * Method to detect BlackBerry.
   * @function external:"jQuery.fn.deviceDetector".isBlackberry
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isBlackberry = function() {
    return isDeviceType(
      config.vendors.blackberry.blackberry.pattern.include,
      config.vendors.blackberry.blackberry.pattern.exclude
    );
  };

  /**
   * Method to detect Linux.
   * @function external:"jQuery.fn.deviceDetector".isLinux
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isLinux = function() {
    return isDeviceType(
      config.vendors.lbu.linux.pattern.include,
      config.vendors.lbu.linux.pattern.exclude
    );
  };

  /**
   * Method to detect BSD/Unix.
   * @function external:"jQuery.fn.deviceDetector".isBsd
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isBsd = function() {
    return isDeviceType(
      config.vendors.lbu.bsd.pattern.include,
      config.vendors.lbu.bsd.pattern.exclude
    );
  };

  /**
   * Method to get Browser Version.
   * @function external:"jQuery.fn.deviceDetector".getVersion
   * @return {string} The browser version.
   */

  $.fn.deviceDetector.getBrowserVersion = function() {
    return getBrowserVersion();
  };

  /**
   * Method to get Browser Name.
   * @function external:"jQuery.fn.deviceDetector".getBrowserName
   * @return {string} The browser name.
   */

  $.fn.deviceDetector.getBrowserName = function() {
    return getBrowserName();
  };

  /**
   * Method to get Browser Id (Short Name).
   * @function external:"jQuery.fn.deviceDetector".getBrowserId
   * @return {string} The browser id.
   */

  $.fn.deviceDetector.getBrowserId = function() {
    return getBrowserName(true);
  };

  /**
   * Method to get Operating System Version.
   * @function external:"jQuery.fn.deviceDetector".getOsVersion
   * @return {string} The OS version String.
   */

  $.fn.deviceDetector.getOsVersion = function() {
    return getOsVersion().string;
  };

  /**
   * Method to get Operating System Version String.
   * @function external:"jQuery.fn.deviceDetector".getOsVersionString
   * @return {string} The OS version String.
   */

  $.fn.deviceDetector.getOsVersionString = function() {
    return getOsVersion().string;
  };

  /**
   * Method to get Operating System Version Categories.
   * @function external:"jQuery.fn.deviceDetector".getOsVersionCategories
   * @return {object} The OS version Categories.
   */

  $.fn.deviceDetector.getOsVersionCategories = function() {
    return getOsVersion().categories;
  };

  /**
   * Method to get Operating System Version Major.
   * @function external:"jQuery.fn.deviceDetector".getOsVersionMajor
   * @return {number} The OS version Major.
   */

  $.fn.deviceDetector.getOsVersionMajor = function() {
    return getOsVersion().categories.major;
  };

  /**
   * Method to get Operating System Version Minor.
   * @function external:"jQuery.fn.deviceDetector".getOsVersionMinor
   * @return {number} The OS version Minor.
   */

  $.fn.deviceDetector.getOsVersionMinor = function() {
    return getOsVersion().categories.minor;
  };

  /**
   * Method to get Operating System Version Bugfix.
   * @function external:"jQuery.fn.deviceDetector".getOsVersionBugfix
   * @return {number} The OS version Bugfix.
   */

  $.fn.deviceDetector.getOsVersionBugfix = function() {
    return getOsVersion().categories.bugfix;
  };

  /**
   * Method to get Operating System Version Categories.
   * @function external:"jQuery.fn.deviceDetector".getOsVersionCategories
   * @return {object} The OS version categories.
   */

  $.fn.deviceDetector.getOsVersionCategories = function() {
    return getOsVersion().categories;
  };

  /**
   * Method to get Operating System Name.
   * @function external:"jQuery.fn.deviceDetector".getOsName
   * @return {string} The OS name.
   */

  $.fn.deviceDetector.getOsName = function() {
    return getOsName();
  };

  /**
   * Method to get Operating System Id (Short Name).
   * @function external:"jQuery.fn.deviceDetector".getOsId
   * @return {string} The OS id.
   */

  $.fn.deviceDetector.getOsId = function() {
    return getOsName(true);
  };

  /**
   * Method to detect Browser and Device support.
   * @function external:"jQuery.fn.deviceDetector".isSupported
   * @return {boolen} The match status.
   */

  $.fn.deviceDetector.isSupported = function() {
    return isSupported();
  };

  /**
   * Method to remove empty Values from a Array.
   * @function removeEmptyValuesFromArray
   * @param {array} arr The Array to remove empty Values.
   * @return {array} The new Array without empty Values.
   */
  function removeEmptyValuesFromArray(arr) {
    return $.map( arr, function(value) {
       return value === '' ? null : value;
   });
  }

  /**
   * Method to detect Characters matching.
   * @function isMatching
   * @param {array} arr The Characters to match.
   * @return {boolen} The match status.
   */
   function isMatching(arr) {
     var status = false; // eslint-disable-line no-var
     var newArr = removeEmptyValuesFromArray(arr); // eslint-disable-line no-var
     $.each( newArr, function( index, value ) {
       value = value.toLowerCase();
       status =
         browserAgentString.indexOf(value) > -1 ||
         browserVersionString.indexOf(value) > -1;
         // console.log(value, status, browserAgentString);
       if (status === true) return false;
     });
     return status;
   }

  /**
   * Method to detect Device Type.
   * @function isDeviceType
   * @param {array|string} includes The Device to match.
   * @param {array|string} excludes The Device should not match.
   * @return {boolen} The Device Type match status.
   */
  function isDeviceType(includes, excludes) {
    try {
      var hasIncludes = false; // eslint-disable-line no-var
      var hasExcludes = false; // eslint-disable-line no-var

      if (!$.isArray(includes)) includes = $.makeArray(includes);

      if (!$.isArray(excludes)) excludes = $.makeArray(excludes);

      hasExcludes = isMatching(excludes);

      if (hasExcludes === false) hasIncludes = isMatching(includes);

      return hasIncludes;
    } catch (error) {
      console.info( // eslint-disable-line no-console
        'deviceDetector: No match String || Array given in isDeviceType()',
        error
      );
    }
  }

  /**
   * Method to get the Browser Version.
   * @function getBrowserVersion
   * @return {number} The browser Version. Default is 0.
   */
  function getBrowserVersion() {
    var version = 0; // eslint-disable-line no-var
    var data = // eslint-disable-line no-var
      browserAgentString +
      browserVersionString;
    $.each(config.browsers.versions, function(key, value) {
      var index = data.indexOf(value.index); // eslint-disable-line no-var
      if (index > -1) {
        version = parseFloat(
          data.substring(index + value.map).split('.')[0]
        );
        return false;
      }
    });
    return version;
  }

  /**
   * Method to get the Browser Name.
   * @function getBrowserName
   * @param {boolen} returnId The Method should return an Id
   * (browser short name) instead of the Name (browser long name)
   * @return {string} The browser Name. Default ist unknown.
   */
  function getBrowserName(returnId) {
    var name = 'unknown'; // eslint-disable-line no-var
    $.each(config.browsers.names, function(key, value) {
      var isBrowser = isDeviceType( // eslint-disable-line no-var
        value.pattern.include,
        value.pattern.exclude
      );
      if (isBrowser) {
        (returnId === true) ? name = value.id : name = value.name;
        return false;
      }
    });
    return name;
  }

  /**
   * Method to get the Operating System Version.
   * @function getOsVersion
   * @return {object} The OS Version . Default is 0.
   * {
   *  'string': '0',
   *  'categories': {
   *    'major': 0,
   *    'minor': 0,
   *    'bugfix': 0,
   *  }
   * }
   */
  function getOsVersion() {
    var version = { // eslint-disable-line no-var
      'string': '0.0.0',
      'categories': {
        'major': 0,
        'minor': 0,
        'bugfix': 0,
      },
    };
    var data = // eslint-disable-line no-var
      browserAgentString +
      browserVersionString;
    $.each(config.oss.versions, function(key, value) {
      var index = data.indexOf(value.index); // eslint-disable-line no-var
      if (index > -1) {
        version.string =
          data.substring(index + value.map).split(value.cut)[0]
          || '0.0.0';
        var choped = // eslint-disable-line no-var
          version.string.split(value.chop);
        version.categories.major = parseInt(choped[0]) || 0;
        version.categories.minor = parseInt(choped[1]) || 0;
        version.categories.bugfix = parseInt(choped[2]) || 0;
        return false;
      }
    });
    return version;
  }

  /**
   * Method to get the Operating System Name.
   * @function getOsName
   * @param {boolen} returnId The Method should return an Id
   * (OS short name) instead of the Name (OS long name)
   * @return {string} The OS Name. Default ist unknown.
   */
  function getOsName(returnId) {
    var name = 'unknown'; // eslint-disable-line no-var
    $.each(config.oss.names, function(key, value) {
      var isOs = isDeviceType( // eslint-disable-line no-var
        value.pattern.include,
        value.pattern.exclude
      );
      if (isOs) {
        (returnId === true) ? name = value.id : name = value.name;
        return false;
      }
    });
    return name;
  }

  /**
   * Method to detect supported Browser.
   * @function isSupported
   * @return {boolen} The supported Browser match status.
   */
  function isSupported() {
    var isSupported = false; // eslint-disable-line no-var
    $.each(config.supports, function(key, value) {
      if (
        getBrowserName(true) === value.id &&
        getBrowserVersion() >= parseFloat(value.version)
      ) isSupported = true;
    });
    return isSupported;
  }
  // private variables
  var browser = navigator; // eslint-disable-line no-var
  var browserAgentString = // eslint-disable-line no-var
    browser.userAgent.toLowerCase();
  var browserVersionString = // eslint-disable-line no-var
    browser.appVersion.toLowerCase();
/* eslint-disable max-len, no-console */
  // browserAgentString = 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9220; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.523 Mobile Safari/534.11+';
  // browserAgentString = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36';
  // browserAgentString = 'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19'
  // browserAgentString = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36';
  // browserAgentString = 'Opera/9.80 (X11; FreeBSD 8.1-RELEASE i386; Edition Next) Presto/2.12.388 Version/12.10';
  // browserAgentString = 'Mail/3124 CFNetwork/760.5.1 Darwin/15.5.0 (x86_64)';
  // browserAgentString = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36';
  // browserAgentString = 'Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1';
  // browserAgentString = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1';
  // browserAgentString = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_5 like Mac OS X) AppleWebKit/604.5.6 (KHTML, like Gecko) Version/11.0 Mobile/15D60 Safari/604.1';
  // browserAgentString = 'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; Microsoft; Lumia 640 LTE) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537';
  // browserAgentString = 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15063';
  // browserAgentString = 'Mozilla/5.0 (Linux; Android 5.1; iris 550 Build/LRX21M) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/37.0.0.0 Mobile Safari/537.36;';
  // browserAgentString = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3)';
  // browserAgentString = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)';
  // browserAgentString = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)';
  // browserAgentString = 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; ASU2JS; rv:11.0) like Gecko';
  // browserAgentString = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393';
  // browserAgentString = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10532';
  // browserAgentString = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0';
  browserAgentString = browserAgentString.toLowerCase();
  browserVersionString = browserAgentString;
  console.log(browserAgentString);
/* eslint-enable */
  // config
  //
  //  vendor
  //    Apple
  //    Google
  //    Mozilla
  //    Microsoft
  //    lbu (linux, bsd and unix)
  //  browsers
  //    names: browser nameings and patterns
  //    versions: index / matching patterns
  //  os
  //    os nameings and patterns
  //  mobile
  //    mobile matching patterns
  //  supports
  //    supported browser / browser matrix
  var config = {}; // eslint-disable-line no-var
  $.extend(
    config,
    {
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
                'iemobile',
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
    }
  );
  $.extend(
    config,
    {
      'browsers': {
        'names': {
          'edge': {
            'id': 'edge',
            'name': 'Microsoft Edge',
            'pattern': config.vendors.microsoft.edge.pattern,
          },
          'ie': {
            'id': 'msie',
            'name': 'Microsoft Internet Explorer',
            'pattern': config.vendors.microsoft.ie.pattern,
          },
          'ieMobile': {
            'id': 'ieMobile',
            'name': 'Microsoft Internet Explorer Mobile',
            'pattern': config.vendors.microsoft.ieMobile.pattern,
          },
          'chrome': {
            'id': 'chrome',
            'name': 'Google Chrome',
            'pattern': config.vendors.google.chrome.pattern,
          },
          'safari': {
            'id': 'safari',
            'name': 'Apple Safari',
            'pattern': config.vendors.apple.safari.pattern,
          },
          'firefox': {
            'id': 'firefox',
            'name': 'Mozilla Firefox',
            'pattern': config.vendors.mozilla.firefox.pattern,
          },
          'opera': {
            'id': 'opera',
            'name': 'Opera',
            'pattern': config.vendors.opera.opera.pattern,
          },
          'operaMini': {
            'id': 'operaMini',
            'name': 'Opera Mini',
            'pattern': config.vendors.opera.operaMini.pattern,
          },
          'blackberry': {
            'id': 'blackberry',
            'name': 'BlackBerry',
            'pattern': config.vendors.blackberry.blackberry.pattern,
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
    }
  );
  $.extend(
    config,
    {
      'oss': {
        'names': {
          'windowsPhone': {
            'id': 'windowsPhone',
            'name': 'Microsoft Windows Phone',
            'pattern': config.vendors.microsoft.windowsPhone.pattern,
          },
          'windowsXp': {
            'id': 'windowsXp',
            'name': 'Microsoft Windows XP',
            'pattern': config.vendors.microsoft.windowsXp.pattern,
          },
          'windowsVista': {
            'id': 'windowsVista',
            'name': 'Microsoft Windows Vista',
            'pattern': config.vendors.microsoft.windowsVista.pattern,
          },
          'windows7': {
            'id': 'windows7',
            'name': 'Microsoft Windows 7',
            'pattern': config.vendors.microsoft.windows7.pattern,
          },
          'window8': {
            'id': 'windows8',
            'name': 'Microsoft Windows 8',
            'pattern': config.vendors.microsoft.windows8.pattern,
          },
          'window81': {
            'id': 'windows81',
            'name': 'Microsoft Windows 8.1',
            'pattern': config.vendors.microsoft.windows81.pattern,
          },
          'windows10': {
            'id': 'windows10',
            'name': 'Microsoft Windows 10',
            'pattern': config.vendors.microsoft.windows10.pattern,
          },
          'macos': {
            'id': 'macos',
            'name': 'Apple Mac OS X',
            'pattern': config.vendors.apple.macos.pattern,
          },
          'ios': {
            'id': 'ios',
            'name': 'Apple iOS',
            'pattern': config.vendors.apple.ios.pattern,
          },
          'android': {
            'id': 'android',
            'name': 'Android Linux',
            'pattern': config.vendors.google.android.pattern,
          },
          'linux': {
            'id': 'linux',
            'name': 'GNU/Linux OS',
            'pattern': config.vendors.lbu.linux.pattern,
          },
          'bsd': {
            'id': 'bsd',
            'name': 'BSD OS',
            'pattern': config.vendors.lbu.bsd.pattern,
          },
          'blackberry': {
            'id': 'blackberry',
            'name': 'BlackBerry OS',
            'pattern': config.vendors.blackberry.blackberry.pattern,
          },
        },
        'versions': {
          'windowsPhone': {
            'index': config.vendors.microsoft.windowsPhone.pattern.include,
            'map': 14,
            'cut': /;|\)/,
            'chop': '.',
          },
          'windowsXp': {
            'index': config.vendors.microsoft.windowsXp.pattern.include,
            'map': 11,
            'cut': /;|\)/,
            'chop': '.',
          },
          'windowsVista': {
            'index': config.vendors.microsoft.windowsVista.pattern.include,
            'map': 11,
            'cut': /;|\)/,
            'chop': '.',
          },
          'windows7': {
            'index': config.vendors.microsoft.windows7.pattern.include,
            'map': 11,
            'cut': /;|\)/,
            'chop': '.',
          },
          'windows8': {
            'index': config.vendors.microsoft.windows8.pattern.include,
            'map': 11,
            'cut': /;|\)/,
            'chop': '.',
          },
          'windows81': {
            'index': config.vendors.microsoft.windows81.pattern.include,
            'map': 11,
            'cut': /;|\)/,
            'chop': '.',
          },
          'windows10': {
            'index': config.vendors.microsoft.windows10.pattern.include,
            'map': 11,
            'cut': /;|\)/,
            'chop': '.',
          },
          'android': {
            'index': config.vendors.google.android.pattern.include,
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
            'index': config.vendors.lbu.bsd.pattern.include,
            'map': 5,
            'cut': / |\)/,
            'chop': '.',
          },
          'linux': {
            'index': config.vendors.lbu.linux.pattern.include,
            'map': 5,
            'cut': /;| |\)/,
            'chop': '.',
          },
          'blackberry': {
            'index': config.vendors.blackberry.blackberry.pattern.include,
            'map': 10,
            'cut': /;|\)/,
            'chop': '.',
          },
        },
      },
    }
  );
  $.extend(
    config,
    {
      'mobile': {
        'pattern': {
          'include': ['mobile', 'tablet', 'phone', 'droid'],
          'exclude': '',
        },
      },
    }
  );
  $.extend(
    config,
    {
      'supports': {
        'msie': {'id': 'msie', 'version': '11'},
        'edge': {'id': 'edge', 'version': '12'},
        'chrome': {'id': 'chrome', 'version': '64'},
        'firefox': {'id': 'firefox', 'version': '59'},
        'safari': {'id': 'safari', 'version': '11'},
      },
    }
  );
}(jQuery));
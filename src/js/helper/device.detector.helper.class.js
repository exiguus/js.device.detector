import Config from './config.class';
const config = new Config();

import Helper from './helper.class';
const helper = new Helper();

/**
 * @fileOverview Device Detector Helper
  Get Device and Browser information
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 2.0.0
 */
export default class DeviceDetectorHelper {
  /**
   * Get Device and Browser information
   * @class DeviceDetectorHelper
   * @classdesc Class to help to get Browser and Device Information.
   * @param {object} options The DeviceDetectorHelper options.
   */
  constructor(options) {
    this._config = config.getConfig;
    this._defaults = this._config;
    this._settings = Object.assign({}, this._defaults, this._options);
    this._browser = navigator;
    this._browserAgentString =
      ('' + this._browser.userAgent).toLowerCase();
    this._browserVersionString =
      ('' + this._browser.appVersion).toLowerCase();
    this._browserAgentString =
      ('' + this._browserAgentString).toLowerCase();
    this._browserVersionString =
      this._browserAgentString || this._browserVersionString;
  }
  /**
   * Method to detect mobile devices.
   * @function DeviceDetectorHelper._isMobile
   * @return {boolean} The match status.
   */
  _isMobile() {
    return this._isDeviceType(
        this._config.vendors.apple.ios.pattern.include,
        this._config.vendors.apple.ios.pattern.exclude
      ) ||
      this._isDeviceType(
        this._config.vendors.google.android.pattern.include,
        this._config.vendors.google.android.pattern.exclude
      ) ||
      this._isDeviceType(
        this._config.vendors.microsoft.windowsPhone.pattern.include,
        this._config.vendors.microsoft.windowsPhone.exclude
      ) ||
      this._isDeviceType(
        this._config.vendors.blackberry.blackberry.pattern.include,
        this._config.vendors.blackberry.blackberry.exclude
      ) ||
      this._isDeviceType(
        this._config.mobile.pattern.include,
        this._config.mobile.pattern.exclude
      );
  }

  /**
   * Method to detect desktop devices.
   * @function DeviceDetectorHelper._isDesktop
   * @return {boolean} The match status.
   */
  _isDesktop() {
    return this._isDeviceType(
        this._config.vendors.apple.macos.pattern.include,
        this._config.vendors.apple.macos.pattern.exclude
      ) ||
      this._isDeviceType(
        this._config.vendors.lbu.unixlike.pattern.include,
        this._config.vendors.lbu.unixlike.pattern.exclude
      ) ||
      this._isDeviceType(
        this._config.vendors.microsoft.windows.pattern.include,
        this._config.vendors.microsoft.windows.pattern.exclude
      );
  }

  /**
   * Method to detect Safari.
   * @function DeviceDetectorHelper._isSafari
   * @return {boolean} The match status.
   */
  _isSafari() {
    return this._isDeviceType(
      this._config.vendors.apple.safari.pattern.include,
      this._config.vendors.apple.safari.pattern.exclude
    );
  }

  /**
   * Method to detect iPad.
   * @function DeviceDetectorHelper._isIpad
   * @return {boolean} The match status.
   */
  _isIpad() {
    return this._isDeviceType(
      this._config.vendors.apple.ipad.pattern.include,
      this._config.vendors.apple.ipad.pattern.exclude
    );
  }

  /**
   * Method to detect iPhone.
   * @function DeviceDetectorHelper._isIphone
   * @return {boolean} The match status.
   */
  _isIphone() {
    return this._isDeviceType(
      this._config.vendors.apple.iphone.pattern.include,
      this._config.vendors.apple.iphone.pattern.exclude
    );
  }

  /**
   * Method to detect iOS.
   * @function DeviceDetectorHelper._isIos
   * @return {boolean} The match status.
   */
  _isIos() {
    return this._isDeviceType(
      this._config.vendors.apple.ios.pattern.include,
      this._config.vendors.apple.ios.pattern.exclude
    );
  }

  /**
   * Method to detect Mac OS.
   * @function DeviceDetectorHelper._isMacos
   * @return {boolean} The match status.
   */
  _isMacos() {
    return this._isDeviceType(
      this._config.vendors.apple.macos.pattern.include,
      this._config.vendors.apple.macos.pattern.exclude
    );
  }

  /**
   * Method to detect Chrome.
   * @function DeviceDetectorHelper._isChrome
   * @return {boolean} The match status.
   */
  _isChrome() {
    return this._isDeviceType(
      this._config.vendors.google.chrome.pattern.include,
      this._config.vendors.google.chrome.pattern.exclude
    );
  }

  /**
   * Method to detect Android.
   * @function DeviceDetectorHelper._isAndroid
   * @return {boolean} The match status.
   */
  _isAndroid() {
    return this._isDeviceType(
      this._config.vendors.google.android.pattern.include,
      this._config.vendors.google.android.pattern.exclude
    );
  }

  /**
   * Method to detect Firefox.
   * @function DeviceDetectorHelper._isFirefox
   * @return {boolean} The match status.
   */
  _isFirefox() {
    return this._isDeviceType(
      this._config.vendors.mozilla.firefox.pattern.include,
      this._config.vendors.mozilla.firefox.pattern.exclude
    );
  }

  /**
   * Method to detect Microsoft Internet Explorer (IE/Edge).
   * @function DeviceDetectorHelper._isMsie
   * @return {boolean} The match status.
   */
  _isMsie() {
    return this._isDeviceType(
      this._config.vendors.microsoft.msie.pattern.include,
      this._config.vendors.microsoft.msie.pattern.exclude
    );
  }

  /**
   * Method to detect Microsoft Edge.
   * @function DeviceDetectorHelper._isEdge
   * @return {boolean} The match status.
   */
  _isEdge() {
    return this._isDeviceType(
      this._config.vendors.microsoft.edge.pattern.include,
      this._config.vendors.microsoft.edge.pattern.exclude
    );
  }

  /**
   * Method to detect Internet Explorer.
   * @function DeviceDetectorHelper._isIe
   * @return {boolean} The match status.
   */
  _isIe() {
    return this._isDeviceType(
      this._config.vendors.microsoft.ie.pattern.include,
      this._config.vendors.microsoft.ie.pattern.exclude
    );
  }

  /**
   * Method to detect Microsoft Internet Explorer Mobile.
   * @function DeviceDetectorHelper._isIeMobile
   * @return {boolean} The match status.
   */
  _isIeMobile() {
    return this._isDeviceType(
      this._config.vendors.microsoft.ieMobile.pattern.include,
      this._config.vendors.microsoft.ieMobile.pattern.exclude
    );
  }

  /**
   * Method to detect Windows.
   * @function DeviceDetectorHelper._isWindows
   * @return {boolean} The match status.
   */
  _isWindows() {
    return this._isDeviceType(
      this._config.vendors.microsoft.windows.pattern.include,
      this._config.vendors.microsoft.windows.pattern.exclude
    );
  }

  /**
   * Method to detect Windows Phone.
   * @function DeviceDetectorHelper._isWindowsPhone
   * @return {boolean} The match status.
   */
  _isWindowsPhone() {
    return this._isDeviceType(
      this._config.vendors.microsoft.windowsPhone.pattern.include,
      this._config.vendors.microsoft.windowsPhone.pattern.exclude
    );
  }

  /**
   * Method to detect Opera.
   * @function DeviceDetectorHelper._isOpera
   * @return {boolean} The match status.
   */
  _isOpera() {
    return this._isDeviceType(
      this._config.vendors.opera.opera.pattern.include,
      this._config.vendors.opera.opera.pattern.exclude
    );
  }

  /**
   * Method to detect Opera Mini.
   * @function DeviceDetectorHelper._isOperaMini
   * @return {boolean} The match status.
   */
  _isOperaMini() {
    return this._isDeviceType(
      this._config.vendors.opera.operaMini.pattern.include,
      this._config.vendors.opera.operaMini.pattern.exclude
    );
  }

  /**
   * Method to detect BlackBerry.
   * @function DeviceDetectorHelper._isBlackberry
   * @return {boolean} The match status.
   */
  _isBlackberry() {
    return this._isDeviceType(
      this._config.vendors.blackberry.blackberry.pattern.include,
      this._config.vendors.blackberry.blackberry.pattern.exclude
    );
  }

  /**
   * Method to detect Linux.
   * @function DeviceDetectorHelper._isLinux
   * @return {boolean} The match status.
   */
  _isLinux() {
    return this._isDeviceType(
      this._config.vendors.lbu.linux.pattern.include,
      this._config.vendors.lbu.linux.pattern.exclude
    );
  }

  /**
   * Method to detect BSD/Unix.
   * @function DeviceDetectorHelper._isBsd
   * @return {boolean} The match status.
   */
  _isBsd() {
    return this._isDeviceType(
      this._config.vendors.lbu.bsd.pattern.include,
      this._config.vendors.lbu.bsd.pattern.exclude
    );
  }

  /**
   * Method to detect Device Type.
   * @function DeviceDetectorHelper._isDeviceType
   * @param {array|string} includes The Device to match.
   * @param {array|string} excludes The Device should not match.
   * @return {boolean} The Device Type match status.
   */
  _isDeviceType(includes, excludes) {
    try {
      let hasIncludes = false;
      let hasExcludes = false;

      // refactor
      if (!Array.isArray(includes)) {
        includes = new Array(includes);
      }
      if (!Array.isArray(excludes)) {
        excludes = new Array(excludes);
      }

      hasExcludes = helper.isMatching(excludes);

      if (hasExcludes === false) hasIncludes = helper.isMatching(includes);

      return hasIncludes;
    } catch (error) {
      console.info( // eslint-disable-line no-console
        'deviceDetector: No match String || ' +
        'Array given in this._isDeviceType()',
        error
      );
    }
  }

  /**
   * Method to get the Browser Version.
   * @function DeviceDetectorHelper._getBrowserVersion
   * @return {number} The browser Version. Default is 0.
   */
  _getBrowserVersion() {
    let version = 0;
    const data =
      this._browserAgentString +
      this._browserVersionString;
    const object = this._config.browsers.versions;
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        const index = data.indexOf(value.index);
        if (index > -1) {
          version = parseFloat(
            data.substring(index + value.map).split('.')[0]
          );
          break;
        }
      }
    }
    return version;
  }
  /**
   * Method to get the Browser Name.
   * @function DeviceDetectorHelper._getBrowserName
   * @param {boolean} returnId The Method should return an Id
   * (browser short name) instead of the Name (browser long name)
   * @return {string} The browser Name. Default ist unknown.
   */
  _getBrowserName(returnId) {
    let name = 'unknown';
    const object = this._config.browsers.names;
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        const isBrowser = this._isDeviceType(
          value.pattern.include,
          value.pattern.exclude
        );
        if (isBrowser) {
          (returnId === true) ? name = value.id: name = value.name;
          break;
        }
      }
    }
    return name;
  }

  /**
   * Method to get the Operating System Version.
   * @function DeviceDetectorHelper._getOsVersion
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
  _getOsVersion() {
    const version = {
      'string': '0.0.0',
      'categories': {
        'major': 0,
        'minor': 0,
        'bugfix': 0,
      },
    };
    const data =
      this._browserAgentString +
      this._browserVersionString;
    const object = this._config.oss.versions;
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        const index = data.indexOf(value.index);
        if (index > -1) {
          version.string =
            data.substring(index + value.map).split(value.cut)[0] ||
            '0.0.0';
          const choped =
            version.string.split(value.chop);
          version.categories.major = parseInt(choped[0]) || 0;
          version.categories.minor = parseInt(choped[1]) || 0;
          version.categories.bugfix = parseInt(choped[2]) || 0;
          break;
        }
      }
    }
    return version;
  }
  /**
   * Method to get the Operating System Name.
   * @function DeviceDetectorHelper._getOsName
   * @param {boolean} returnId The Method should return an Id
   * (OS short name) instead of the Name (OS long name)
   * @return {string} The OS Name. Default ist unknown.
   */
  _getOsName(returnId) {
    let name = 'unknown';
    const object = this._config.oss.names;
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        const isOs = this._isDeviceType(
          value.pattern.include,
          value.pattern.exclude
        );
        if (isOs) {
          (returnId === true) ? name = value.id: name = value.name;
          break;
        }
      }
    }
    return name;
  }
  /**
   * Method to detect supported Browser.
   * @function DeviceDetectorHelper._isSupported
   * @return {boolean} The supported Browser match status.
   */
  _isSupported() {
    let isSupported = false;
    const object = this._config.supports;
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const value = object[key];
        if (
          this._getBrowserName(true) === value.id &&
          this._getBrowserVersion() >= parseFloat(value.version)
        ) isSupported = true;
      }
    }
    return isSupported;
  }
}

import DeviceDetectorHelper from './helper/device.detector.helper.class';

/**
 * @fileOverview Device Detector
  Get Device and Browser information
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 2.0.0
 */
export default class DeviceDetector extends DeviceDetectorHelper {
  /**
   * Get Device and Browser information
   * @class DeviceDetector
   * @classdesc Class to get Browser and Device Information.
   * @param {object} options The DeviceDetector options.
   */
  constructor(options) {
    super(options);
  }
  /**
   * Method to detect mobile devices.
   * @function DeviceDetector.isMobile
   * @return {boolean} The match status.
   */
  get isMobile() {
    return this._isMobile();
  }

  /**
   * Method to detect desktop devices.
   * @function DeviceDetector.isDesktop
   * @return {boolean} The match status.
   */
  get isDesktop() {
    return this._isDesktop();
  }

  /**
   * Method to detect Safari.
   * @function DeviceDetector.isSafari
   * @return {boolean} The match status.
   */
  get isSafari() {
    return this._isSafari();
  }

  /**
   * Method to detect iPad.
   * @function DeviceDetector.isIpad
   * @return {boolean} The match status.
   */
  get isIpad() {
    return this._isIpad();
  }

  /**
   * Method to detect iPhone.
   * @function DeviceDetector.isIphone
   * @return {boolean} The match status.
   */
  get isIphone() {
    return this._isIphone();
  }

  /**
   * Method to detect iOS.
   * @function DeviceDetector.isIos
   * @return {boolean} The match status.
   */
  get isIos() {
    return this._isIos();
  }

  /**
   * Method to detect Mac OS.
   * @function DeviceDetector.isMacos
   * @return {boolean} The match status.
   */
  get isMacos() {
    return this._isMacos();
  }

  /**
   * Method to detect Chrome.
   * @function DeviceDetector.isChrome
   * @return {boolean} The match status.
   */
  get isChrome() {
    return this._isChrome();
  }

  /**
   * Method to detect Android.
   * @function DeviceDetector.isAndroid
   * @return {boolean} The match status.
   */
  get isAndroid() {
    return this._isAndroid();
  }

  /**
   * Method to detect Firefox.
   * @function DeviceDetector.isFirefox
   * @return {boolean} The match status.
   */
  get isFirefox() {
    return this._isFirefox();
  }

  /**
   * Method to detect Microsoft Internet Explorer (IE/Edge).
   * @function DeviceDetector.isMsie
   * @return {boolean} The match status.
   */
  get isMsie() {
    return this._isMsie();
  }

  /**
   * Method to detect Microsoft Edge.
   * @function DeviceDetector.isEdge
   * @return {boolean} The match status.
   */
  get isEdge() {
    return this._isEdge();
  }

  /**
   * Method to detect Internet Explorer.
   * @function DeviceDetector.isIe
   * @return {boolean} The match status.
   */
  get isIe() {
    return this._isIe();
  }

  /**
   * Method to detect Microsoft Internet Explorer Mobile.
   * @function DeviceDetector.isIeMobile
   * @return {boolean} The match status.
   */
  get isIeMobile() {
    return this._isIeMobile();
  }

  /**
   * Method to detect Windows.
   * @function DeviceDetector.isWindows
   * @return {boolean} The match status.
   */
  get isWindows() {
    return this._isWindows();
  }

  /**
   * Method to detect Windows Phone.
   * @function DeviceDetector.isWindowsPhone
   * @return {boolean} The match status.
   */
  get isWindowsPhone() {
    return this._isWindowsPhone();
  }

  /**
   * Method to detect Opera.
   * @function DeviceDetector.isOpera
   * @return {boolean} The match status.
   */
  get isOpera() {
    return this._isOpera();
  }

  /**
   * Method to detect Opera Mini.
   * @function DeviceDetector.isOperaMini
   * @return {boolean} The match status.
   */
  get isOperaMini() {
    return this._isOperaMini();
  }

  /**
   * Method to detect BlackBerry.
   * @function DeviceDetector.isBlackberry
   * @return {boolean} The match status.
   */
  get isBlackberry() {
    return this._isBlackberry();
  }

  /**
   * Method to detect Linux.
   * @function DeviceDetector.isLinux
   * @return {boolean} The match status.
   */
  get isLinux() {
    return this._isLinux();
  }

  /**
   * Method to detect BSD/Unix.
   * @function DeviceDetector.isBsd
   * @return {boolean} The match status.
   */
  get isBsd() {
    return this._isBsd();
  }

  /**
   * Method to get Browser Version.
   * @function DeviceDetector.getBrowserVersion
   * @return {string} The browser version.
   */
  get getBrowserVersion() {
    return this._getBrowserVersion();
  }

  /**
   * Method to get Browser Name.
   * @function DeviceDetector.getBrowserName
   * @return {string} The browser name.
   */
  get getBrowserName() {
    return this._getBrowserName();
  }

  /**
   * Method to get Browser Id (Short Name).
   * @function DeviceDetector.getBrowserId
   * @return {string} The browser id.
   */
  get getBrowserId() {
    return this._getBrowserName(true);
  }

  /**
   * Method to get Operating System Version.
   * @function DeviceDetector.getOsVersion
   * @return {string} The OS version String.
   */
  get getOsVersion() {
    return this._getOsVersion().string;
  }

  /**
   * Method to get Operating System Version String.
   * @function DeviceDetector.getOsVersionString
   * @return {string} The OS version String.
   */
  get getOsVersionString() {
    return this._getOsVersion().string;
  }

  /**
   * Method to get Operating System Version Categories.
   * @function DeviceDetector.getOsVersionCategories
   * @return {object} The OS version Categories.
   */
  get getOsVersionCategories() {
    return this._getOsVersion().categories;
  }

  /**
   * Method to get Operating System Version Major.
   * @function DeviceDetector.getOsVersionMajor
   * @return {number} The OS version Major.
   */
  get getOsVersionMajor() {
    return this._getOsVersion().categories.major;
  }

  /**
   * Method to get Operating System Version Minor.
   * @function DeviceDetector.getOsVersionMinor
   * @return {number} The OS version Minor.
   */
  get getOsVersionMinor() {
    return this._getOsVersion().categories.minor;
  }

  /**
   * Method to get Operating System Version Bugfix.
   * @function DeviceDetector.getOsVersionBugfix
   * @return {number} The OS version Bugfix.
   */
  get getOsVersionBugfix() {
    return this._getOsVersion().categories.bugfix;
  }

  /**
   * Method to get Operating System Name.
   * @function DeviceDetector.getOsNamegetOs
   * @return {string} The OS name.
   */
  get getOsName() {
    return this._getOsName();
  }

  /**
   * Method to get Operating System Id (Short Name).
   * @function DeviceDetector.getOsId
   * @return {string} The OS id.
   */
  get getOsId() {
    return this._getOsName(true);
  }

  /**
   * Method to detect Browser and Device support.
   * @function DeviceDetector.isSupported
   * @return {boolean} The match status.
   */
  get isSupported() {
    return this._isSupported();
  }

  /**
   * Method to get all available device and browser informations.
   * @function DeviceDetector.getInfo
   * @return {object} The device and browser infromation.
   */
  get getInfo() {
    return {
      'browserVersion': this.getBrowserVersion,
      'browserName': this.getBrowserName,
      'browserId': this.getBrowserId,
      'osVersion': this.getOsVersion,
      'osVersionString': this.getOsVersionString,
      'osVersionCategories': this.getOsVersionCategories,
      'osVersionMajor': this.getOsVersionMajor,
      'osVersionMinor': this.getOsVersionMinor,
      'osVersionBugfix': this.getOsVersionBugfix,
      'osName': this.getOsName,
      'osId': this.getOsId,
      'supported': this.isSupported,
      'mobile': this.isMobile,
      'desktop': this.isDesktop,
      'safari': this.isSafari,
      'iphone': this.isIphone,
      'ipad': this.isIpad,
      'ios': this.isIos,
      'macos': this.isMacos,
      'chrome': this.isChrome,
      'android': this.isAndroid,
      'firefox': this.isFirefox,
      'ie': this.isIe,
      'msie': this.isMsie,
      'edge': this.isEdge,
      'ieMobile': this.isIeMobile,
      'windowsPhone': this.isWindowsPhone,
      'windows': this.isWindows,
      'opera': this.isOpera,
      'operaMini': this.isOperaMini,
      'blackberry': this.isBlackberry,
      'linux': this.isLinux,
      'bsd': this.isBsd,
    };
  }
}

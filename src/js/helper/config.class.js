import vendorConfig from '../config/vendor.config';
import browserConfig from '../config/browser.config';
import ossConfig from '../config/oss.config';
import mobileConfig from '../config/mobile.config';
import supportsConfig from '../config/supports.config';

/**
 * @fileOverview Device Detector config
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 2.0.0
 */
export default class Config {
  /**
   * Get the current Device Detector config
   * @class Config
   * @classdesc Class to get the Device Detector Config.
   */
  constructor() {
    // config Object Structure
    //  vendor
    //    Apple
    //    Google
    //    Mozilla
    //    Microsoft
    //    Opera
    //    Blackberry
    //    lbu (linux, bsd and unix)
    //  browsers
    //    names: browser nameings and patterns
    //    versions: index / matching patterns
    //  oss
    //    names: os nameings and patterns
    //    versions: index / matching patterns
    //  mobile
    //    mobile matching patterns
    //  supports
    //    supported browser / browser matrix
    this._vendorConfig = vendorConfig;
    this._browserConfig = browserConfig;
    this._ossConfig = ossConfig;
    this._mobileConfig = mobileConfig;
    this._supportsConfigform = supportsConfig;
    this._config = Object.assign(
      {},
      this._vendorConfig,
      this._browserConfig,
      this._ossConfig,
      this._mobileConfig,
      this._supportsConfig
    );
  }
  /**
   * Get the Vendor Config.
   * @function Config.getVendorConfig
   * @return {object} The Vendor Config.
   */
  get getVendorConfig() {
    return this._vendorConfig;
  }

  /**
   * Get the Browser Config.
   * @function Config.getBrowserConfig
   * @return {object} The Browser Config.
   */
  get getBrowserConfig() {
    return this._browserConfig;
  }

  /**
   * Get the OSS Config.
   * @function Config.getOssConfig
   * @return {object} The Oss Config.
   */
  get getOssConfig() {
    return this._ossConfig;
  }

  /**
   * Get the Mobile Config.
   * @function Config.getMobileConfig
   * @return {object} The Mobile Config.
   */
  get getMobileConfig() {
    return this._mobileConfig;
  }

  /**
   * Get the OSS Config.
   * @function Config.getSupportsConfig
   * @return {object} The Supports Config.
   */
  get getSupportsConfig() {
    return this._supportsConfig;
  }
  /**
   * Get the Config.
   * @function Config.getConfig
   * @return {object} The Config.
   */
  get getConfig() {
    return this._config;
  }
}

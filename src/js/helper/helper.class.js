/**
 * @fileOverview Device Detector helper
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 2.0.0
 */
export default class Helper {
  /**
   * Device Detector helper
   * @class Config
   * @classdesc Class provide Device Detector helper.
   */
  constructor() {
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
   * Method to remove empty Values from a Array.
   * @function removeEmptyValuesFromArray
   * @param {array} arr The Array to remove empty Values.
   * @return {array} The new Array without empty Values.
   */
  removeEmptyValuesFromArray(arr) {
    return arr.map((value) => value === '' ? null : value);
  }

  /**
   * Method to detect Characters matching.
   * @function isMatching
   * @param {array} arr The Characters to match.
   * @return {boolean} The match status.
   */
  isMatching(arr) {
    let status = false;
    const object = this.removeEmptyValuesFromArray(arr);
    for (const iterator of object) {
      const value = ('' + iterator).toLowerCase();
      status =
        this._browserAgentString.indexOf(value) > -1 ||
        this._browserVersionString.indexOf(value) > -1;
      if (status === true) break;
    }
    return status;
  }
}

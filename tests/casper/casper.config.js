/* globals
  patchRequire
*/
const require = patchRequire(require);

// now you're ready to go
const utils = require('utils'); // eslint-disable-line no-unused-vars

const casper = require('casper').create({ // eslint-disable-line no-unused-vars
  pageSettings: {
    loadImages: true, // The WebPage instance used by Casper will
    loadPlugins: true, // use these settings
  },
  logLevel: 'info', // Only "info" level messages will be logged
  verbose: true, // log messages will be printed out to the console
  viewportSize: {
    width: 1200,
    height: 2400,
  },
});

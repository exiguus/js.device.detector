/* globals
  casper
  phantom
  printTestInfo
  objectCount
  getBrowserTestData
  getTestCaptureName
*/
// if casper do not run with test param
// phantom.injectJs(config.path + 'casper.config.js');
// options
const config = {
  'count': 22,
  'url': {
    'origin': 'http://localhost:7357',
    'path': '/src/index.jquery.html',
  },
  'path': 'tests/casper/',
  'title': 'Test Device Detector',
  'viewport': {
    'width': 800,
    'height': 3200,
  },
  'capture': {
    'enable': false,
    'wait': 50,
    'path': 'tests/screenshots/',
    'fileEnding': '.png',
  },
  'debug': false,
  'browsers': {},
};
// cli
if (casper.cli.options.path !== undefined) {
  config.url.path = casper.cli.options.path;
}
if (casper.cli.options.capture !== undefined) {
  config.capture.enable = true;
}
// inject browserTestData
phantom.injectJs(config.path + 'browser.config.js');
config.browsers = getBrowserTestData(); // eslint-ignore-line no-undef
// inject helper
phantom.injectJs(config.path + 'casper.helper.js');
// tests
Object.keys(config.browsers).forEach(function(key) {
  // begin test
  casper.test.begin(
    config.title,
    (objectCount(config.browsers[key].test) * 3),
    function suite(test) {
      printTestInfo(
        'Url:       ' + config.url.origin + config.url.path
      );
      printTestInfo(
        'Name:      ' + key
      );
      printTestInfo(
        'UserAgent: ' + config.browsers[key].userAgentString
      );
      // start test
      casper.start(config.url.origin, function() {
        casper.userAgent(config.browsers[key].userAgentString);
        this.viewport( // eslint-disable-line no-invalid-this
          config.viewport.width,
          config.viewport.height
        );
      });
      // open path
      casper.thenOpen(config.url.origin + config.url.path, function() {
        if (config.debug === true) console.info(this.getCurrentUrl()); // eslint-disable-line no-invalid-this, no-console, max-len
        // check info object preparation
        config.getInfo = casper.evaluate(function() {
            return $.fn.deviceDetector.getInfo();
          }
        );
      });
      // check elements
      Object.keys(config.browsers[key].test).forEach(function(id) {
        casper.then(function() {
          var element = '#' + id; // eslint-disable-line no-var
          var content = // eslint-disable-line no-var
            this.getHTML(element); // eslint-disable-line no-invalid-this
          if (config.debug === true) {
            console.info( // eslint-disable-line no-console
              id,
              element,
              config.browsers[key].test[id],
              config.browsers[key].userAgentString
            );
          }
          // check element exist
          test.assertExists(element, element + ' element exist');
          // check element equal
          test.assertEquals(
            content,
            config.browsers[key].test[id],
            element + ' content is equal "' + content + '"'
          );
          // check info object equal
          test.assertEquals(
            (typeof config.getInfo[id] === 'object') ?
              config.browsers[key].test[id] =
                new Object(config.browsers[key].test[id]) : // eslint-disable-line no-new-object, max-len
              config.getInfo[id].toString(),
            config.browsers[key].test[id],
            config.browsers[key].test[id] +
              ' getInfo[key] value is equal ' +
              ((typeof config.getInfo[id] === 'object') ?
                JSON.stringify(config.getInfo[id]) : config.getInfo[id])
          );
        });
      });
      // capture test
      if (config.capture.enable === true) {
        casper.then(function() {
          this.wait( // eslint-disable-line no-invalid-this
            config.capture.wait,
            function() {
              this.capture( // eslint-disable-line no-invalid-this
                getTestCaptureName(key),
                {
                  top: 0,
                  left: 0,
                  width: config.viewport.width,
                  height: config.viewport.height,
                }
              );
            }
          );
        });
      }
      // end test
      casper.run(function() {
        test.done();
      });
    }
  );
});

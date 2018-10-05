/* globals
  casper
  phantom
  printTestInfo
  getObjectCount
  getBrowserTestData
  getTestCaptureName
  getRandomSlicedArray
  getWithCorrectType
*/

/* eslint-disable no-var, no-invalid-this */
var config = {
  'count': 22,
  'url': {
    'origin': 'http://localhost:7357',
    'path': '/src/index.jquery.html',
  },
  'path': 'tests/casper/',
  'title': 'Test Device Detector',
  'viewport': {
    'width': 800,
    'height': 3600,
  },
  'capture': {
    'enable': false,
    'wait': 50,
    'path': 'tests/screenshots/',
    'fileEnding': '.png',
  },
  'fuzz': false,
  'debug': false,
  'browsers': {},
};
// inject browserTestData
if (casper.cli.options.custom !== undefined) {
  phantom.injectJs(config.path + 'browser.custom.config.js');
} else {
  phantom.injectJs(config.path + 'browser.config.js');
}
config.browsers = getBrowserTestData();
// inject helper
phantom.injectJs(config.path + 'casper.helper.js');
// cli
if (casper.cli.options.path !== undefined) {
  config.url.path = casper.cli.options.path;
}
if (casper.cli.options.capture !== undefined) {
  config.capture.enable = true;
}
var cases = [];
if (casper.cli.options.fuzz !== undefined) {
  config.fuzz.enable = true;
  config.capture.enable = false;
  cases = getRandomSlicedArray(Object.keys(config.browsers));
} else {
  cases = Object.keys(config.browsers);
}
// tests
printTestInfo(
  'Run ' + cases.length + ' ' + config.title + ' tests:'
);
cases.forEach(function(key) {
  // begin test
  casper.test.begin(
    config.title,
    (getObjectCount(config.browsers[key].test) * 3),
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
        this.viewport(
          config.viewport.width,
          config.viewport.height
        );
      });
      // open path
      casper.thenOpen(config.url.origin + config.url.path, function() {
        if (config.debug === true) console.info(this.getCurrentUrl()); // eslint-disable-line no-console, max-len
        // check info object preparation
        config.getInfo = casper.evaluate(function() {
            return $.fn.deviceDetector.getInfo();
          }
        );
      });
      // check elements
      Object.keys(config.browsers[key].test).forEach(function(id) {
        casper.then(function() {
          var element = '#' + id;
          var content =
            this.getHTML(element);
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
            (content === config.browsers[key].test[id]),
            true,
            element + ' content is equal ' + content
          );
          // check info object equal
          var subject = (typeof config.getInfo[id] === 'object') ?
            JSON.stringify(
              config.getInfo[id]
            ) :
            config.getInfo[id];
          var expectedWithType = getWithCorrectType(
            config.getInfo[id],
            config.browsers[key].test[id]
          );
          var expected = (typeof config.getInfo[id] === 'object') ?
            JSON.stringify(expectedWithType) : expectedWithType;
          test.assertEquals(
            (subject === expected),
            true,
            'getInfo.' + key + ' value is equal ' + expected
          );
        });
      });
      // capture test
      if (config.capture.enable === true) {
        casper.then(function() {
          this.wait(
            config.capture.wait,
            function() {
              this.capture(
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

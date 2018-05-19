/* globals
  casper
  phantom
  printTestInfo
  printTestStartInfo
  getTestCaptureName
  objectCount
  getBrowserTestData
*/
// if run casper not with test
// phantom.injectJs(config.path + 'casper.config.js');
// options
const config = {
  'count': 22,
  'url': {
    'origin': 'http://localhost:7357',
    'path': '/src/index.jquery.html',
  },
  'path': 'tests/casper/',
  'title': 'Test Browser Detector',
  'viewport': {
    'width': 1200,
    'height': 1000,
  },
  'capture': {
    'path': '../screenshots/',
    'fileEnding': '.png',
    'wait': 500,
  },
  'debug': false,
  'browsers': {},
};
// cli
if (casper.cli.options.path.length > 0) {
  config.url.path = casper.cli.options.path;
}
// inject browserTestData
phantom.injectJs(config.path + 'browser.config.js');
config.browsers = getBrowserTestData(); // eslint-ignore-line no-undef

// inject helper
phantom.injectJs(config.path + 'helper.js');

Object.keys(config.browsers).forEach(function(key) {
  // begin test

  casper.test.begin(
    config.title,
    objectCount(config.browsers[key].test) * 2,
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
      });

      // open test
      casper.thenOpen(config.url.origin + config.url.path, function() {
        if (config.debug === true) console.info(this.getCurrentUrl()); // eslint-disable-line no-invalid-this, no-console, max-len
        this.evaluate(function() { // eslint-disable-line no-invalid-this
          window.foo = 'bar';
        });
        // check elements
        //
        // browser
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
            test.assertExists(element, element + ' element exist');
            test.assertEquals(
              content,
              config.browsers[key].test[id],
              element + ' value is "' + content + '"'
            );
          });
        });
        this.wait(// eslint-disable-line no-invalid-this
          config.capture.wait,
          function() {
            this.capture( // eslint-disable-line no-invalid-this
              getTestCaptureName(key, config.capture), {
                top: 0,
                left: 0,
                width: config.viewport.width,
                height: config.viewport.height,
            });
          });
        });
      // end test
      casper.run(function() {
        test.done();
      });
    }
  );
});

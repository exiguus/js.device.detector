/* globals
  casper
  phantom
  printTestInfo
  printTestStartInfo
  getTestCaptureName
  objectCount
*/
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
  'browser': {
    'safariMac': {
      'userAgentString':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 ' +
        '(KHTML, like Gecko) Version/9.1.2 Safari/601.7.7',
      'test': {
        'browserVersion': '9',
        'browserName': 'Apple Safari',
        'browserId': 'safari',
        'osVersion': '10_11_6',
        'osVersionString': '10_11_6',
        'osVersionCategories': '{"major":10,"minor":11,"bugfix":6}',
        'osVersionMajor': '10',
        'osVersionMinor': '11',
        'osVersionBugfix': '6',
        'osName': 'Apple Mac OS X',
        'osId': 'macos',
      },
    },
    'chromeMac': {
      'userAgentString':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 ' +
        '(KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36',
      'test': {
        'browserVersion': '58',
        'browserName': 'Google Chrome',
        'browserId': 'chrome',
        'osVersion': '10_12_4',
        'osVersionString': '10_12_4',
        'osVersionCategories': '{"major":10,"minor":12,"bugfix":4}',
        'osVersionMajor': '10',
        'osVersionMinor': '12',
        'osVersionBugfix': '4',
        'osName': 'Apple Mac OS X',
        'osId': 'macos',
      },
    },
    'msieWindows8': {
      'userAgentString':
        'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)',
      'test': {
        'browserVersion': '10',
        'browserName': 'Microsoft Internet Explorer',
        'browserId': 'msie',
        'osVersion': '6.2',
        'osVersionString': '6.2',
        'osVersionCategories': '{"major":6,"minor":2,"bugfix":0}',
        'osVersionMajor': '6',
        'osVersionMinor': '2',
        'osVersionBugfix': '0',
        'osName': 'Microsoft Windows 8',
        'osId': 'windows8',
      },
    },
  },
  'capture': {
    'path': '../screenshots/',
    'fileEnding': '.png',
    'wait': 500,
  },
  'debug': false,
};

// inject helper
phantom.injectJs(config.path + 'helper.js');

Object.keys(config.browser).forEach(function(key) {
  // begin test

  casper.test.begin(
    config.title,
    objectCount(config.browser[key].test) * 2,
    function suite(test) {
      printTestStartInfo(
        config.title
      );
      printTestInfo(
        'Name:      ' + key
      );
      printTestInfo(
        'UserAgent: ' + config.browser[key].userAgentString
      );

      // start test
      casper.start(config.url.origin, function() {
        casper.userAgent(config.browser[key].userAgentString);
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
        Object.keys(config.browser[key].test).forEach(function(id) {
          casper.then(function() {
            var element = '#' + id; // eslint-disable-line no-var
            var content = // eslint-disable-line no-var
              this.getHTML(element); // eslint-disable-line no-invalid-this
            if (config.debug === true) {
              console.info( // eslint-disable-line no-console
                id,
                element,
                config.browser[key].test[id],
                config.browser[key].userAgentString
              );
            }
            test.assertExists(element, element + ' element exist');
            test.assertEquals(
              content,
              config.browser[key].test[id],
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

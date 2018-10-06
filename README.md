[![tests][tests]][tests-url]
[![coverage][coverage]][coverage-url]
[![maintainability][maintainability]][maintainability-url]

# js.device.detector
jQuery Plugin to get Device and Browser Information like OS Name, Version or Browser Name, Version.

Make your Visitor Browser, Device and OS Name and Version available in Javascript.

The plugin can also discover mobile and desktop devices and a general browser support against a (pre) configured browser matrix.

## npm
[![npm][npm]][npm-url]
```
npm install --save js.device.detector
```

## Example

### Usage

```html
<script src="../node_modules/jquery/dist/jquery.min.js"></script>
<script src="../node_modules/js/device.detector/dist/jquery.device.detector.min.js"></script>
<script>
  // init
  var d = $.fn.deviceDetector;
  if (d.isDesktop()) {
    alert(
      'You are using ' +
      d.getBrowserName() +
      ' as Desktop Browser on ' +
      d.getOsName() +
      '.'
    );
  }
  console.log(d.getInfo());
  // return
  // {
  //     "browserVersion": 66,
  //     "browserName": "Google Chrome",
  //     "browserId": "chrome",
  //     "osVersion": "10_13_4",
  //     "osVersionString": "10_13_4",
  //     "osVersionCategories": {
  //         "major": 10,
  //         "minor": 13,
  //         "bugfix": 4
  //     },
  //     "osVersionMajor": 10,
  //     "osVersionMinor": 13,
  //     "osVersionBugfix": 4,
  //     "osName": "Apple Mac OS X",
  //     "osId": "macos",
  //     "supported": true,
  //     "mobile": false,
  //     "desktop": true,
  //     "safari": false,
  //     "iphone": false,
  //     "ipad": false,
  //     "ios": false,
  //     "macos": true,
  //     "chrome": true,
  //     "android": false,
  //     "firefox": false,
  //     "ie": false,
  //     "msie": false,
  //     "edge": false,
  //     "ieMobile": false,
  //     "windowsPhone": false,
  //     "windows": false,
  //     "opera": false,
  //     "operaMini": false,
  //     "blackberry": false,
  //     "linux": false,
  //     "bsd": false
  // }
</script>
```

### Browser Matrix
```js
// default browser matrix
{
  'supports': {
    'msie': {'id': 'msie', 'version': '11'},
    'edge': {'id': 'edge', 'version': '12'},
    'chrome': {'id': 'chrome', 'version': '66'},
    'firefox': {'id': 'firefox', 'version': '60'},
    'safari': {'id': 'safari', 'version': '11'},
  },
}
```

```html
<script>
  // custom browser matrix
  $.fn.deviceDetector(
    {
      'supports': {
        'edge': {'id': 'edge', 'version': '12'},
        'chrome': {'id': 'chrome', 'version': '72'},
        'firefox': {'id': 'firefox', 'version': '68'},
      },
    }
  );
</script>
```

## Documentation

* [Available  Methods](https://exiguus.github.io/js.device.detector/external-_jQuery.fn.deviceDetector_.html)
* [Coverage](https://exiguus.github.io/js.device.detector/coverage/js/index.html)
* [Docs](https://exiguus.github.io/js.device.detector/)

```
'functions': {
  'public': {
    'getBrowserId': {
      'return': 'string',
    },
    'getBrowserName': {
      'return': 'string',
    },
    'getBrowserVersion': {
      'return': 'number',
    },
    'getInfo': {
      'return': 'object',
    },
    'getOsId': {
      'return': 'string',
    },
    'getOsName': {
      'return': 'string',
    },
    'getOsVersion': {
      'return': 'string',
    },
    'getOsVersionBugfix': {
      'return': 'number',
    },
    'getOsVersionCategories': {
      'return': 'object',
    },
    'getOsVersionMinor': {
      'return': 'number',
    },
    'getOsVersionMajor': {
      'return': 'number',
    },
    'getOsVersionString': {
      'return': 'string',
    },
    'isBlackberry': {
      'return': 'boolean',
    },
    'isBsd': {
      'return': 'boolean',
    },
    'isChrome': {
      'return': 'boolean',
    },
    'isDesktop': {
      'return': 'boolean',
    },
    'isEdge': {
      'return': 'boolean',
    },
    'isFirefox': {
      'return': 'boolean',
    },
    'isIe': {
      'return': 'boolean',
    },
    'isIeMobile': {
      'return': 'boolean',
    },
    'isIpad': {
      'return': 'boolean',
    },
    'isIphone': {
      'return': 'boolean',
    },
    'isLinux': {
      'return': 'boolean',
    },
    'isMacos': {
      'return': 'boolean',
    },
    'isMobile': {
      'return': 'boolean',
    },
    'isMsie': {
      'return': 'boolean',
    },
    'isOpera': {
      'return': 'boolean',
    },
    'isOperaMini': {
      'return': 'boolean',
    },
    'isSafari': {
      'return': 'boolean',
    },
    'isSupported': {
      'return': 'boolean',
    },
    'isWindows': {
      'return': 'boolean',
    },
    'isWindowsPhone': {
      'return': 'boolean',
    },
  },
```

## Testing

### Unit test
![test-unit][test-unit]

[QUnit](https://github.com/exiguus/js.device.detector/blob/master/src/js/jquery.device.detector.test.js) against the [device.detector](https://github.com/exiguus/js.device.detector/tree/master/dist) with a [current coverage](https://exiguus.github.io/js.device.detector/coverage/) of `97.52% Statements 157/161 86.96% Branches 40/46 100% Functions 51/51 97.44% Lines 152/156`.

### Integration test
![test-integration][test-integration]

[~40 User-Agent Strings](https://github.com/exiguus/js.device.detector/blob/master/tests/casper/browser.config.js) against the [device.detector](https://github.com/exiguus/js.device.detector/tree/master/dist) to make sure different User-Agent Strings are correctly matched.



[tests]: https://img.shields.io/travis/exiguus/js.device.detector/master.svg
[tests-url]: https://travis-ci.org/exiguus/js.device.detector

[maintainability]:
  https://api.codeclimate.com/v1/badges/6eaaa84b942cab654bf7/maintainability
[maintainability-url]:
https://codeclimate.com/github/exiguus/js.device.detector/maintainability

[coverage]:
https://api.codeclimate.com/v1/badges/6eaaa84b942cab654bf7/test_coverage
[coverage-url]:
https://codeclimate.com/github/exiguus/js.device.detector/test_coverage

[npm]: https://img.shields.io/npm/v/js.device.detector.svg
[npm-url]: https://npmjs.com/package/js.device.detector

[licenses-url]: https://img.shields.io/npm/l/js.device.detector.svg
[licenses]: https://github.com/exiguus/js.device.detector

[test-integration]: https://exiguus.github.io/js.device.detector/jsdoc/static/device.detector.test.casperjs.gif

[test-unit]: https://exiguus.github.io/js.device.detector/jsdoc/static/device.detector.test.qunit.png

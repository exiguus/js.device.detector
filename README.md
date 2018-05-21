[![tests][tests]][tests-url]
[![coverage][coverage]][coverage-url]
[![maintainability][maintainability]][maintainability-url]

# js.device.detector
jQuery Plugin to get Device and Browser Information

## Documentation
[jsDoc](https://exiguus.github.io/js.device.detector/)

---

## TODO
* jQuery Plugin
  * Code Coverage Qunit with Istanbul (https://github.com/asciidisco/grunt-qunit-istanbul)
  * Qunit test private functions (https://philipwalton.com/articles/how-to-unit-test-private-functions-in-javascript/)
    * strip-code `/* test-code */`
* ES6 Class / Module
  * deviceDetector Config
  * deviceDetector Class
  * deviceDetector Module
  * Jasmine Unit tests
  * Code Coverage with Istanbul and Mocha


```
// grunt-clean-code
strip_code: {
  options: {
    start_comment: "start: test-code",
    end_comment: "end: test-code",
  },
  dist: {
    src: "dist/*.js"
  }
}
```


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

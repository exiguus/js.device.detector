var CONSOLE_LOG = false || // eslint-disable-line no-var
  $('body').hasClass('development');
var DEVELOPMENT = false || // eslint-disable-line no-var
  $('body').hasClass('development');

QUnit.module('Test Device Detector jQuery Plugin', function(hooks) {
  hooks.before(function(assert) {
    $('#qunit-fixture').html('');
    assert.ok(true, 'before called');
  });
  QUnit.test('call hooks', function(assert) {
    assert.expect(1);
  });
  QUnit.moduleStart(function(details) {
    // configure
    $.__TEST__DeviceDetector = {
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
        'private': {
          '__removeEmptyValuesFromArray': {
            'return': 'object',
            'cases': {
              'mixedArray': {
                'actual': [1, 2, 3, 4, '', 'bar', ' ', 'foo'],
                'expected': [1, 2, 3, 4, 'bar', ' ', 'foo'],
              },
              'booleanArray': {
                'actual': [true, false, '', 'yay'],
                'expected': [true, false, 'yay'],
              },
              'emptyArray': {
                'actual': [],
                'expected': [],
              },
            },
          },
          '__isMatching': {
            'return': 'boolean',
            'cases': {
              'emptyArray': {
                'actual': [],
                'expected': false,
              },
              'blankArray': {
                'actual': [''],
                'expected': false,
              },
            },
          },
          '__isDeviceType': {
            'return': 'boolean',
            'cases': {
              'emptyArray': {
                'actual': {
                  'args': {
                    'value': '[],[]',
                  },
                },
                'expected': false,
              },
              'blankArrayObject': {
                'actual': {
                  'args': {
                    'value': '[\'\'],{}',
                  },
                },
                'expected': false,
              },
            },
          },
          '__getBrowserVersion': {
            'return': 'number',
          },
          '__getBrowserName': {
            'return': 'string',
          },
          '__getOsVersion': {
            'return': 'object',
          },
          '__getOsName': {
            'return': 'string',
          },
          '__isSupported': {
            'return': 'boolean',
          },
        },
      },
    };
    if (CONSOLE_LOG) {
      console.info( // eslint-disable-line no-console
        'Now running: ',
        details.name
      );
    }
  });
  QUnit.test('$.fn.deviceDetector', function(assert) {
    assert.equal(
      typeof $.fn.deviceDetector === 'function',
      true,
      '$.fn.deviceDetector is object'
    );
    assert.equal(
      typeof $.fn.deviceDetector() === 'boolean',
      true,
      '$.fn.deviceDetector() return boolean'
    );
  });
  QUnit.test('$.fn.deviceDetector.functions.public', function(assert) {
    $.each($.__TEST__DeviceDetector.functions.public, function(key, value) {
      assert.equal(
        eval('typeof $.fn.deviceDetector.' + key + ' === \'function\''),
        true,
        '$.fn.deviceDetector.' + key + ' is function'
      );
      if (value.return !== 'undefined') {
        assert.equal(
          eval(
            'typeof $.fn.deviceDetector.' +
            key + '() === \'' + value.return + '\''
          ),
          true,
          '$.fn.deviceDetector.' + key + '() return ' + value.return
        );
      }
    });
  });
  if (DEVELOPMENT) {
    QUnit.test('$.fn.deviceDetector.functions.private', function(assert) {
      $.each($.__TEST__DeviceDetector.functions.private, function(key, value) {
        assert.equal(
          eval('typeof $.fn.deviceDetector.' + key + ' === \'function\''),
          true,
          '$.fn.deviceDetector.' + key + ' is function'
        );
        if (value.return !== 'undefined') {
          assert.equal(
            eval(
              'typeof $.fn.deviceDetector.' +
              key + '() === \'' + value.return + '\''
            ),
            true,
            '$.fn.deviceDetector.' + key + '() return ' + value.return
          );
        }
        if (value.cases !== 'undefined') {
          $.each(value.cases, function(ckey, cvalue) {
            if (cvalue.actual !== 'undefined' &&
              cvalue.expected !== 'undefined') {
              assert.deepEqual(
                eval(
                  '$.fn.deviceDetector.' +
                  key + '(' +
                  (
                    (typeof cvalue.actual.args !== 'undefined') ?
                      cvalue.actual.args.value :
                      JSON.stringify(cvalue.actual)
                  )
                  + ')'
                ),
                cvalue.expected,
                '$.fn.deviceDetector.' + key + '() return ' +
                  JSON.stringify(cvalue.expected)
              );
            }
          });
        }
      });
    });
  }
  QUnit.moduleDone(function(details) {
    $('#qunit-fixture').html('');
    if (CONSOLE_LOG) {
      console.info( // eslint-disable-line no-console
        'Finished running: ',
          details.name,
        'Failed/total: ',
          details.failed,
          details.total
      );
    }
  });
});

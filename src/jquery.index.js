(function() {
//   $.fn.deviceDetector(
//     {'browsers':
//       {'names':
//         {'firefox':
//           {'name': 'Custom Mozilla Firefox Name'},
//         },
//       },
//       'supports': {
//         'msie': {'id': 'msie', 'version': '11'},
//         'edge': {'id': 'edge', 'version': '12'},
//         'chrome': {'id': 'chrome', 'version': '66'},
//         'firefox': {'id': 'firefox', 'version': '60'},
//         'safari': {'id': 'safari', 'version': '11'},
//       },
//     }
//   );
  var d = $.fn.deviceDetector; // eslint-disable-line no-var
  var userAgentString = navigator.userAgent || // eslint-disable-line no-var
    navigator.appVersion;
  $('#useragent').text(userAgentString);
  // Info
  $('#info').text(JSON.stringify(d.getInfo(), false, 4));
  // General
  $('#supported').text(d.isSupported());
  $('#mobile').text(d.isMobile());
  $('#desktop').text(d.isDesktop());
  // Browser
  $('#browserVersion').text(d.getBrowserVersion());
  $('#browserName').text(d.getBrowserName());
  $('#browserId').text(d.getBrowserId());
  // OS
  $('#osVersion').text(d.getOsVersion());
  $('#osVersionString').text(d.getOsVersionString());
  $('#osVersionCategories').text(JSON.stringify(d.getOsVersionCategories()));
  $('#osVersionMajor').text(d.getOsVersionMajor());
  $('#osVersionMinor').text(d.getOsVersionMinor());
  $('#osVersionBugfix').text(d.getOsVersionBugfix());
  $('#osName').text(d.getOsName());
  $('#osId').text(d.getOsId());
  // Apple
  $('#safari').text(d.isSafari());
  $('#iphone').text(d.isIphone());
  $('#ipad').text(d.isIpad());
  $('#ios').text(d.isIos());
  $('#macos').text(d.isMacos());
  // Google
  $('#chrome').text(d.isChrome());
  $('#android').text(d.isAndroid());
  // Mozilla
  $('#firefox').text(d.isFirefox());
  // Microsoft
  $('#ie').text(d.isIe());
  $('#msie').text(d.isMsie());
  $('#edge').text(d.isEdge());
  $('#ieMobile').text(d.isIeMobile());
  $('#windowsPhone').text(d.isWindowsPhone());
  $('#windows').text(d.isWindows());
  // Opera
  $('#opera').text(d.isOpera());
  $('#operaMini').text(d.isOperaMini());
  // BlackBerry
  $('#blackberry').text(d.isBlackberry);
  // other
  $('#linux').text(d.isLinux());
  $('#bsd').text(d.isBsd());
  $('dl dd').each(function() {
    var _this = $(this); // eslint-disable-line no-var, no-invalid-this
    var status = _this.text(); // eslint-disable-line no-var
    _this.attr('data-status', status);
  });
})();

/* eslint-disable no-var */
(function() {
  // eslint-disable-next-line require-jsdoc
  function fn() {
    var deviceDetector = new window.DeviceDetector.default();

    var userAgentString = navigator.userAgent ||
      navigator.appVersion;

    document.getElementById('useragent').textContent = userAgentString;
    // Info
    document.getElementById('info').textContent =
      JSON.stringify(deviceDetector.getInfo, false, 4);
    // General
    document.getElementById('supported')
      .textContent = deviceDetector.isSupported;
    document.getElementById('mobile')
      .textContent = deviceDetector.isMobile;
    document.getElementById('desktop')
      .textContent = deviceDetector.isDesktop;
    // Browser
    document.getElementById('browserVersion').textContent =
      deviceDetector.getBrowserVersion;
    document.getElementById('browserName').textContent =
      deviceDetector.getBrowserName;
    document.getElementById('browserId').textContent =
      deviceDetector.getBrowserId;
    // OS
    document.getElementById('osVersion').textContent =
      deviceDetector.getOsVersion;
    document.getElementById('osVersionString').textContent =
      deviceDetector.getOsVersionString;
    document.getElementById('osVersionCategories').textContent =
      JSON.stringify(deviceDetector.getOsVersionCategories);
    document.getElementById('osVersionMajor').textContent =
      deviceDetector.getOsVersionMajor;
    document.getElementById('osVersionMinor').textContent =
      deviceDetector.getOsVersionMinor;
    document.getElementById('osVersionBugfix').textContent =
      deviceDetector.getOsVersionBugfix;
    document.getElementById('osName').textContent =
      deviceDetector.getOsName;
    document.getElementById('osId').textContent =
      deviceDetector.getOsId;
    // Apple
    document.getElementById('safari').textContent = deviceDetector.isSafari;
    document.getElementById('iphone').textContent = deviceDetector.isIphone;
    document.getElementById('ipad').textContent = deviceDetector.isIpad;
    document.getElementById('ios').textContent = deviceDetector.isIos;
    document.getElementById('macos').textContent = deviceDetector.isMacos;
    // Google
    document.getElementById('chrome').textContent = deviceDetector.isChrome;
    document.getElementById('android').textContent = deviceDetector.isAndroid;
    // Mozilla
    document.getElementById('firefox').textContent = deviceDetector.isFirefox;
    // Microsoft
    document.getElementById('ie').textContent = deviceDetector.isIe;
    document.getElementById('msie').textContent = deviceDetector.isMsie;
    document.getElementById('edge').textContent = deviceDetector.isEdge;
    document.getElementById('ieMobile').textContent = deviceDetector.isIeMobile;
    document.getElementById('windowsPhone').textContent =
      deviceDetector.isWindowsPhone;
    document.getElementById('windows').textContent = deviceDetector.isWindows;
    // Opera
    document.getElementById('opera')
      .textContent = deviceDetector.isOpera;
    document.getElementById('operaMini')
      .textContent = deviceDetector.isOperaMini;
    // BlackBerry
    document.getElementById('blackberry')
      .textContent = deviceDetector.isBlackberry;
    // other
    document.getElementById('linux').textContent = deviceDetector.isLinux;
    document.getElementById('bsd').textContent = deviceDetector.isBsd;
    // style
    document.querySelectorAll('dl dd').forEach((element) => {
      var status = element.textContent;
      element.setAttribute('data-status', status);
    });

    var browserLogoSvgSelector =
      'header > .logo svg.browser.logo';
    document.querySelector(browserLogoSvgSelector)
      .style.display = '';
    document.querySelector('.' + deviceDetector.getBrowserId)
      .style.display = 'inline-block';
    var osLogoSvgSelector = 'header > .logo svg.os.logo';
    document.querySelector(osLogoSvgSelector)
      .style.display = '';
    document.querySelector('.' + deviceDetector.getOsId)
      .style.display = 'inline-block';
  }

  // eslint-disable-next-line require-jsdoc
  function ready(window) {
    if (document.readyState != 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready();
})();

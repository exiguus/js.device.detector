/* globals
  casper
  config
*/
/* eslint-disable require-jsdoc,  no-unused-vars, no-var */
function printTestInfo(string) {
  casper.echo('INFO: ' + string, 'INFO');
}

function printTestInfos(string) {
  casper.echo(string);
}

function getTestCaptureName(id, timestamp) {
  var unixtime = timestamp === undefined ? '' : new Date().getTime();
  return config.capture.path +
    id +
    unixtime +
    config.capture.fileEnding;
}

function objectCount(obj) {
  var count = 0;
  for (var k in obj) {
      if (obj.hasOwnProperty(k)) {
         ++count;
      }
  }
  return count;
}

/* globals
  casper
*/
/* eslint-disable require-jsdoc,  no-unused-vars, no-var */
function printTestInfo(string) {
  casper.echo('\n/** ' + string + ' **/', 'INFO');
}
function printTestInfos(string) {
  casper.echo(string);
}
function printTestStartInfo(string) {
  casper.echo('\n/*** START ' + string + ' test ***/', 'INFO');
}

function getTestCaptureName(id, capture) {
  return capture.path + id +
    '-' + new Date().getTime() +
    '.' + capture.fileEnding;
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

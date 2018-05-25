/*
 * Gruntfile.js
 */

'use strict';
let config = require('./build/helper/config');
config.options.pkg = require('./package.json');

module.exports = function(grunt) {
  // load only used tasks and add fallbacks for those which cannot be find
  require('jit-grunt')(grunt, {
    'replace': 'grunt-text-replace',
    'usebanner': 'grunt-banner',
    'comments': 'grunt-stripcomments',
    'strip_code': 'grunt-strip-code',
    'qunit': 'grunt-qunit-istanbul',
  });
  // measures the time each task takes
  require('time-grunt')(grunt);

  // Load grunt configurations automatically
  let configs = require('load-grunt-configs')(grunt, config.options);

  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  /*
   * TASKS
   */

  grunt.registerTask('build', [
    'eslint',
    'uglify',
  ]);

  grunt.registerTask('dist', [
    'clean',
    'build',
    'copy',
    'strip_code',
    'comments',
    'usebanner',
    'jsdoc',
  ]);

  grunt.registerTask('test', [
    'qunit',
  ]);

  grunt.registerTask('default', ['dist']);
};

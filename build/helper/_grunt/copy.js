module.exports = {
  dist: {
    cwd: '<%= paths.dev %>/js/',
    dest: '<%= paths.dist %>/',
    expand: true,
    src: [
      'jquery.<%= name.plugin %>.js',
      '<%= name.plugin %>.module.js',
      '<%= name.plugin %>.class.js',
    ],
  },
  coverageJquery: {
    cwd: '<%= paths.coverage %>/jquery/report-html/',
    dest: '<%= paths.jsdocs %>/<%= paths.coverage %>/jquery/',
    expand: true,
    src: [
      '**',
    ],
  },
  icovJquery: {
    cwd: '<%= paths.coverage %>/jquery/report-Icov/',
    dest: '<%= paths.coverage %>/jquery/',
    expand: true,
    src: [
      'Icov.info',
    ],
  },
  static: {
    cwd: '<%= paths.static %>/',
    dest: '<%= paths.jsdocs %>/<%= paths.static %>/',
    expand: true,
    src: [
      '**',
    ],
  },
};

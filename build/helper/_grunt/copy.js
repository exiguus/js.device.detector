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
  coverage: {
    cwd: '<%= paths.coverage %>/report-html/',
    dest: '<%= paths.docs %>/<%= paths.coverage %>/',
    expand: true,
    src: [
      '**',
    ],
  },
  icov: {
    cwd: '<%= paths.coverage %>/report-Icov/',
    dest: '<%= paths.coverage %>/',
    expand: true,
    src: [
      'Icov.info',
    ],
  },
  static: {
    cwd: '<%= paths.static %>/',
    dest: '<%= paths.docs %>/<%= paths.static %>/',
    expand: true,
    src: [
      '**',
    ],
  },
};

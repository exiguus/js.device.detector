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
};

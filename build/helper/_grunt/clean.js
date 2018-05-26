module.exports = {
  dist: [
    '<%= paths.dist %>/**',
    '!<%= paths.docs %>/static',
    '<%= paths.docs %>/**',
    '<%= paths.coverage %>/**',
  ],
};

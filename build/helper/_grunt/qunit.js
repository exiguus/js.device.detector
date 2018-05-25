module.exports = {
  options: {
    '--web-security': 'no',
    'coverage': {
      disposeCollector: true,
      src: ['<%= paths.src %>/js/jquery.<%= name.plugin %>.js'],
      instrumentedFiles: 'temp/',
      htmlReport: '<%= paths.coverage %>/html/',
      coberturaReport: '<%= paths.coverage %>/',
      lcovReport: '<%= paths.coverage %>/',
      jsonReport: '<%= paths.coverage %>/',
      jsonSummaryReport: '<%= paths.coverage %>/',
      linesThresholdPct: 85,
    },
  },
  all: ['<%= paths.src %>/index.jquery.html'],
};

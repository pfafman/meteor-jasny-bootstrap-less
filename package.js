Package.describe({
  summary: "Jasny Bootstrap packaged for meteor",
  version: "3.1.3",
  git: "https://github.com/pfafman/meteor-jasny-bootstrap-less.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.use('jquery', 'client');
  api.use('less', 'client');

  api.addFiles([
    'lib/js/jasny-bootstrap.js',
  ], 'client');
});


Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jquery', 'client');
  api.use('less', 'client');
  api.use('pfafman:jasny-bootstrap-less');
  api.addFiles([
    'lib/js/jasny-bootstrap.js'
  ], 'client');
});

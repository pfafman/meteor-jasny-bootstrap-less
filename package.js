Package.describe({
  name: "pfafman:jasny-bootstrap-less",
  summary: "Jasny Bootstrap packaged for meteor",
  version: "3.1.3_2",
  git: "https://github.com/pfafman/meteor-jasny-bootstrap-less.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.0');

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

// @file default.js
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var config = require('../config').server;

gulp.task('server',function() {
  gulp.src(config.src)
      .pipe(webserver(config.server));
});

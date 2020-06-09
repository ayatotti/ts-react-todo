// @file watch.js
var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('watch', function() {
  gulp.watch(config.jssrc, ['webpack']);
//  gulp.watch(config.csssrc, ['stylus']);
  gulp.watch(config.htmlsrc, ['copy']);
});

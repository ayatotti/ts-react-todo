// @file copy.js
var gulp = require('gulp');
var config = require('../config').copy;

gulp.task('copy', function () {
    gulp.src(config.src,{base: 'src/www'})
        .pipe(gulp.dest(config.dest));
});

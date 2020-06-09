// @file webpack.js
var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var webpack = require('webpack-stream');
var config = require('../config').webpack;

gulp.task('webpack', function () {
  gulp.src(config.entry)
    .pipe(plumber())
    .pipe(webpack(config))
    .pipe(gulpif(config.uglify, uglify()))
    .pipe(gulp.dest(config.dest));
});

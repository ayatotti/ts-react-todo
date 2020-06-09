// @file stylus.js
var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-clean-css');
var config = require('../config').stylus;

gulp.task('stylus', function () {
    gulp.src(config.src)
        .pipe(plumber())                          // エラー出ても止まらないようにする
        .pipe(stylus(config.options))             // 実際コンパイルしてるのはここ
        .pipe(autoprefixer(config.autoprefixer))  // vendor-prefixつける
        .pipe(gulpif(config.minify, minify()))    // 必要ならminifyする
        .pipe(gulp.dest(config.dest));            // 出力する
});

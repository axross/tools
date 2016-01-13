'use strict';

const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const gulp = require('gulp');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

let isWatching = false;

gulp.task('bundle:js', done => {
  let isAlreadyFinished = false;

  webpack(Object.assign({}, webpackConfig, {
    watch: isWatching,
  }), (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);

    gutil.log('\n', stats.toString({
      version: false,
      chunks: false,
      colors: true,
    }));

    if (!isAlreadyFinished) {
      isAlreadyFinished = true;
      done();
    }
  });
});

gulp.task('bundle:css', () => {
  gulp.src('./client/app.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename('bundle.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public'));
});

gulp.task('bundle', ['bundle:css', 'bundle:js']);
gulp.task('watch-enable', () => isWatching = true);
gulp.task('bundle-watch', ['watch-enable', 'bundle'], () => {
  gulp.watch('./client/**/*.styl', ['bundle:css']);
});

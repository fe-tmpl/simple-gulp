var gulp = require('gulp');
var gutil = require('gulp-util');
var mkdirp = require('mkdirp');

var pathUtil = require('./utils/path-util');

gulp.task('sync-task', function() {
  gutil.log('sync task generating folder without callback definition in gulp.task definition');
  mkdirp.sync(pathUtil.resolve('public/sync'));
});
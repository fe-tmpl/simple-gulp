var gulp = require('gulp');
var gutil = require('gulp-util');
var mkdirp = require('mkdirp');

var pathUtil = require('./utils/path-util');

gulp.task('async-task', function(done) {
  gutil.log('async task generating folder function will executing by calling done()');
  mkdirp(pathUtil.resolve('public/async'), function(error) {
    if (error) {
      gutil.log('error:', error);
    }
    gutil.log('async generating complete, calling done..');
    done();
  });
});
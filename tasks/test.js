var gulp = require('gulp');
var sequence = require('gulp-sequence');

// test suppose including unittest, integration-test, e2e-test ...
gulp.task('test', sequence(
    ['test:unit'],
    ['test:int'],
    ['test:e2e']
));

gulp.task('test:unit', function() {
});

gulp.task('test:int', function() {
});

gulp.task('test:e2e', function() {
});

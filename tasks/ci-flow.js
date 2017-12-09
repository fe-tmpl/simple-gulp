var gulp = require('gulp');
var sequence = require('gulp-sequence');


gulp.task('ci-flow', sequence(
    ['clean'],
    ['build'],
    ['test']
    ['package']
));
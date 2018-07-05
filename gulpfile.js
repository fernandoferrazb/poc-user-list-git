var gulp = require('gulp');
var sass = require('gulp-sass');

var clientSass = './client';

//builder sass
gulp.task('sass', function () {
  return gulp.src(clientSass+'/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(clientSass+'/css-dist'));
});

//builder with watch
gulp.task('watch', function () {
  gulp.watch(clientSass+'/scss/**/*.scss', ['sass']);
});
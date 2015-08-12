
module.exports = function(gulp) {

  gulp.task('cal', function() {
    return gulp.src('./src/**/*.ics')
            .pipe( gulp.dest('./dist/') );
  });

};


module.exports = function(gulp) {

  gulp.task('images', function() {
    return gulp.src('./src/images/**/*.{png,gif,jpg,jpeg,svg}')
            .pipe( gulp.dest('./dist/images/') );
  });

};

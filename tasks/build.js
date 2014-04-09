
module.exports = function(gulp) {

  gulp.task('build', ['clean','bump'], function(){
    return gulp.start('templates','images');
  });

};

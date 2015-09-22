
module.exports = function(gulp) {

  gulp.task('build', ['clean'], function(){
    return gulp.start('templates','images','styles');
  });

  gulp.task('deployBuild', ['styles'], function(){
    return gulp.start('deployTemplates','images');
  });

};

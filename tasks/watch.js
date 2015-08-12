'use strict';

module.exports = function(gulp) {
  gulp.task('watch', ['connect'], function() {
    gulp.watch('./src/scss/**/*.scss',['styles']);
    gulp.watch(['./src/**/*.html','!./src/includes/**/*.html'],['templates']);
    gulp.watch('./src/images/**/*.{png,gif,jpg,jpeg,svg}',['images']);
  });
};

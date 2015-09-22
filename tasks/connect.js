'use strict';

module.exports = function(gulp) {
  gulp.task('connect', function() {
    return gulp.plugin.connect.server({
      root: ['./dist'],
      port: 1337,
      livereload: true
    });
  });
};

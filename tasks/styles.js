'use strict';

module.exports = function(gulp) {
  gulp.task('styles', function() {
    return gulp.src('./src/scss/**/*.scss')
      .pipe ( gulp.plugin.plumber({errorHandler: gulp.plugin.notify.onError('<%= error.message %>')}) )

      .pipe ( gulp.plugin.sass({ outputStyle: ('nested') }) )
      .pipe (
        gulp.plugin.autoprefixer({
          browsers: ['ie >= 10', '> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
          cascade: false
        })
      )

      .pipe ( gulp.dest('./dist/css') )

      .pipe( gulp.plugin.connect.reload() );
  });
};

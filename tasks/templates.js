
module.exports = function(gulp) {
  var banner = ['<!--',
      ' - <%= pkg.name %> - <%= pkg.description %>',
      ' - @version v<%= pkg.version %>',
      ' - @link <%= pkg.homepage %>',
      ' -->',
      ''].join('\n');

  gulp.task('templates', function(){
    return gulp.src(['./src/**/*.html','!./src/includes/**/*.html'])
            .pipe( gulp.plugin.inlineCss({'removeStyleTags': false}) )
            .pipe( gulp.plugin.fileInclude() )
            .pipe( gulp.plugin.header(banner, {pkg: require('../package.json')}) )
            .pipe( gulp.dest('./dist') );
  });

};

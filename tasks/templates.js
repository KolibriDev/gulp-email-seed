'use strict';
module.exports = function(gulp) {
  var banner = ['<!--',
      ' - <%= pkg.name %> - <%= pkg.description %>',
      ' - @version v<%= pkg.version %>',
      ' - @link <%= pkg.homepage %>',
      ' -->',
      ''].join('\n');

  gulp.task('templates', function(){
    return gulp.src(['./src/**/*.html','!./src/includes/**/*.html'])
            .pipe( gulp.plugin.replace('$path.to', '/') )
            .pipe( gulp.dest('./dist') )
            .pipe( gulp.plugin.connect.reload() );
  });

  var branchname = gulp.plugin.util.env.branch || 'master';
  gulp.task('deployTemplates', function(){
    return gulp.src(['./src/**/*.html','!./src/includes/**/*.html'])
            .pipe( gulp.plugin.replace('$path.to', '//emails.kolibri.is/' + branchname) )
            .pipe( gulp.plugin.inlineCss({
              applyStyleTags: false,
              removeStyleTags: false,
              applyLinkTags: true,
              removeLinkTags: true,
              url: 'file://' + __dirname + '/../dist/'
              }) )
            .pipe( gulp.plugin.header(banner, {pkg: require('../package.json')}) )
            .pipe( gulp.dest('./dist') );
  });

};

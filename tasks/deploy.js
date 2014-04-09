
module.exports = function(gulp) {

  gulp.task('deploy', function() {
    var pkg = require('../package.json');
    if (pkg.hasOwnProperty('remotePath') && pkg.remotePath !== '' && pkg.hasOwnProperty('deployCmd') && pkg.deployCmd !== '') {

      return gulp.src(['./dist/*'],{read:false})
              .pipe( gulp.plugin.exec(pkg.deployCmd,{remotePath: pkg.remotePath}) );
    } else {
      console.log('deployCmd or remotePath is missing! Add deployCmd/remotePath to package.json to use this task!');
    }
  });

};

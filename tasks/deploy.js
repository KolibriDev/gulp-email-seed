'use strict';

module.exports = function(gulp) {
  var spawn = require('child_process').spawn,
      pkg  = require('../package.json'),
      Q = require('q');

  gulp.task('deploy', ['bump'], function() {
    var deferred = Q.defer();

    if (pkg.hasOwnProperty('deployCmd') && pkg.deployCmd !== '') {
      var deployCmd = spawn(pkg.deployCmd);
      deployCmd.stdout.on('data', function(data) {
        process.stdout.write(data);
      });

      deployCmd.stdout.on('close', function(){
        return deferred.resolve();
      });
    } else {
      console.log('Deployment command is missing! Add deployCmd to package.json to use this task!');
      return deferred.resolve();
    }

    return deferred.promise;
  });
};

'use strict';

module.exports = function(grunt) {

  grunt.registerTask('timestamp', function() {
    var options = this.options({
      file: 'dist/.timestamp'
    });
    var timestamp = +new Date();
    var contents = timestamp.toString();
    grunt.file.write(options.file, contents);
  });

  grunt.config.set('timestamp', {
    options: {
      file: '.timestamp'
    }
  });

  grunt.loadNpmTasks('timestamp');
};

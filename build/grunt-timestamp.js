'use strict';

module.exports = function(grunt) {
  grunt.registerTask('grunt-timestamp', function() {
    var options = this.options({
      file: '.timestamp'
    });
    var timestamp = +new Date();
    var contents = timestamp.toString();
    grunt.file.write(options.file, contents);
  });

  grunt.loadNpmTasks('grunt-timestamp');
};

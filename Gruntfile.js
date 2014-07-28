module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ['www'],

    broccoli: {
      production: {
        dest:"www",
        env:"production"
      },
      development: {
        env:"development"
      }
    },

    targethtml: {
      production: targetHtmlConfig,
      test: targetHtmlConfig
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-broccoli');

  // Default task(s).
  grunt.registerTask('prebuild', ['clean', 'broccoli:production:build']);

  grunt.registerTask('build:production', ["prebuild", "targethtml:production"]);
  grunt.registerTask('build:test', ["prebuild", "targethtml:test"]);

  grunt.registerTask('serve', 'broccoli:development:serve')
};

var targetHtmlConfig = {
        files: {
          "www/index.html" : "www/index.html"
        }
      };
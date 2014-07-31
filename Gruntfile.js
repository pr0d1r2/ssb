module.exports = function(grunt) {
  grunt.initConfig({
    nodewebkit: {
      basecamp: {
        options: {
            build_dir: './webkitbuilds',
            mac: true,
            win: false,
            linux32: false,
            linux64: false,
            mac_icns: './basecamp-src/icon.icns',
            zip: true,
            credits: './basecamp-src/credits.html'
        },
        src: ['./basecamp-src/**/*']
      },
      gmail: {
        options: {
            build_dir: './webkitbuilds',
            mac: true,
            win: false,
            linux32: false,
            linux64: false,
            mac_icns: './gmail-src/icon.icns',
            zip: true,
            credits: './gmail-src/credits.html'
        },
        src: ['./gmail-src/**/*']
      },
      harvest: {
        options: {
            build_dir: './webkitbuilds',
            mac: true,
            win: false,
            linux32: false,
            linux64: false,
            mac_icns: './harvest-src/icon.icns',
            zip: true,
            credits: './harvest-src/credits.html'
        },
        src: ['./harvest-src/**/*']
      }
    },
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', ['nodewebkit']);
};
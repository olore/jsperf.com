module.exports = function(grunt) {

  grunt.initConfig({

    concat: {

      dist: {
        src: [  'dependencies/platformjs/platform.js',            'dependencies/benchmarkjs/benchmark.js', 
                'dependencies/benchmarkjs/example/jsperf/ui.js',  'dependencies/benchmarkjs/plugin/ui.browserscope.js'],
        dest: '_js/main.src.js'
      }
    },

    min: {
      dist: {
        src: ['_js/main.src.js'],
        dest: '_js/main.js'
      }
    }

  });


  // Default task.
  grunt.registerTask('default', 'concat min');


};

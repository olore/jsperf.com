module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib'); //https://npmjs.org/package/grunt-contrib , $ npm install grunt-contrib-copy


  grunt.initConfig({

    concat: {
      dist: {
        src: [  'dependencies/platformjs/platform.js',            
                'dependencies/benchmarkjs/benchmark.js', 
                'dependencies/benchmarkjs/example/jsperf/ui.js',  
                'dependencies/benchmarkjs/plugin/ui.browserscope.js'
        ],
        dest: '_js/main.src.js'
      }
    },

    min: {
      dist: {
        src: ['_js/main.src.js'],
        dest: '_js/main.js'
      }
    },

    copy: {
      dist: {
        files: {
          "_js/html5.js": "dependencies/html5js/html5.js"
        }

      }
    }

  });


  // Default task.
  grunt.registerTask('default', 'concat copy min');


};

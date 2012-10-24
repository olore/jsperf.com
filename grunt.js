module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib'); //https://npmjs.org/package/grunt-contrib , $ npm install grunt-contrib grunt-contrib-copy
  grunt.loadNpmTasks('grunt-shell');   //https://github.com/sindresorhus/grunt-shell, $ npm install grunt-shell



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

    shell: {
      test: {
          command: 'php ./_tmp/replace_vars.php',
          stdout: true,
          stderr: true,
          failOnError: true
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
  grunt.registerTask('default', 'concat shell min copy');


};

module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          hostname: 'localhost',
          keepalive: true,
          base: 'dist',
          open: true
        }
      }
    },

    babel: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/app.js': 'app/app.js'
        }
      }
    },

    browserify: {
      dist: {
        files: {
          'dist/app.js': ['app/app.js'],
        },
        options: {
          transform: ['babelify']
        }
      }
    },

    stylus: {
      compile: {
        options: {
          paths: ['assets/css']
        },
        files: {
          'dist/css/login.css': 'assets/styl/login.styl',
          'dist/css/home.css': 'assets/styl/home.styl'
        }
      }
    },

    copy: {
      main: {
        files: [
          // 图片
          {
            expand: true,
            cwd: "assets/",
            src: ['images/**/*'],
            dest: 'dist/'
          }
        ],
      },
    },

    watch: {
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['browserify'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['assets/styl/*.styl'],
        tasks: ['stylus'],
        options: {
          spawn: false
        }
      },
      images: {
        files: ['assets/images/*'],
        tasks: ['copy']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['browserify']);
}

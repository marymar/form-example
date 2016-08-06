module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        files: [{
          expand: true,
          cwd: 'src/assets/scss',
          src: ['*.scss'],
          dest: './dist/assets/css/',
          ext: '.css'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['copy:js'],
        options: {
          spawn: false
        }
      },

      css: {
        files: 'src/**/*.scss',
        tasks: ['sass:dev', 'postcss']
      },

      html: {
        files: 'src/**/*.html',
        tasks: ['copy:html']
      },

      img: {
        files: 'src/assets/img/*.*',
        tasks: ['copy:img']
      },

      js: {
        files: 'src/js/*.*',
        tasks: ['copy:js']
      }


    },

    copy: {
      html: {
        files: [
          {expand: true, cwd: 'src/', src: ['**/*.html'], dest: 'dist/'}
        ]
      },
      js: {
        files: [
          {expand: true, cwd: 'src/js', src: ['**/*.js'], dest: 'dist/assets/js'}
        ]
      },
      img: {
        files: [
          {expand: true, cwd: 'src/assets/img', src: ['**/*.*'], dest: 'dist/assets/img'}
        ]
      }
    },

    postcss: {
      options: {
        map: true,

        processors: [
          require('pixrem')(),
          require('autoprefixer')({browsers: ['last 3 version', 'iOS >= 6.1', 'ie > 9']}),
          require('cssnano')()
        ]
      },
      dist: {
        src: 'dist/assets/css/*.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['watch']);

  grunt.registerTask('build', ['sass', 'copy', 'postcss']);
};

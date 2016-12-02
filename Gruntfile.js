module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width:240,
            suffix: '_1x',
            quality: 30
          }, {
            width:480,
            suffix: '_2x',
            quality: 30
          }, {
            width:720,
            suffix: '_3x',
            quality: 30
          }, {
            width:230,
            suffix: '_1x',
            quality: 30
          }, {
            width:460,
            suffix: '_2x',
            quality: 30
          }, {
            width:690,
            suffix: '_3x',
            quality: 30
          }]
        },

        files: [{
          expand: true,
          src: ['beach.jpg', 'sand.jpg', 'sky.jpg'],
          cwd: 'assets/',
          dest: 'images/'
        }]

      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      }
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.registerTask('default', ['responsive_images']);
};

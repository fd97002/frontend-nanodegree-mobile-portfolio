/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
  
  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'css',
        src: ['*.css', '!*.min.css'],
        dest: 'css',
        ext: '.min.css'
      },
      {
        expand: true,
        cwd: 'views/css',
        src: ['*.css', '!*.min.css'],
        dest: 'views/css',
        ext: '.min.css'
      }
      ]
    }
},

uglify: {
    options: {
      mangle: false
    },
    
    my_target: {
      files: {
        'js/perfmatters.min.js': ['js/perfmatters.js'],
        'views/js/main.min.js': ['views/js/main.js']

      }
    }
  },

  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'index.html': 'index-1.html'     // 'destination': 'source'
      }
    }
  }
});
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['cssmin', 'uglify', 'htmlmin']);

};

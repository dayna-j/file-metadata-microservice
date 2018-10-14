module.exports = function(grunt) {

    const sass = require('node-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: ['./views/styles/sass/*.scss'],
                tasks: ['sass']
            }
        },

        sass: {
            options: {
                // sourceMap: true,
                implementation: sass,
            },
            dist: {
                files: {
                    './views/styles/main.css' : './views/styles/sass/main.scss'
                }
            }
        }
    });

    // Load plugins here..
    
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Register tasks

    // grunt.registerTask('all',['run','sleep']);
    grunt.registerTask('default',['sass:dist']);

}
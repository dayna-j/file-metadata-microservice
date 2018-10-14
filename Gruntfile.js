module.exports = function(grunt) {

    const sass = require('node-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
    
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');

    

    // Register tasks
    
    
        
    
    
    // grunt.registerTask('run', () => {
    //     console.log('I am running');
    // });

    // grunt.registerTask('sleep', () => {
    //     console.log('I am sleeping');
    // });

    // grunt.registerTask('all',['run','sleep']);
    grunt.registerTask('default',['sass:dist']);

}
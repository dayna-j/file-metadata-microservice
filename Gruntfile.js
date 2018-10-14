module.exports = function(grunt) {
    
    grunt.initConfig({
        sass: {
            build: {
                files: [{
                    src: '/views/styles/sass/main.scss',
                    dest: '/views/styles/main.css'
                }]
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
    grunt.registerTask((default,[sass]));

}
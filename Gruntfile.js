module.exports = function(grunt) {
    // Do grunt-related things in here
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'app/js/app.js',
                    'app/js/asorder/*.js',
                    'app/js/catalysticonvertor/*.js',
                    'app/js/content/*.js',
                    'app/js/enquiry/*.js',
                    'app/js/footer/*.js',
                    'app/js/header/*.js',
                    'app/js/home/*.js',
                    'app/js/whereused/*.js',
                ],
                dest: 'build/js/<%= pkg.name %>.js',
            },
        },
        uglify: {
            options: {
                sourceMap: true
            },
            build: {
                src: [
                    'build/js/<%= pkg.name %>.js'
                ],
                dest: 'build/js/<%= pkg.name %>.min.js'
            }
        },
        copy:{
            images: {
                expand: true,
                cwd: 'app/images',
                src: [ '*' ],
                dest: 'build/images/'
            },
            css: {
                expand: true,
                cwd: 'app/css',
                src: [ '*' ],
                dest: 'build/css/'
            }
        }
    });


    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', [ 'concat', 'uglify', 'copy:images', 'copy:css' ]);

};
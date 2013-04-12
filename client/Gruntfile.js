module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        jshint: {
            options: {
                /* Enforcing options */
                bitwise: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                plusplus: true,
                // undef: true,
                // unused: true,
                trailing: true,

                /* Environment options */
                browser: true,
                jquery: true,
                node: true
            },
            all: [
                'Gruntfile.js',
                'js/*.js',
                '../server/js/*.js'
            ]
        },
        imagemin: {
            dynamic_mappings: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    src: ['*'],
                    cwd: './img',
                    dest: './img'
                }, {
                    expand: true,
                    src: ['*'],
                    cwd: './img/initiatives',
                    dest: './img/initiatives'
                }, {
                    expand: true,
                    src: ['*'],
                    cwd: './img/initiatives-300',
                    dest: './img/initiatives-300'
                }]
            }
        },
        concat: {
            templates: {
                src: [
                    'html/index.html',
                    'templates/carousel.html',
                    'templates/representatives.html'
                ],
                dest: 'index.html'
            }
        },
        watch: {
            concat: {
                files: [
                    'html/index.html',
                    'templates/carousel.html',
                    'templates/representatives.html'
                ],
                tasks: ['concat']
            }
        }
    });

    // Default task
    grunt.registerTask('default', ['jshint', 'imagemin']);
};
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cfg:
        {
            paths:
            {
                root: __dirname,
                source: '<%= cfg.paths.root %>/src',
                output: '<%= cfg.paths.root %>/dist',
                bower: '<%= cfg.paths.root %>/bower_components'
            }
        },
        connect: {
            server: {   
                options: {
                    port: 9001,
                    base: '<%= cfg.paths.source %>/',
                    keepalive: false,
                    hostname: '*',
                    open: true,
                    livereload: true
                }
            }
        },
        watch: {
            index:
            {
                files: '<%= cfg.paths.source %>/*.html',
                options: {
                    hostname: '*',
                    port: 9002,
                    livereload: true
                }

            },
        },
        clean:
        {
            build:
            {
                src: '<%= cfg.paths.output%>/',
                options:
                {
                    force: true
                }
            }
        },
        copy: {
            html: {
                src: '<%= cfg.paths.source %>/index.html',
                dest: '<%= cfg.paths.output %>/index.html',
            },
            css: {
                src: '<%= cfg.paths.source %>/jumbotron.css',
                dest: '<%= cfg.paths.output %>/jumbotron.css',
            },
        },
    });


    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', ['clean', 'copy', 'connect', 'watch']);
    grunt.registerTask('default', ['build']);
    grunt.registerTask('help', 'displays console help', function() {
        grunt.log.writeln('Welcome...');
    });


};
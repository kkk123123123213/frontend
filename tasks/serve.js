module.exports = function(grunt) {
    var appConfig =
        {
            connect: {
                server: {
                    options: {
                        port: 9001,
                        base: ['<%= cfg.paths.output %>/','<%= cfg.paths.bower %>/'],
                        keepalive: false,
                        hostname: '*',
                        open: true,
                        livereload: true
                    }
                }
            },
            watch: {
                dist:
                {
                    files: ['<%= cfg.paths.output %>/*.html'],
                    options: {
                       //hostname: '*',
                       // port: 9002,
                        livereload: true
                    }

                },
                source:
                {
                    files: ['<%= cfg.paths.source %>/*.html'],
                    options: {
                       // hostname: '*',
                       // port: 9004,
                        livereload: true
                    },
                    tasks: ['copy']

                },
            }
        };


    grunt.config.merge(appConfig);
    grunt.registerTask('serve', 'register tasks from serve.js',
        [
            'connect',
            'watch'
        ]);
}
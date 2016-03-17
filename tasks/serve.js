module.exports = function(grunt) {
    var appConfig =
        {
            connect: {
                server: {
                    options: {
                        port: 9001,
                        base: '<%= cfg.paths.output %>/',
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
                    files: ['<%= cfg.paths.source %>/*.html', '<%= cfg.paths.output %>/*.html'],
                    options: {
                        hostname: '*',
                        port: 9002,
                        livereload: true
                    }

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
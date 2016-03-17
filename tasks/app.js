module.exports = function(grunt) {
    var appConfig =
        {
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
        };


    grunt.config.merge(appConfig);
    grunt.registerTask('app', 'register tasks from app.js',
        [
            'clean',
            'copy'
        ]);
}
module.exports = function(grunt) {

  grunt.initConfig({
	connect: {
    server: {
      options: {
        port: 9001,
        base: '',
		keepalive:false,
		hostname: '*',
		open: true,
		livereload: true
      }
    }
  },
    watch: {
		index:
		{
		  files: ['*.html'],	
			  options: {				 
					hostname: '*',
					port: 9002,
					livereload:true				 
			  }
			
		},
    }
  });

  require('load-grunt-tasks')(grunt, {
    pattern: 'grunt-contrib-*',
    config: 'package.json',
    scope: 'devDependencies',
    requireResolution: true
});

  grunt.registerTask('build', ['connect','watch']);
  grunt.registerTask('default', ['build']);

};
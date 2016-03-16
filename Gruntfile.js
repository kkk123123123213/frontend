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

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('build', ['connect','watch']);
  grunt.registerTask('default', ['build']);

};
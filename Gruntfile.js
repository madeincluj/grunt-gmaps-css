module.exports = function(grunt) {
	
	grunt.initConfig({
		gmapsCss: {
			all: {
				files: [{
					expand: true,
					cwd: 'test/',
					src: '*.css',
					dest: 'test/',
					ext: '.js'
				}]
			}
		}
	});

	grunt.loadTasks('tasks');

};
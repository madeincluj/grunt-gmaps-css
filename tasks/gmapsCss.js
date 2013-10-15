'use strict';

module.exports = function(grunt) {
	var gcss = require('gmaps-css');
	grunt.registerMultiTask('gmapsCss', 'Convert .gcss to Google Maps style', function() {
		this.files.forEach(function(file) {
			var str = 'var GMAPS_STYLES = ';
			file.src.forEach(function(filepath) {
				var f = grunt.file.read(filepath, 'utf-8');
				var json = gcss.parse(f);
				str += JSON.stringify(json, null, 2);
				str += ';';
			});
			grunt.file.write(file.dest, str);
		});
	});
};
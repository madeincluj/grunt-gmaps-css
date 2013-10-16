/*
 * grunt-gmaps-css
 * https://github.com/madeincluj/grunt-gmaps-css
 *
 * Copyright (c) 2013 Dan Burzo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var gcss = require('gmaps-css');
  grunt.registerMultiTask('gmaps_css', 'Convert .gcss to Google Maps style', function() {
    this.files.forEach(function(file) {
      var str = 'var GMAPS_STYLES = ';
      var arrays = file.src.map(function(filepath) {
        var f = grunt.file.read(filepath);
        return gcss.parse(f);
      });
      var arr = Array.prototype.concat.apply([], arrays);
      str += JSON.stringify(arr, null, 2);
      str += ';';
      grunt.file.write(file.dest, str);
    });
  });
};

"use strict";

var gulp = require('gulp');
var gulpList = require('gulp-task-listing');
var electron = require('electron-prebuilt');
require('shelljs/global');

gulp.task('help', gulpList);

gulp.task('default', ['help']);

gulp.task('run', function() {
  var command = electron + " " + __dirname;
  exec(command, function(status, output) { });
});

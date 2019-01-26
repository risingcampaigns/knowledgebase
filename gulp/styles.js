var project = require('./_project.js');
var gulp    = require('gulp');
var postcss = require('gulp-postcss');

//  Plugins
var precss  = require('precss');
var csso    = require('postcss-csso');
var pixelstorem = require('postcss-pixels-to-rem');

// Compile CSS
gulp.task('styles', function() {
  var processors = [
    pixelstorem({
      base: 16
    }),
    precss(),
    csso({forceMediaMerge: true})
  ];
  return gulp.src(project.src + '/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest(project.dest + '/css'));
});
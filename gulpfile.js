/*

  gulpfile
    compiles sass, concats+uglifies js, optimizes images, setup watch

*/


// ========================================
// Include Gulp Plugins
// ========================================

var site = 'dist/';
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');


// ========================================
// Compile SASS
// ========================================

gulp.task('sass', function() {

  return sass('src/sass/site.scss', {
      precision: 4,
      style: 'expanded'
    })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefixer({
      browsers: ['last 8 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(site + 'css'))
    .pipe(livereload());

});


// ========================================
// Compile JS
// ========================================

gulp.task('script', function() {

  return gulp.src('src/js/*')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('site.js'))
    .pipe(uglify())
    .pipe(gulp.dest(site + 'js'))
    .pipe(livereload());

});


// ========================================
// Optimize Images
// ========================================

gulp.task('images', function() {

  return gulp.src('src/images/**/*')
    .pipe(imagemin({
      optimizationLevel: 4,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(site + 'images'));

});


// ========================================
// Compile Font Icon Set
// ========================================

// !: This feature was excluded
// !: The possibility of using an entire icon set exclusively is too high

// Consider adding:
//   https://www.npmjs.com/package/gulp-iconfont
//   https://www.npmjs.com/package/gulp-iconfont-css


// ========================================
// Watch Tasks
// ========================================

gulp.task('watch', function() {

  // setup live reload listener
  livereload.listen();

  // if any sass files change(in this folder, [compile sass])
  gulp.watch('src/sass/**/*.scss', ['sass']);

  // if any js files change(in this folder, [check for errors, compress js])
  gulp.watch('src/js/*.js', ['script']);

  // if any images change(in this folder, [compress images])
  gulp.watch('src/images/**/*', ['images']);

});


// ========================================
// Default Gulp Tasks
// ========================================

gulp.task('default', ['watch']);


// ========================================
// Specific Gulp Tasks
// ========================================

gulp.task('build', ['sass', 'script', 'images']);

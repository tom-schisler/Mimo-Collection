/*

  gulpfile

*/


// ========================================
// Include Gulp Plugins
// ========================================

var site = 'C:/Users/mimod/Downloads/build/dist/';
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');


// ========================================
// Compile SASS
// ========================================

gulp.task('sass', function() {

  return sass('src/sass/')
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefixer({
      browsers: ['last 8 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(site + 'css'));

});


// ========================================
// Compile JS
// ========================================

gulp.task('script', function() {

  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('plugins.js'))
    .pipe(uglify())
    .pipe(gulp.dest(site + 'js'));

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
// Watch Tasks
// ========================================

gulp.task('watch', function() {

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

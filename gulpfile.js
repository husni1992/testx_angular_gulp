var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

//** perfect
gulp.task('sass', function(){
  return gulp.src('app/**/*.+(scss|sass)') //to compile both sass an scss format files
    .pipe(sass()) // Using gulp-sass
    .pipe(concat('bundle_sass.css')) 
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist/sass_css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

//** perfect if only css
gulp.task('css', function(){
    return gulp.src('app/**/*.css')
        .pipe(concat('bundle.css'))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist/justCss'))
        .pipe(browserSync.reload({
          stream: true
        }))
})

gulp.task('watch', ['sass','css','browserSync'],function(){
    gulp.watch('app/**/*.+(scss|sass)', ['sass']);
    gulp.watch('app/**/*.css', ['css'])
})

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
          baseDir: "./"
        },
    })
});
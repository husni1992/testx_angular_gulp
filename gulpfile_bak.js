var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var config = {
    paths: {
        index: 'index.html',
        html: 'app/**/*.html',
        js: 'app/**/*.js',
        css: 'app/**/*.css',
        sass: 'app/**/*.+(scss|sass)'
    }
};

gulp.task('css', function(){
    return gulp.src(config.paths.css)
        .pipe(browserSync.reload({
          stream: true
        }))
});

//** perfect ** we shud give alternate path of the build css >> <link rel="stylesheet" href="app/app.style.css">
gulp.task('sass', function(){
  return gulp.src(config.paths.sass) //to compile both sass an scss format files
    .pipe(sass()) // Using gulp-sass
    .pipe(concat('app.style.css')) 
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, browserSync.reload);
    gulp.watch(config.paths.css, ['css']);
    gulp.watch(config.paths.sass, ['sass']);
    gulp.watch(config.paths.js, browserSync.reload);
})

gulp.task('serve', ['watch', 'browserSync']); 

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
          baseDir: "./"
        },
    })
});
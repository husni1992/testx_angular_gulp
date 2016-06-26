var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var config = {
    paths: {
        html: 'app/**/*.html',
        css: 'app/**/*.css',
        js: 'app/**/*.js'
    }
};

gulp.task('css', function(){
    gulp.src(config.paths.css)
        .pipe(browserSync.reload({
            stream: true
        }))
})

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
})

gulp.task('watch', function(){
    gulp.watch(config.paths.html, browserSync.reload);
    gulp.watch(config.paths.css, ['css']);
    gulp.watch(config.paths.js, browserSync.reload);
})

gulp.task('default',['watch', 'browserSync']);
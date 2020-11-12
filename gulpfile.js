const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

gulp.task('copyHtml', async function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});

gulp.task('minify', async function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', async function(){
    gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('imageMin', async function() {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default', gulp.series('copyHtml', 'imageMin', 'minify', 'css'));
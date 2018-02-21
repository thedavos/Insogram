var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('styles', function () {
    gulp
        .src('styles.sass')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'))
})

gulp.task('assets', function () {
    gulp
        .src('assets/*')
        .pipe(gulp.dest('public'))
})

gulp.task('scripts', function () {
    browserify('./src/index.js')
        .transform(babel, {presets: ['env']})
        .bundle()
        .pipe(source('index.js'))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('public'))
})

gulp.task('default', ['styles', 'assets', 'scripts'])
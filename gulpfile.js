const gulp = require('gulp');
const sass = require('gulp-sass');
const gfi = require('gulp-file-include');
var bs = require('browser-sync').create();

const layouts = [
    './layouts/**/*'
];

const includeFiles = [
    './pages/*.html'
];

const buildDir = './';


gulp.task('include-html', function () {
    return gulp.src(includeFiles)
        .pipe(gfi())
        .pipe(gulp.dest(buildDir)).pipe(bs.reload({ stream: true }));
});

gulp.task('sass', function () {
    return gulp.src("styles/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('styles/css')).pipe(bs.reload({ stream: true }));
});

gulp.task('build', async function () {
    (gulp.parallel("sass", "include-html")());
});

gulp.task('watch', function () {
    bs.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('styles/scss/*.scss', gulp.series(['sass']));
    gulp.watch(['pages/**/*.html', 'layouts/**/*.html'], gulp.series(['include-html']));
});
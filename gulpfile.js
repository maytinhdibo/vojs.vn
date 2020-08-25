const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src("styles/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('styles/css'))
})

gulp.task('watch', function () {
    gulp.watch('styles/scss/*.scss', gulp.series(['sass']));
});
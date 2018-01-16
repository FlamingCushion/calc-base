var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('src/app.scss')
        .pipe(sass()) //using gulp-sass
        .pipe(gulp.dest('src/css'))
});

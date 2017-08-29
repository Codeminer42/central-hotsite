const gulp = require('gulp')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin');
const pump = require('pump');




gulp.task('image-optimize', () =>
    gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
);


gulp.task('sass', () => {
 	return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));

});

gulp.task('sass-compress', () => {
 return gulp.src('./sass/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./dist/css/minify'));
});

gulp.task('watch', () => {
//    gulp.watch(['./assets/js/**/*.js'],['js-compress']); 
    gulp.watch(['./images/*.*'],['image-optimize']);
	 gulp.watch(['./sass/**/*.scss'], ['sass']);
      gulp.watch(['./sass/**/*.scss'], ['sass-compress']);
})


gulp.task('default', () =>  {
	gulp.start('image-optimize','sass','sass-compress','watch');
});
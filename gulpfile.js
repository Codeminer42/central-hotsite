const gulp = require('gulp')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin');

gulp.task('image-optimize', () =>
  gulp.src('./public/assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/dist/images'))
);

gulp.task('sass', () => {
  return gulp.src('./public/assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/dist/css'));

});

gulp.task('sass-compress', () => {
  return gulp.src('./public/assets/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./public/dist/css/minify'));
});

gulp.task('watch', () => {
  //    gulp.watch(['./public/assets/js/**/*.js'],['js-compress']);
  gulp.watch(['./public/assets/images/*.*'], ['image-optimize']);
  gulp.watch(['./public/assets/sass/**/*.scss'], ['sass']);
  gulp.watch(['./public/assets/sass/**/*.scss'], ['sass-compress']);
})

gulp.task('default', () => {
  gulp.start('image-optimize', 'sass', 'sass-compress');
});

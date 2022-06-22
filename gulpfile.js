const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

const optimizeImages = () => {
  return src('./public/assets/images/*')
    .pipe(imagemin())
    .pipe(dest('./public/dist/images'))
};

const buildStyles = () => {
  return src('./public/assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./public/dist/css'));
};

const buildCompressedStyles = () => {
  return src('./public/assets/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('./public/dist/css/minify'));
};

const watchFiles = () => {
  watch(['./public/assets/images/*.*'], optimizeImages);
  watch(['./public/assets/sass/**/*.scss'], parallel(buildStyles, buildCompressedStyles));
};

exports.watch = watchFiles;
exports.default = parallel(optimizeImages, buildStyles, buildCompressedStyles);

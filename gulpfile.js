const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngcrush = require('imagemin-pngcrush');
const mozjpeg = require('imagemin-mozjpeg');
const jpegtran = require('imagemin-jpegtran');
const svgo = require('imagemin-svgo');
const gifsicle = require('imagemin-gifsicle');

gulp.task('images', () => {
  return gulp.src('./pages/img/**/*.{jpg,png,svg,gif}', {base: './pages/img'})
    .pipe(imagemin({
      progressive: true,
      quality: 50,
      svgoPlugins: [{removeViewBox: false}],
      optimizationLevel: 7,
      use: [
        pngcrush(),
        jpegtran(),
        svgo(),
        gifsicle()
      ],
      verbose: true
    }))
    .pipe(gulp.dest('./pages/img'))
});


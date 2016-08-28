const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngcrush = require('imagemin-pngcrush');
const mozjpeg = require('imagemin-mozjpeg');
const svgo = require('imagemin-svgo');
const gifsicle = require('imagemin-gifsicle');

gulp.task('images', () => {
  return gulp.src('./pages/img/**/*.{jpg,png,svg,gif}', {base: './pages/img'})
    .pipe(imagemin({
      progressive: true,
      quality: 50,
      svgoPlugins: [{removeViewBox: false}],
      use: [
        pngcrush(),
        mozjpeg(),
        svgo(),
        gifsicle()
      ],
      verbose: true
    }))
    .pipe(gulp.dest('./pages/img'))
});


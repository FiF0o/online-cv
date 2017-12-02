const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const pump = require('pump');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');

const config = {
  src: './_site/assets/',
  dest: './_site/assets/'
};

gulp.task('minify-css', () =>
  gulp.src(`${config.src}css/*.css`)
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('styles.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${config.dest}css/`))
);

gulp.task('minify-html', () =>
  gulp.src('./_site/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./_site/'))
);

gulp.task('minify-js', (cb) => {
  pump([
        gulp.src(`${config.src}js/main.js`),
        sourcemaps.init(),
        uglify(),
        concat('main.min.js'),
        sourcemaps.write('maps'),
        gulp.dest(`${config.dest}js`)
    ],
    cb
  );
});

gulp.task('images', () =>
  gulp.src('./_site/assets/images/**/*')
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('./_site/assets/images/'))
);

gulp.task('default', ['minify-html', 'minify-css', 'minify-js', 'images']);

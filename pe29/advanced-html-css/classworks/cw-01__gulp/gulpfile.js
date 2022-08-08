const gulp = require("gulp"),
  concat = require('gulp-concat'),
  clean = require('gulp-clean'),
  browserSync = require('browser-sync').create();

/*** PATHS ***/
const paths = {
  src: {
    css: "./src/css/*.css",
    js: "./src/js/*.js",
  },
  build: {
    css: "./build/css/",
    js: "./build/js/",
    self: "./build/"
  }
};

/*** FUNCTIONS ***/

const buildJS = () => (
  gulp.src(paths.src.js)
    .pipe(concat('script.js'))
    .pipe(gulp.dest(paths.build.js))
    .pipe(browserSync.stream())
);

const buildCSS = () => (
  gulp.src(paths.src.css)
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.build.css))
    .pipe(browserSync.stream())
);

const cleanBuild = () => (
  gulp.src(paths.build.self, {allowEmpty: true})
    .pipe(clean())
);

const watcher = () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch(paths.src.css, buildCSS).on("change", browserSync.reload);
  gulp.watch(paths.src.js, buildJS).on("change", browserSync.reload);
};

/*** TASKS ***/
gulp.task("clean", cleanBuild);
gulp.task("buildCSS", buildCSS);
gulp.task("buildJS", buildJS);

gulp.task("default", gulp.series(
  cleanBuild,
  buildCSS,
  buildJS,
  watcher
));
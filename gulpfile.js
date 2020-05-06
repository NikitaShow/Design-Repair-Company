const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


// Static server
 function bs() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

 function serveSass() {
  return gulp.src("./sass/*.sass")
      .pipe(sass())
      .pipe(gulp.dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;
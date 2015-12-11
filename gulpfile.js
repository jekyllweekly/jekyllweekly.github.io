var gulp        = require('gulp'),
    shell       = require('gulp-shell'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    newer       = require('gulp-newer'),
    imagemin    = require('gulp-imagemin'),
    // watch       = require('gulp-watch');
    browserSync = require('browser-sync');


//* Scripts
gulp.task('vendorjs', function() {
  return gulp.src('./_js/vendor/*.js')
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(rename({
      basename: "vendor",
      suffix: '.min'
    }))
    .pipe(gulp.dest('./js/'));
});

gulp.task('themejs', function() {
  return gulp.src('./_js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({
      basename: "main",
      suffix: '.min'
    }))
    .pipe(gulp.dest('./js'));
});


//* Images
gulp.task('images', function () {
    return gulp.src('./_images/*.{png,jpg,gif}')
        // .pipe(watch('./_images/**/*'))
        // .pipe(newer('./_images/*.{png,jpg,gif}'))
        .pipe(imagemin())
        .pipe(gulp.dest('./images/'));
});


//* BrowserSync
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: '_site/'
    }
  });
  // gulp.watch('_js/*.js', ['themejs']);
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});


//* Run Jekyll build and serve commands
gulp.task('build', shell.task(['jekyll build --config _config-dev.yml --watch']));
// gulp.task('serve', shell.task(['jekyll serve']));


// Default task (build and serve)
gulp.task('default', ['build', 'browser-sync']);

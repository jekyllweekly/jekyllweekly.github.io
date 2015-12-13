var gulp        = require('gulp'),
    shell       = require('gulp-shell'),
    browserSync = require('browser-sync');


//* BrowserSync
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: '_site/'
    }
  });
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});


//* Run Jekyll build and serve commands
gulp.task('build', shell.task(['jekyll build --config _config-dev.yml --watch']));


// Default task (build and serve)
gulp.task('default', ['build', 'browser-sync']);

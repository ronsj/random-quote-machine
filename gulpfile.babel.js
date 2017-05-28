import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const server = browserSync.create();
const reload = server.reload;

gulp.task('serve', () => {
  server.init({
    logPrefix: ' ⚡ ',
    notify: true,
    open: false,
    server: './src'
  });
  gulp.watch('**/*').on('change', reload);
});
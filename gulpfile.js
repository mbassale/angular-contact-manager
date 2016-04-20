var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pkg = require('./package.json');
var webserver = require('gulp-webserver');

var paths = {
  js: [
    'app/vendor/angular.js',
    'app/vendor/angular-animate.js',
    'app/vendor/angular-route.js',
    'app/vendor/angular-sanitize.js',
    'app/vendor/angular-strap.js',
    'app/vendor/angular-strap.tpl.js',
    'app/app.js',
    'app/services/ContactsService.js',
    'app/controllers/AppController.js',
    'app/controllers/IndexController.js',
    'app/controllers/AddController.js',
    'app/controllers/ContactController.js',
    'app/controllers/DemoController.js'
  ]
};

gulp.task('uglify', function () {
  gulp.src(paths.js)
    .pipe(concat('ContactsMgr.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['uglify']);
});

gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 3000,
      path: '/',
      fallback: 'index.html',
      directoryListing: true
    }));
});

gulp.task('default', ['webserver', 'uglify']);

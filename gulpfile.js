var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pkg = require('./package.json');
var webserver = require('gulp-webserver');

var paths = {
    js: [
        'assets/js/vendor/jquery.js',
        'assets/js/vendor/bootstrap.js',
        'assets/js/vendor/angular.js',
        'assets/js/vendor/angular-animate.js',
        //'assets/js/vendor/angular-resource.js',
        'assets/js/vendor/angular-route.js',
        'assets/js/vendor/angular-sanitize.js',
        'assets/js/vendor/angular-strap.js',
        'assets/js/vendor/angular-strap.tpl.min.js',
        'assets/js/controller.js'
    ]
};

gulp.task('uglify', function(){
    gulp.src(paths.js)
    .pipe(concat('ContactsMgr.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/build'));
});

gulp.task('watch', function(){
    gulp.watch(paths.js, ['uglify']);
});

gulp.task('webserver', function() {
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

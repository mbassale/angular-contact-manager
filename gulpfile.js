var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var server = require('gulp-express');
var pkg = require('./package.json');

var paths = {
  less: 'frontend/less/*.less',
  css: [
    'frontend/css/bootstrap.css'
  ],
  js: [
    'frontend/vendor/angular.js',
    'frontend/vendor/angular-animate.js',
    'frontend/vendor/angular-route.js',
    'frontend/vendor/angular-sanitize.js',
    'frontend/vendor/angular-strap.js',
    'frontend/vendor/angular-strap.tpl.js',
    'frontend/app.js',
    'frontend/services/ContactsService.js',
    'frontend/controllers/AppController.js',
    'frontend/controllers/IndexController.js',
    'frontend/controllers/AddController.js',
    'frontend/controllers/ContactController.js',
    'frontend/controllers/DemoController.js'
  ]
};

gulp.task('less', function(){
  gulp.src('frontend/less/bootstrap.less')
    .pipe(less({
        filename: 'bootstrap.css'
    }))
    .pipe(gulp.dest('frontend/css'));
});

gulp.task('styles', function () {
  gulp.src(paths.css)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('backend/public/css'));
});

gulp.task('uglify', function () {
  gulp.src(paths.js)
    .pipe(concat('ContactsMgr.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('backend/public/js'));
});

gulp.task('watch', function () {
  gulp.watch(paths.js, ['uglify']);
});

gulp.task('server', function () {
  server.run(['backend/bin/www']);

  gulp.watch([
    'backend/bin/www',
    'backend/routes/**/*.js',
    'backend/app.js'
  ], [server.run]);
  gulp.watch(paths.js, ['less', 'styles', 'uglify', server.run]);
  gulp.watch(paths.less, ['less', 'styles', 'uglify', server.run]);
});

gulp.task('default', ['less', 'styles', 'uglify', 'server']);

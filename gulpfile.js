var gulp    = require('gulp');
var gutil   = require('gulp-util');
var nodemon = require('gulp-nodemon');
var jshint  = require('gulp-jshint');
var jade    = require('gulp-jade');
var sass    = require('gulp-sass');
var wiredep = require('wiredep').stream;


var path = {
  jsFiles: './**/*.js',
  sassFiles: './client/scss/*.scss',
  cssRoot: './client/css',
  jadeFiles: './client/templates/*.jade',
  htmlRoot: './client/html'
};

gulp.task('test', function() {
  console.log('hello');
});

gulp.task('sass', function() {
  gulp.src(path.sassFiles)
    .pipe(sass())
    .pipe(gulp.dest(path.cssRoot))
});

gulp.task('lint', function() {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('wiredepBower', function () {
  gulp.src('./client/index.html')
    .pipe(wiredep({
      directory: './bower_components',
      bowerJson: require('./bower.json')
    }))
    .pipe(gulp.dest('./dist'));
});


gulp.task('templates', function() {
  gulp.src('./lib/*.jade')
    .pipe(jade(path.________))
    .pipe(gulp.dest(path._______))
});

gulp.task('one', function() {
  gulp.src(path._____)
    .pipe(stylus())
    .pipe(gulp.dest(path._____));
})

gulp.watch('watch', function() {
  gulpwatch(path._____, ['lint']);
});

gulp.task('default', ['lint', 'templates', 'one', 'watch']);
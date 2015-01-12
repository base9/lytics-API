var gulp    = require('gulp');
var gutil   = require('gulp-util');
var nodemon = require('gulp-nodemon');
var jshint  = require('gulp-jshint');
var jade    = require('gulp-jade');
var stylus  = require('gulp-stylus');
var wiredep = require('wiredep').stream;


var path = {

};

gulp.task('test', function() {
  console.log('hello');
});

gulp.task('lint', function() {
  return gulp.src([path._____])
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
var fs         = require('fs');
var gulp       = require('gulp');
var upload     = require('@xxxxxx/gulp-kintone-jsupload');
var env = JSON.parse(fs.readFileSync('./config/env.json'));

gulp.task('dev', function () {
  env.urls.push("https://localhost:8080/dist/main.bundle.js");
  return gulp.src('config/**/*')    // ファイルはアップロードしない
    .pipe(upload(env));
});

gulp.task('prod', function () {
  return gulp.src('dist/**/*')
    .pipe(upload(env));
});

gulp.task('default', ['dev']);

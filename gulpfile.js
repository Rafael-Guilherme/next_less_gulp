const { task, src, dest, watch, series } = require('gulp');
const gulpless = require('gulp-less');
const postcss = require('gulp-postcss');
const csso = require('gulp-csso');
const autoprefixer = require('autoprefixer');
const NpmImportPlugin = require('less-plugin-npm-import');
const { obj } = require('through2');

const touch = () =>
  obj(function (file, enc, cb) {
    if (file.stat) {
      file.stat.atime = file.stat.mtime = file.stat.ctime = new Date();
    }
    cb(null, file);
  });

task('theme', function () {
  const plugins = [autoprefixer()];

  return src('src/styles/styles.less')
    .pipe(gulpless({
      javascriptEnabled: true,
      plugins: [new NpmImportPlugin({ prefix: '~' })]
    }))
    .pipe(postcss(plugins))
    .pipe(csso({
      debug: true
    }))
    .pipe(touch())
    .pipe(dest('./src/styles'));
});

task('watch', function () {
  return watch('./src/styles/**/*.less', series('theme'));
});

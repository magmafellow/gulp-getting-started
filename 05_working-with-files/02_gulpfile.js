const { src, dest } = require('gulp');
const babel = require('gulp-babel');

// The main API of a stream is the .pipe() method for chaining Transform or Writable streams.
exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(dest('output/'));
}

// Most often plugins will be placed between src() and dest() using the .pipe() method
//    and will transform the files within the stream.

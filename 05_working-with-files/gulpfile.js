const { src, dest } = require('gulp')

function copy(){
  return src('src/scripts/*.js')
    .pipe(dest('dist/'))
}

exports.copy = copy;

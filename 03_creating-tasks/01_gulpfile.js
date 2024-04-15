const { series } = require('gulp');

// private task, because not exported
function clean(cb) {
  // some code 
  
  cb();
}

function build(cb) {
  // body omitted

  cb();
}

exports.build = build;
exports.default = series(clean, build)

function defaultTask(cb) {
  // code for your default task
  cb();
}

function taskOne(cb) {
  console.log('task One in process...')
  cb();
}

function taskTwo(cb) {
  console.log('task Two in process...')
  cb();
}

exports.default = defaultTask;
exports.taskOne = taskOne;
exports.taskTwo = taskTwo;

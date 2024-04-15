const { src, dest } = require('gulp');

// returning a stream
function streamTask() {
  return src('*.js')
    .pipe(dest('output'));
}

exports.default = streamTask;

// returning a promise
function promiseTask() {
  return Promise.resolve('the value is ignored');
}

exports.default = promiseTask;

// returning event emitter
const { EventEmitter } = require('events');
function eventEmitterTask() {
  const emitter = new EventEmitter();
  // Emit has to happen async otherwise gulp isn't listening yet
  setTimeout(() => emitter.emit('finish'), 250);
  return emitter;
}

exports.default = eventEmitterTask;


// returning a child process
const { exec } = require('child_process');

function childProcessTask() {
  return exec('date');
}

exports.default = childProcessTask;

// returning an observable
const { exec } = require('child_process');

function childProcessTask() {
  return exec('date');
}

exports.default = childProcessTask;

// using error-first callback
function callbackTask(cb) {
  // `cb()` should be called by some async work
  cb();
}

exports.default = callbackTask;


// ---
// To indicate to gulp that an error occurred in a task using an error-first callback,
//    call it with an Error as the only argument.

function callbackError(cb) {
  // `cb()` should be called by some async work
  cb(new Error('kaboom'));
}

exports.default = callbackError;

// Another API
// However, you'll often pass this callback to another API instead of calling it yourself.

const fs = require('fs');

function passingCallback(cb) {
  fs.access('gulpfile.js', cb);
}

exports.default = passingCallback;

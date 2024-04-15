// It will throw an error because gulpfile.js should be titled as gulpfile.esm.js and esm module should be installed

export function task1(cb) {
  console.log('I am done, from task1() ');

  cb()
}

// Warning! Check first Comment Line

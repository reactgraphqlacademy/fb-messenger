/*
  calling this file by doing node my-test-framework/test-runner.js
  will look for all the file in my-test-framework folder and run them if
  the name of the file has a .test.js sufix
*/

const fs = require('fs');

const files = fs.readdirSync(__dirname);

const testFiles = files.filter(file => {
  if (file.includes('.test.js')) {
    const test = require(`./${file}`)
  }
})

/*
  calling this file by doing node my-test-framework/test-runner.js
  will look for all the file in my-test-framework folder and run them if
  the name of the file has a .test.js sufix
*/

const fs = require('fs')

const files = fs.readdirSync('./my-test-framework')

/*
Task, iterate over the files array and if the file name includes the sufix
'.test.js' then require the file. You can use the following snipet to check if
the file contains the sufix '.test.js' and if so require the file:

if(file.includes('.test.js')) {
  const test = require(`./${file}`)
}
*/

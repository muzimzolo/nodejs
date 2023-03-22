/*
  Challenge: Work with JSON and the file system
  1. Load and parse the JSON data
  2. Change the name and age property
  3. Stringify the changed object and overwrie the original data
  4. Test your work by viewing data in the JSOn file
*/
// importing file system package
const fs = require('fs')

// Load and parse the JSON data
const fileBuffer = fs.readFileSync('challenge.json')
const output = fileBuffer.toString()
// console.log(output)

// Change the name and age property
const fileData = JSON.parse(output)
fileData.name = 'Muzi'
fileData.age = 28
//console.log(fileData.name)

// Stringify the changed object and overwrie the original data
const name = JSON.stringify(fileData.name)
const age = JSON.stringify(fileData.age)
console.log(name)
console.log(age)


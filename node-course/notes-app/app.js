// importing files

// importing utils.js file
const add=require('./utils.js')
// importing notes.js file
const message=require('./notes.js')
// importing validator module
const validator = require('validator')

// Write code here

// calling utils.js 
const sum = add(4, -2)
console.log(sum)

// calling notes.js
const msg = message()
console.log(msg)

// calling validator module - check documentation
// validating an email address
console.log(validator.isEmail('muzi@gmail.com'))

// validating a url - has to adhere to http//example, www.example or example.com
console.log(validator.isURL('example.com'))




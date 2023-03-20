// importing a file
const add = require('./utils.js')
// importing notes.js
const message = require('./notes.js')

const sum = add(4, -2)
console.log(sum)

const msg = message()
console.log(msg)



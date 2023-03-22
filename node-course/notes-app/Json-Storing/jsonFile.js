// importing file system package
const fs = require('fs')

// creating a book JS object
const book = {
    title: 'Harry Potter',
    author: 'J.K Rowling'
}

// creating a JSON object by converting a JS object to JSON
const bookJSON = JSON.stringify(book)
console.log(bookJSON)
// writing a JSON file
fs.writeFileSync('book.json', bookJSON)
// reading a JSON file - comment out above line of code to avoid writing again
const dataBuffer = fs.readFileSync('book.json')
const dataJSON = dataBuffer.toString()
console.log(dataJSON) 

const data = JSON.parse(dataJSON)
console.log(data.title)

// converting a JSON object to String
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)




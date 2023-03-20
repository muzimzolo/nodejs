const { describe } = require('yargs')
const yargs = require('yargs')

// Customize yargs version
//yargs.version('17.7.1')


// run node input.js --help for these commands

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function() {
        console.log('Removing a new note!')
    }
})

// create a list command 
yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler: function() {
        console.log('listing a new note!')
    }
})

// create a read command
yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler: function() {
        console.log('reading a new note!')
    }
})

// add, remove, read, list

console.log(yargs.argv)
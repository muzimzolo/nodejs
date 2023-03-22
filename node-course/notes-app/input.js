const { describe } = require('yargs')
const yargs = require('yargs')

// Customize yargs version
//yargs.version('17.7.1')


// run node input.js --help for these commands

// Create add command
// run: node input.js add --title="Buy" --body="Items to buy"
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
             
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv) {
        console.log('Title: ' + argv.title)
        console.log('Title: ' + argv.body)
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
yargs.parse()
//console.log(yargs.argv)
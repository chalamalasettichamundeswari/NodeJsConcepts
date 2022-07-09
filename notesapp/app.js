// const fs = require('fs')
//fs.writeFileSync('notes.txt','This file was created by Nodejs')
//fs.appendFileSync('notes.txt','This file was created by Nodejs')

const validator = require('validator')
const yargs = require('yargs')

// console.log(process.argv);

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
      title:{
          describe:'Note title',
          demandOption : true,
          type:'string'
      },
      body:{
        describe:'Note body',
        demandOption : true,
        type:'string'
      }
    },
    handler:function(argv){
        console.log('Title',argv.title)
        console.log('Body',argv.body)
    }
})
yargs.parse()

// //Create remove command
// yargs.command({
//     command:'remove',
//     describe:'Remove a new note',
//     handler:function(){
//         console.log('Removing a new note')
//     }
// })
console.log(yargs.argv);
// const name = require('./utils.js')
// console.log(name)

// console.log(validator.isEmail('chamgmail.com'));
// console.log(validator.isURL('https:/read.io'));

// const command = process.argv[2];
// if(command === 'add'){
//    console.log('Adding note!')
// }else if(command === 'remove'){
//     console.log('Removing note!')
// }



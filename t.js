// const {star, age} = require('./people.js');

// console.log(star, age);

//---------------------------------------- os -----------------------------------------------------
// const os = require('os');
// console.log(os.platform(), os.hostname(), os.homedir());


//---------------------------------------- Reading file -------------------------------------------
// const fs = require('fs');

// fs.readFile('./files/blog11.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });


//---------------------------------------- write file ---------------------------------------------
// const fs = require('fs');
// fs.writeFile('./files/blog1.txt', 'Hello World Again!', () => {
//     console.log('File has been written');
// });

//make and remove directory 
// const fs = require('fs');

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder created successfully');
//     });
// }
// else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('Folder deleted successfully');
//     });
// }

//---------------------------------------- delete files--------------------------------------------

// const fs = require('fs');
// if(fs.existsSync('./delete.js')){
//     fs.unlink('./delete.js', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('File deleted');
//     });
// }
// else{
//     fs.writeFile('./delete.js', 'Hello',(err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('file created successfully');
//     });
// }

//---------------------------------------Stream-------------------------------------------
const fs = require('fs');

const readStream = fs.createReadStream('./files/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./files/blog4.txt');


//---------------------------------------piping-------------------------------------------
// readStream.pipe(writeStream);
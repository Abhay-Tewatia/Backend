// npm init -> package.json -> lekha jokha of the project
// console.log("Hello Node.js 🚀 ");

const fs  = require('fs')

// write
// fs.appendFile
// fs.copyFile
// fs.rename
// fs.unlink

// fs.writeFile("hey.txt" , "hello kaise ho ", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// } )

// fs.appendFile("hey.txt" , "main to thik hu", function(err){
//     if(err) console.log(err);
//     else console.log("done");
// } )

// fs.rename("hey.txt", "hello.txt",  function(err){
//     if (err) console.log(err);
//     else console.log("renamed done");
// })

// fs.


fs.unlink("hello.txt", function(err){
    if(err) console.log(err);
    else console.log("done ");
    
    
})
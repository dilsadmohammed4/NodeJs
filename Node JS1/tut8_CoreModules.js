/*
    CORE MODULES

    1. File System - fs

*/

var fs = require("fs");

var os = require("os");
// For Read File

// fs.readFile("dilu.txt", "utf8", (err, data) => {
//     console.log(data)
// });

// For Append File

const st = " This is my home .";

fs.appendFile("dilu.txt", st, () => {
    console.log("Text Inserted.")
});

console.log(os.platform());
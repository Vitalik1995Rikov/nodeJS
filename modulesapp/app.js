const fs = require("fs");

let fileContent = fs.readFileSync("hello.txt", "utf8");
let arr = Array.from(fileContent);
arr = arr.map((value) => value*2 );
fs.writeFileSync("hello.txt", "arr");
let data = fs.readFileSync("hello.txt", "utf8");
console.log(data);
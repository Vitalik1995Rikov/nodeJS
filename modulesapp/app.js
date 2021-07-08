const fs = require("fs");

let fileContent = fs.readFileSync("hello.txt", "utf8");
let arr = Array.from(fileContent);
let newArr = [];
for (value of arr) {
    let valueNew = Number(value);
    newArr.push(valueNew);
}

let newArrLast = [];
for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== 0) {
        newArrLast.push(newArr[i])
    }
}

console.log(newArrLast.length);
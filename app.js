const os = require("os");
const gretting = require("./gretting");

let userName = os.userInfo().username;

console.log(`Дата запроса: ${gretting.date}`);
console.log(gretting.getMessage(userName));
const express = require("express");

const app = express();

app.get("/", function(request, response) {
    console.log("Hello");
    response.end("Hello from express12")
});

app.listen(3000);
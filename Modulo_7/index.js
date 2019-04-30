var express = require("express");

const PORT = 8888;
const MESSAGE = process.env.MESSAGE ? process.env.MESSAGE : "No message";

var app = express();

app.get("/", function(req, res) {
  console.log(req);
  res.send("Hello world! - Message: " + MESSAGE);
});

app.get("/:name", function(req, res) {
  console.log(req);
  res.send("Hello " + req.params.name + " - Message: " + MESSAGE);
});

app.listen(PORT);
console.log("Running on http://localhost:" + PORT);

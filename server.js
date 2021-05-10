const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/css/styles.css", function (req, res) {
  res.sendFile(__dirname + req.originalUrl);
});

app.get("/images/*", function (req, res) {
  res.sendFile(__dirname + req.originalUrl);
});

app.listen(3100, function () {
  console.log("cv server running at 3100");
});

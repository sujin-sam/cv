const express = require("express");
const app = express();
const port = 3100;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/css", express.static(__dirname + "/css"));
app.use("/images", express.static(__dirname + "/images"));

app.listen(port, () => {
  console.log("cv server running at http://localhost:" + port);
});

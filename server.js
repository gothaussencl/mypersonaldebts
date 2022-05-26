const express = require("express");

const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/my-debts"));
app.get("/*", function (req, res) {
  console.log("test");
  res.sendFile(path.join(__dirname + "/dist/my-debts/index.html"));
});

app.listen(process.env.PORT || 8080);

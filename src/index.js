const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.write("Hello World!...");
  res.end();
});

app.listen(8080, function () {
  console.log("server running on 8080");
});

require("dotenv").config();

const express = require("express");
const config = require("./config");
const bodyParser = require("body-parser");
const cors = require('cors')
const formidable = require("formidable");

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
})); //handle body requests
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors())

app.post("/submit", (req, res) => {
  console.log("Received POST request")
  var form = new formidable.IncomingForm();

  form.parse(req);

  form.on("fileBegin", function (name, file) {
    file.path = __dirname + "/uploads/" + file.name;
  });

  form.on("file", function (name, file) {
    console.log("Uploaded" + file.name);
  });

  res.send("/");
});

app.listen(config.port, () => {
  console.log("Server listening on port %s, Ctrl+C to stop", config.port);
});
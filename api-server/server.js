require("dotenv").config();

const express = require("express");
// const multer = require('multer');
const config = require("./config");
// const upload = multer({ dest: 'uploads/' });
// const bodyParser = require("body-parser");
const formidable = require("formidable");

const app = express();
// //MULTER CONFIG: to get files to temp server storage
// const multerConfig = {
//   storage: multer.diskStorage({
//     //Then give the file a unique name
//     filename: function(req, file, next) {
//       console.log(file);
//       const ext = file.mimetype.split("/")[1];
//       next(null, file.fieldname + "-" + Date.now() + "." + ext);
//     }
//   })
// };
// app.use(bodyParser.urlencoded({ extended: false })); //handle body requests
// app.use(bodyParser.json());
app.use("/", express.static("public"));

app.post("/submit", function (req, res) {
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
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = new express();

//app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json());


// app.get('/calculator/add', function (req, res) {
//     response = {
//       result: req.query.param1 + req.query.param2,
//    };
//    res.end(JSON.stringify(response));
// })

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.send({
    result: parseInt(a) + parseInt(b)
  });
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(5000, () => {
  console.log("The server is running");
});


l
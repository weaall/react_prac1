const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const db = require("./config/db.js");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("root");
});


app.get("/member_table", (req, res) => {
  console.log("/member_table");
  db.query("select * from member_table", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

app.get("/member_table/name", (req, res) => {
    console.log("/member_table/name");
    db.query("SELECT * FROM member_table", function (err, rows){
    if (!err) {
      console.log(rows[0].name);
      res.send(rows[0].name);
    } else {
      console.log(err);
    }
  });
});

app.listen(PORT, () => {
  console.log("Server On : http://localhost:" + PORT);
});

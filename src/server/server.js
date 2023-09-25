const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;
const db = require("./config/db.js");

app.use(express.urlencoded({ extended: true }));

      app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("root");
});

app.get("/member_table", (req, res) => {
  console.log("고객데이터 조회");
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
  db.query("select * from member_table", function (err, rows) {
    if (!err) {
      console.log(rows[0].name);
      res.send(rows[0].name);
    } else {
      console.log(err);
    }
  });
});

app.post("/insert", (req, res) => {
  console.log("고객데이터 삽입");
  console.log(req.body);
  const name = req.body.name;
  const date = req.body.date;
  const address = req.body.address;
  const phone = req.body.phone;
  db.query(
    `INSERT INTO member_table (name, date, address, phone) VALUES('${name}','${date}','${address}','${phone}');`,
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/delete", (req, res) => {
  console.log("고객데이터 삭제");
  console.log(req.body);
  const id = req.body.id;
  db.query(
    `DELETE FROM member_table WHERE id=${id};`,
    (err, result) => {
      res.send(result);
    }
  );
});


app.listen(PORT, () => {
  console.log("Server On : http://localhost:" + PORT);
});

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;
const db = require("./config/db.js");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
  console.log("이름으로 찾기");
  db.query("select * from member_table", (err, rows) => {
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
  const regoBrand = req.body.regoBrand;
  const regoGroup = req.body.regoGroup;
  const regoNum = req.body.regoNum;
  const regoGrade = req.body.regoGrade;
  const name = req.body.name;
  const regoDate = req.body.regoDate;
  const phone = req.body.phone;
  const address = req.body.address;
  const addressDetail = req.body.addressDetail;
  db.query(
    `INSERT INTO member_table (regoBrand, regoGroup, regoNum, regoGrade, name, regoDate, phone, address, addressDetail) 
    VALUES('${regoBrand}','${regoGroup}','${regoNum}','${regoGrade}','${name}','${regoDate}','${phone}','${address}','${addressDetail}');`,
    (err, result) => {
      res.send(result);
    }
  );
});

app.post("/delete", (req, res) => {
  console.log("고객데이터 삭제");
  console.log(req.body);
  const id = req.body.id;
  db.query(`DELETE FROM member_table WHERE id=${id};`, (err, result) => {
    res.send(result);
  });
});

const dbChain = require("./config/db.js");

app.post("/insertChainsMain", (req, res) => {
  console.log("체인데이터 삽입");
  console.log(req.body);
  const chainName = req.body.chainName;
  const chainPlace = req.body. chainPlace;
  const chainRegion = req.body.chainRegion;
  const chainAddress = req.body.chainAddress;
  const chainAddressDetail = req.body.chainAddressDetail;
  const chainMainImage = req.body.chainMainImage;
  const chainSubImage1 = req.body.chainSubImage1;
  const chainSubImage2 = req.body.chainSubImage2;
  dbChain.query(
    `INSERT INTO chains_main (chainName, chainPlace, chainRegion, chainAddress, chainAddressDetail, chainMainImage, chainSubImage1, chainSubImage2) 
    VALUES('${chainName}','${chainPlace}','${chainRegion}','${chainAddress}','${chainAddressDetail}','${chainMainImage}','${chainSubImage1}','${chainSubImage2}';`,
    (err, result) => {
      res.send(result);
    }
  );
});

app.listen(PORT, () => {
  console.log("Server On : http://localhost:" + PORT);
});

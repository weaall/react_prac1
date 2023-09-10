import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function CustomerAddBox() {

  const [nameReg, setNameReg] = useState('')
  const [dateReg, setDateReg] = useState('')
  const [addressReg, setAddressReg] = useState('')
  const [phoneReg, setPhoneReg] = useState('')

  const onChangeName = (e) => {
    setNameReg(e.target.value);
  };
  const onChangeDate = (e) => {
    setDateReg(e.target.value);
  };
  const onChangeAddress = (e) => {
    setAddressReg(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhoneReg(e.target.value);
  };

  const insertData = async (insertName, insertDate, insertAddress, insertPhone) => {
    await axios.post("/insert", {
      name: insertName,
      date: insertDate,
      address: insertAddress,
      phone: insertPhone

    }).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div>
      <input placeholder='이름' onChange={onChangeName} value={nameReg} />
      <input placeholder='날짜' onChange={onChangeDate} value={dateReg} />
      <input placeholder='주소' onChange={onChangeAddress} value={addressReg} />
      <input placeholder='전화번호' onChange={onChangePhone} value={phoneReg} />
      <Link to='/'>
        <button onClick={() => { insertData(nameReg, dateReg, addressReg, phoneReg) && alert('추가 완료') }}>제출</button>
      </Link>
    </div>
  )
}

export default CustomerAddBox;

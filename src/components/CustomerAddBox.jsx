import axios from 'axios';
import React, { useState, useEffect } from 'react';

function CustomerAddBox() {

  const [nameReg, setNameReg] = useState("")
  const [datelReg, setDateReg] = useState("")
  const [addressReg, setAddressReg] = useState("")
  const [phoneReg, setPhoneReg] = useState("")

  const register = async () => {
    await axios.post("/insert", {
      name: '위병수',
      date: '23-09-09',
      address: '주소',
      phone: '010-2050-3202'

    }).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div>
      <input placeholder='이름' />
      <input placeholder='날짜' />
      <input placeholder='주소' />
      <input placeholder='전화번호' />
      <button onClick={register}>제출</button>
    </div>
  )
}

export default CustomerAddBox;

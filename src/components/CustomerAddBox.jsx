import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

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
    <Container>
      <Tag>이름</Tag>
      <InputBox onChange={onChangeName} value={nameReg} />
      <Tag>가입날짜</Tag>
      <InputBox onChange={onChangeDate} value={dateReg} />
      <Tag>주소</Tag>
      <InputBox onChange={onChangeAddress} value={addressReg} />
      <Tag>전화번호</Tag>
      <InputBox onChange={onChangePhone} value={phoneReg} />
      <Link to='/'>
        <SubmitBtn onClick={() => { insertData(nameReg, dateReg, addressReg, phoneReg) && alert('추가 완료') }}>제출</SubmitBtn>
      </Link>
    </Container>
  )
}

export default CustomerAddBox;

const Container = styled.div`
  display: inline-grid;
  width: 300px;
`
const Tag = styled.p`
font-size: 0.8rem;
margin: 20px 0 10px 0;
  
`
const InputBox = styled.input`
    border-radius: 4px;
    flex-grow: 1;
    font-size: 1rem;
    height: 3rem;
    outline: none;
    overflow: hidden;
    padding: 0;
    padding-inline-end: 0.5rem;
    padding-inline-start: 0.5rem;
    background: none;
    border: solid 1px;
`

const SubmitBtn = styled.button`
    align-items: center;
    border-radius: 64px;
    justify-content: center;
    min-height: 3.5rem;
    width: 100%;
    border: none;
    background-color: #84a1ff;;
    color: white;
`
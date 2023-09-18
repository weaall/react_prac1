import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'




function CustomerAddBox() {
  const navigate = useNavigate();
  
  const [regoBrandReg, setregoBrandReg] = useState('회원구분 🍊')
  const [regoGroupReg, setregoGroupReg] = useState('회원소속 🍊')
  const [regoNumReg, setregoNumReg] = useState('')
  const [regoGradeReg, setregoGradeReg] = useState('회원등급 🍊')
  const [nameReg, setNameReg] = useState('')
  const [dateReg, setDateReg] = useState('')
  const [phoneReg, setPhoneReg] = useState('')
  const [addressReg, setAddressReg] = useState('')
  const [addressDetailReg, setAddressDetailReg] = useState('')
  
  const onChangeRegoBrand = (e) => {setregoBrandReg(e.target.value);};
  const onChangeRegoGroup = (e) => {setregoGroupReg(e.target.value);};
  const onChangeRegoNum = (e) => {setregoNumReg(e.target.value);};
  const onChangeRegoGrade = (e) => {setregoGradeReg(e.target.value);};
  const onChangeName = (e) => {setNameReg(e.target.value);};
  const onChangeDate = (e) => {setDateReg(e.target.value);};
  const onChangePhone = (e) => {setPhoneReg(e.target.value);};
  const onChangeAddress = (e) => {setAddressReg(e.target.value);};
  const onChangeAddressDetail = (e) => {setAddressDetailReg(e.target.value);};
  

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

  function ConfirmAlert(nameReg, dateReg, addressReg, phoneReg) {
    if (window.confirm('추가하시겠습니까?')) {
      insertData(nameReg, dateReg, addressReg, phoneReg)
      navigate('/');
    } else {
      return;
    }
  }

  return (
    <Container>
      <GridTable>

        <GridRow>
          <GridCell>
            <Tag>회원구분</Tag>
            <SelectBox onChange={onChangeRegoBrand} value={regoBrandReg}>
              <option disabled selected>회원구분 🍊</option>
              <option value="신원리조트">신원리조트</option>
              <option value="오션스타리조트">오션스타리조트</option>
              <option value="하나로리조트">하나로리조트</option>
              <option value="라마다">라마다</option>
            </SelectBox>
          <UnderTag draggable='true'></UnderTag>
        </GridCell>

        <GridCell>
          <Tag>회원소속</Tag>
          <SelectBox onChange={onChangeRegoGroup} value={regoGroupReg}>
          <option disabled selected>회원소속 🍊</option>
              <option value="본사">본사</option>
              <option value="오션비치">오션비치</option>
              <option value="크라운펫">크라운펫</option>
              <option value="에스앤제이">에스앤제이</option>
          </SelectBox>  
          <UnderTag draggable='true'></UnderTag>
        </GridCell>
      </GridRow>

      <GridRow>
        <GridCell>
          <Tag>회원번호</Tag>
          <InputBox onChange={onChangeRegoNum} value={regoNumReg} />
          <UnderTag draggable='true'></UnderTag>
        </GridCell>

        <GridCell>
          <Tag>회원등급</Tag>
          <SelectBox onChange={onChangeRegoGrade} value={regoGradeReg}>
          <option disabled selected>회원등급 🍊</option>
              <option value="본사">본사</option>
              <option value="오션비치">오션비치</option>
              <option value="크라운펫">크라운펫</option>
              <option value="에스앤제이">에스앤제이</option>
              </SelectBox>
          <UnderTag draggable='true'></UnderTag>
        </GridCell>
      </GridRow>

      <GridRow>
        <GridCell>
          <Tag>이름</Tag>
          <InputBox onChange={onChangeName} value={nameReg} length='2'/>
          <UnderTag draggable='true'>이름은 두글자가 넘어야 합니다.</UnderTag>
        </GridCell>

        <GridCell>
          <Tag>생년월일</Tag>
          <InputBox type='date' min='1950-01-01' max='2050-01-01'  onChange={onChangeDate} value={dateReg}/>
          <UnderTag draggable='true'></UnderTag>
        </GridCell>

        <GridCell>
          <Tag>전화번호</Tag>
          <InputBox onChange={onChangePhone} value={phoneReg} length='11'/>
          <UnderTag draggable='true'>번호만입력해주세요.</UnderTag>
        </GridCell>
      </GridRow>

      <GridRow>
        <GridCell>
          <Tag>주소</Tag>
          <InputBox onChange={onChangeAddress} value={addressReg} />
          <UnderTag draggable='true'></UnderTag>
        </GridCell>

        <GridCell>
          <Tag>상세주소</Tag>
          <InputBox onChange={onChangeAddressDetail} value={addressDetailReg} />
          <UnderTag draggable='true'></UnderTag>
        </GridCell>
      </GridRow>

      <SubmitBtn onClick={() => { ConfirmAlert(nameReg, dateReg, addressReg, phoneReg) }}>추가</SubmitBtn>
      </GridTable>
    </Container>
  )
}

export default CustomerAddBox;

/* Styled */

const checkInputLength = (props) => {
  if (props.value.length !== 0 && props.value.length < props.length) {
    return 'solid 1px #e00751;';
  } else {
    return 'solid 1px black';
  }
}

const checkInputLengthFocus = (props) => {
  if (props.value.length !== 0 && props.value.length < props.length) {
    return (`border: solid 1px #e00751;
            box-shadow: 0px 0px 0px 1.5px #e00751;`);
  } else {
    return (`border: solid 1px #0058a3;
            box-shadow: 0px 0px 0px 1.5px #0058a3;`);
  }
}

const Container = styled.div`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
`
const GridTable = styled.div`
  display: grid;
  margin: 50px 0;
  width: 800px;
  justify-items: center;
`
const GridRow = styled.div`
display: flex;
width: 100%;
  
`
const GridCell = styled.div`
margin: 0 20px;
width: 100%;
`
const Tag = styled.p`
margin: 0 0 5px 0;
font-size: 0.8rem;
`
const UnderTag = styled.p`
font-size: 0.5rem;
margin: 2px 0 20px 5px;
`
const InputBox = styled.input`
    width: 100%;
    border: ${checkInputLength};
    font-size: 1rem;
    border-radius: 4px;
    flex-grow: 1;
    height: 3rem;
    outline: none;
    overflow: hidden;
    padding: 0;
    padding-inline-end: 0.5rem;
    padding-inline-start: 0.5rem;
    background: none;
    &:focus {
        outline: none;
        ${checkInputLengthFocus};
    }
`

const SelectBox = styled.select`
border: solid 1px black;
position: relative;
    width: 105%;
    font-size: 1rem;
    border-radius: 4px;
    flex-grow: 1;
    height: 3rem;
    outline: none;
    overflow: hidden;
    padding: 0;
    padding-inline-end: 0.5rem;
    padding-inline-start: 0.5rem;
    background: none;
    &:focus {
        outline: none;
    }
`

const SubmitBtn = styled.button`
    align-items: center;
    border-radius: 64px;
    justify-content: center;
    min-height: 3.5rem;
    width: 300px;
    border: none;
    background-color: #0058a3;
    color: white;
    cursor: pointer;
`
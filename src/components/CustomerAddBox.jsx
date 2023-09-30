import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Postcode from './DaumPostPopUp';

function CustomerAddBox() {

  const navigate = useNavigate();

  const [regoBrandReg, setregoBrandReg] = useState('회원구분 🍊')
  const [regoGroupReg, setregoGroupReg] = useState('')
  const [regoNumReg, setregoNumReg] = useState('')
  const [regoGradeReg, setregoGradeReg] = useState('')
  const [nameReg, setNameReg] = useState('')
  const [regoDateReg, setregoDateReg] = useState('')
  const [phoneReg, setPhoneReg] = useState('')
  const [addressReg, setAddressReg] = useState('')
  const [addressDetailReg, setAddressDetailReg] = useState('')

  const onChangeRegoBrand = (e) => { setregoBrandReg(e.target.value); };
  const onChangeRegoGroup = (e) => { setregoGroupReg(e.target.value); };
  const onChangeRegoNum = (e) => { setregoNumReg(e.target.value); };
  const onChangeRegoGrade = (e) => { setregoGradeReg(e.target.value); };
  const onChangeName = (e) => { setNameReg(e.target.value); };
  const onChangeDate = (e) => { setregoDateReg(e.target.value); };
  const onChangePhone = (e) => { setPhoneReg(e.target.value); };
  const onChangeAddress = num => { setAddressReg(num); };
  const onChangeAddressDetail = (e) => { setAddressDetailReg(e.target.value); };


  const insertData = async (regoBrandReg, regoGroupReg, regoNumReg, regoGradeReg, nameReg, regoDateReg, phoneReg, addressReg, addressDetailReg) => {
    await axios.post("/insert", {
      regoBrand: regoBrandReg,
      regoGroup: regoGroupReg,
      regoNum: regoNumReg,
      regoGrade: regoGradeReg,
      name: nameReg,
      regoDate: regoDateReg,
      phone: phoneReg,
      address: addressReg,
      addressDetail: addressDetailReg
    }).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  function ConfirmAlert(regoBrandReg, regoGroupReg, regoNumReg, regoGradeReg, nameReg, regoDateReg, phoneReg, addressReg, addressDetailReg) {
    if (window.confirm('추가하시겠습니까?')) {
      insertData(regoBrandReg, regoGroupReg, regoNumReg, regoGradeReg, nameReg, regoDateReg, phoneReg, addressReg, addressDetailReg)
      navigate('/');
    } else {
      return;
    }
  }


  return (
    <Container>
      <MarkUp>회원추가</MarkUp>
      <GridTable>

        <GridRow>
          <GridCell>
            <Tag>회원구분</Tag>
            <SelectBox onChange={onChangeRegoBrand} value={regoBrandReg}>
              <option disabled selected>회원구분 🍊</option>
              <option value="신원리조트">신원리조트</option>
              <option value="오션스타리조트">오션스타리조트</option>
              <option value="하나로오케이리조트">하나로오케이리조트</option>
              <option value="라마다">라마다</option>
            </SelectBox>
            <UnderTag draggable='true' value={nameReg} length='2'>sad</UnderTag>
          </GridCell>

          <GridCell>
            <Tag>회원소속</Tag>
            <SelectBox onChange={onChangeRegoGroup} value={regoGroupReg}>
              {
                regoBrandReg === '신원리조트' || '오션스타리조트' || '하나로오케이리조트'
                  ? <>
                    <option value="본사">본사</option>
                  </>
                  : null
              }
              {
                regoBrandReg === '라마다'
                  ? <>
                    <option value="본사">본사</option>
                    <option value="오션비치">오션비치</option>
                    <option value="크라운펫">크라운펫</option>
                    <option value="에스앤제이">에스앤제이</option>
                  </>
                  : null
              }
            </SelectBox>
            <UnderTag draggable='true' value={nameReg} length='2'>asd</UnderTag>
          </GridCell>
        </GridRow>

        <GridRow>
          <GridCell>
            <Tag>회원번호</Tag>
            <InputBox onChange={onChangeRegoNum} value={regoNumReg} />
            <UnderTag draggable='true' value={nameReg} length='2'>asd</UnderTag>
          </GridCell>

          <GridCell>
            <Tag>회원등급</Tag>
            <SelectBox onChange={onChangeRegoGrade} value={regoGradeReg}>
              {
                regoBrandReg === '신원리조트'
                  ? <>
                    <option value="사파이어">사파이어</option>
                    <option value="에메랄드">에메랄드</option>
                    <option value="루비">루비</option>
                    <option value="마스터">마스터</option>
                  </>
                  : null
              }
              {
                regoBrandReg === '오션스타리조트'
                  ? <>
                    <option value="브론즈">브론즈</option>
                    <option value="골드">골드</option>
                    <option value="다이아몬드">다이아몬드</option>
                  </>
                  : null
              }
              {
                regoBrandReg === '하나로오케이리조트'
                  ? <>
                    <option value="스톤">스톤</option>
                    <option value="진주">진주</option>
                    <option value="로얄">로얄</option>
                  </>
                  : null
              }
              {
                regoBrandReg === '라마다'
                  ? <>
                    <option value="등기">등기</option>
                    <option value="멤버쉽">멤버쉽</option>
                    <option value="수분양자">수분양자</option>
                  </>
                  : null
              }
            </SelectBox>
            <UnderTag draggable='true' value={nameReg} length='2'>asd</UnderTag>
          </GridCell>
        </GridRow>

        <GridRow>
          <GridCell>
            <Tag>이름</Tag>
            <InputBox onChange={onChangeName} value={nameReg} length='2' />
            <UnderTag draggable='true' value={nameReg} length='2'>두글자이상 입력해주세요!</UnderTag>
          </GridCell>

          <GridCell>
            <Tag>생년월일</Tag>
            <InputBox type='date' min='1950-01-01' max='2050-01-01' onChange={onChangeDate} value={regoDateReg} />
            <UnderTag draggable='true' value={nameReg} length='2'>asd</UnderTag>
          </GridCell>

          <GridCell>
            <Tag>전화번호</Tag>
            <InputBox onChange={onChangePhone} value={phoneReg} length='11' type="number" max="99999999999" />
            <UnderTag draggable='true' value={phoneReg} length='11'>번호만입력해주세요.</UnderTag>
          </GridCell>
        </GridRow>

        <GridRow>
          <GridCell>
            <AddressBox>
              <Tag>주소</Tag>
              <Postcode onChangeAddress={onChangeAddress} />
            </AddressBox>
            <InputBox value={addressReg}></InputBox>
            <UnderTag draggable='true' onChangeAddress={onChangeAddress} value={addressReg} length='2'></UnderTag>
          </GridCell>

          <GridCell>
            <Tag>상세주소</Tag>
            <InputBox onChange={onChangeAddressDetail} value={addressDetailReg} />
            <UnderTag draggable='true' onChange={onChangeAddressDetail} value={addressDetailReg} length='0'></UnderTag>
          </GridCell>
        </GridRow>

        <SubmitBtn onClick={() => { ConfirmAlert(regoBrandReg, regoGroupReg, regoNumReg, regoGradeReg, nameReg, regoDateReg, phoneReg, addressReg, addressDetailReg) }}>추가</SubmitBtn>
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
    return 'solid 1px black;';
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

const checkInputLengthToEx = (props) => {
  if (props.value.length !== 0 && props.value.length < props.length) {
    return '#e00751;';
  } else {
    return 'white;';
  }
}

const MarkUp = styled.h2`
  color: darkgrey;
  margin: 20px;
`
const Container = styled.div`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
`
const GridTable = styled.div`
  display: grid;
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
padding: 0;
`
const Tag = styled.p`
margin: 0 0 5px 0;
font-size: 0.8rem;
`
const UnderTag = styled.p`
font-size: 0.5rem;
margin: 2px 0 20px 5px;
color: ${checkInputLengthToEx}
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
const AddressBox = styled.div`
  display: inline-flex;
  padding: 0px;
  margin: 0px;
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
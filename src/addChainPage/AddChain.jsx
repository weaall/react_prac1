import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Postcode from './DaumPostPopUp';

function AddChain() {

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
  const onChangeRegoNum = (e) => {
    setregoNumReg(e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/(\d{6})(\d{8})/, '$1-$2'));
  };
  const onChangeRegoGrade = (e) => { setregoGradeReg(e.target.value); };
  const onChangeName = (e) => { setNameReg(e.target.value); };
  const onChangeDate = (e) => { setregoDateReg(e.target.value); };
  const onChangePhone = (e) => {
    setPhoneReg(e.target.value.replace(/[^0-9]/g, '')
      .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  };
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
      <MarkUp>제휴추가</MarkUp>
      <GridTable>

        <GridRow>
          <GridCell>
            <Tag>제휴사이름</Tag>
            <InputBox onChange={onChangeRegoNum} value={regoNumReg} length='14' maxLength='15'/>
            <UnderTag draggable='true' value={regoNumReg} length='14'>-을 제회한 숫자만 입력해주세요.</UnderTag>
          </GridCell>

          <GridCell>
            <Tag>지역</Tag>
            <SelectBox onChange={onChangeRegoGrade} value={regoGradeReg}>
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>
                    <option value="제주">제주</option>
                    <option value="강원">강원</option>
                    <option value="충청">충청</option>
                    <option value="경상">경상</option>
                    <option value="전라">전라</option>
            </SelectBox>
            <UnderTag draggable='true' value={nameReg} length='2'>asd</UnderTag>
          </GridCell>

          <GridCell>
            <Tag>설명</Tag>
            <InputBox onChange={onChangeName} value={nameReg} length='2' />
            <UnderTag draggable='true' value={nameReg} length='2'>두글자이상 입력해주세요!</UnderTag>
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

export default AddChain;

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
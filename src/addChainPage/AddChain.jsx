import axios from 'axios';
import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Postcode from './DaumPostPopUp';

function AddChain() {

  const navigate = useNavigate();

  const imgRef1 = useRef();
  const imgRef2 = useRef();
  const imgRef3 = useRef();

  const [chainNameReg, setchainNameReg] = useState('')
  const [chainRegionReg, setchainRegionReg] = useState('서울')
  const [chainPlaceReg, setchainPlaceReg] = useState('')
  const [addressReg, setAddressReg] = useState('')
  const [addressDetailReg, setAddressDetailReg] = useState('')
  const [mainImageReg, setmainImageReg] = useState(null);
  const [subImageReg1, setsubImageReg1] = useState(null);
  const [subImageReg2, setsubImageReg2] = useState(null);

  const onChangeChainName = (e) => { setchainNameReg(e.target.value); };
  const onChangeChainRegion = (e) => { setchainRegionReg(e.target.value); };
  const onChangeChainPlace = (e) => { setchainPlaceReg(e.target.value); };
  const onChangeAddressChain = num => { setAddressReg(num); };
  const onChangeAddressDetail = (e) => { setAddressDetailReg(e.target.value); };
  const onChangMainImage = () => {
    const file = imgRef1.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setmainImageReg(reader.result);
    };
  };
  const onChangSubImage1 = () => {
    const file = imgRef2.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setsubImageReg1(reader.result);
    };
  };
  const onChangSubImage2 = () => {
    const file = imgRef3.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setsubImageReg2(reader.result);
    };
  };



  const insertData = async (chainNameReg, chainPlaceReg, chainRegionReg, addressReg, addressDetailReg, mainImageReg, subImageReg1, subImageReg2) => {
    await axios.post("/insertChainsMain", {
      chainName: chainNameReg,
      chainPlace: chainPlaceReg,
      chainRegion: chainRegionReg,
      chainAddress: addressReg,
      chainAddressDetail: addressDetailReg,
      chainMainImage: mainImageReg,
      chainSubImage1: subImageReg1,
      chainSubImage2: subImageReg2,
    }).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  function ConfirmAlert(chainNameReg, chainPlaceReg, chainRegionReg, addressReg, addressDetailReg, mainImageReg, subImageReg1, subImageReg2) {
    if (window.confirm('추가하시겠습니까?')) {
      insertData(chainNameReg, chainPlaceReg, chainRegionReg, addressReg, addressDetailReg, mainImageReg, subImageReg1, subImageReg2)
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
            <InputBox onChange={onChangeChainName} value={chainNameReg} length='2' maxLength='15'/>
            <UnderTag draggable='true' value={chainNameReg} length='2'>두글자이상 입력해주세요!</UnderTag>
          </GridCell>

          <GridCell>
            <Tag>지역</Tag>
            <InputBox onChange={onChangeChainPlace} value={chainPlaceReg} length='2' />
            <UnderTag draggable='true' value={chainPlaceReg} length='2'>두글자이상 입력해주세요!</UnderTag>
          </GridCell>

          <GridCell>
            <Tag>구분</Tag>
            <SelectBox onChange={onChangeChainRegion} value={chainRegionReg}>
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>
                    <option value="제주">제주</option>
                    <option value="강원">강원</option>
                    <option value="충청">충청</option>
                    <option value="경상">경상</option>
                    <option value="전라">전라</option>
            </SelectBox>
          </GridCell>
        </GridRow>

        <GridRow>
          <GridCell>
            <AddressBox>
              <Tag>주소</Tag>
              <Postcode onChangeAddress={onChangeAddressChain} />
            </AddressBox>
            <InputBox value={addressReg}></InputBox>
            <UnderTag draggable='true' onChangeAddress={onChangeAddressChain} value={addressReg} length='0'>123</UnderTag>
          </GridCell>

          <GridCell>
            <Tag>상세주소</Tag>
            <InputBox onChange={onChangeAddressDetail} value={addressDetailReg} />
            <UnderTag draggable='true' onChange={onChangeAddressDetail} value={addressDetailReg} length='0'>123</UnderTag>
          </GridCell>
        </GridRow>

        <GridRow>
          <GridCell>
            <Tag>메인사진</Tag>
            <UploadContainer>
            <UploadBox onChange={onChangMainImage} ref={imgRef1} accept="image/*" type="file"/>
            <UploadImage src={mainImageReg} />
            </UploadContainer>
          </GridCell>

          <GridCell>
            <Tag>제휴사진1</Tag>
            <UploadContainer>
            <UploadBox onChange={onChangSubImage1} ref={imgRef2} accept="image/*" type="file"/>
            <UploadImage src={subImageReg1} />
            </UploadContainer>
          </GridCell>

          <GridCell>
            <Tag>제휴사진2</Tag>
            <UploadContainer>
            <UploadBox onChange={onChangSubImage2} ref={imgRef3} accept="image/*" type="file"/>
            <UploadImage src={subImageReg2} />
            </UploadContainer>
          </GridCell>
        </GridRow>

        <SubmitBtn onClick={() => { ConfirmAlert(chainNameReg, chainPlaceReg, chainRegionReg, addressReg, addressDetailReg, mainImageReg, subImageReg1, subImageReg2) }}>추가</SubmitBtn>
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
const UploadContainer = styled.div`
    text-align: center;
    width: 100%;
    height: 150px;
    border: solid 1px black;
    font-size: 1rem;
    border-radius: 4px;
    flex-grow: 1;
    outline: none;
    overflow: hidden;
    padding: 0.5rem;
    background: none;
    margin-bottom: 30px;
`
const UploadBox = styled.input`
    width: 100%;
    border: none;
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
`
const UploadImage = styled.img`
    width: 100%;
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
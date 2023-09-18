import React from 'react';
import DaumPostcode from "react-daum-postcode";
import styled from 'styled-components';
 
const PopupPostCode = (props) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        props.onClose()
    }

    const postCodeStyle = {
        display: "block",
        width: "500px",
        height: "500px",
        padding: "7px",
    };

    return (
        <Container>
            <button type='button' onClick={() => { props.onClose() }} className='postCode_btn'>닫기</button>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode}>
            </DaumPostcode>
        </Container>
    )
}
 
export default PopupPostCode;

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: solid 2px;
    padding: 20px;
    border-radius: 20px;
`

const CloseBtn = styled.button`
    background-color: 15px;
    right: 10%;
`
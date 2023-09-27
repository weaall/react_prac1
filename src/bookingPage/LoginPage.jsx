import axios from "axios";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const [regoNumCall, setregoNumCall] = useState('')
    const onChangeRegoNum = (e) => {
        setregoNumCall(e.target.value
            .replace(/[^0-9]/g, '')
            .replace(/(\d{6})(\d{8})/, '$1-$2'))
    };

    const [list, setList] = useState([]);

    useEffect(() => {
        setdata();
    }, []);

    const setdata = async () => {
        let user = await axios.get("/member_table");
        user = user.data;
        setList(user);
    };

    return (
        <Container>
            <LoginContainer>
                <Title draggable='true'>통합예약 시스템</Title>
                <Tag draggable='true'>회원번호</Tag>
                <InputBox value={regoNumCall} onChange={onChangeRegoNum} length='15' maxLength='15'/>
                <UnderTag draggable='true' value={regoNumCall} length='15'>
                    -을 제외한 회원번호 14자리를 입력해 주세요.
                </UnderTag>
                <BtnBox>
                    <SubmitBtn onClick={() => navigate('/BookingMain')}>로그인
                    </SubmitBtn>
                </BtnBox>
            </LoginContainer>
        </Container>

    );
}


export default Login;

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


const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`
const LoginContainer = styled.div`
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 50px 0px;
`
const Title = styled.h1`
    text-align: center;
    margin: 0 0 50px 0px;
`

const Tag = styled.p`
    margin: 0 0 5px 0;
    font-size: 1rem;
`
const InputBox = styled.input`
    width: 300px;
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
const UnderTag = styled.p`
    font-size: 0.8rem;
    margin: 5px 0 20px 5px;
    color: ${checkInputLengthToEx};
`

const BtnBox = styled.div`
    margin-top: 50px;
    text-align: center;
`

const SubmitBtn = styled.button`
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    border-radius: 64px;
    justify-content: center;
    min-height: 3.5rem;
    width: 300px;
    border: none;
    background-color: #0058a3;
    color: white;
    cursor: pointer;
`
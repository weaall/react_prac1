import axios from "axios";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


function Login() {

    const [list, setList] = useState([]);

    useEffect(() => {
        setdata();
    }, []);

    const setdata = async () => {
        let user = await axios.get("/member_table");
        user = user.data;
        setList(user);
    };

    const deleteData = async (deleteID) => {
        await axios.post("/delete", {
            id: deleteID
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Container>
            <LoginContainer>
                <InputBox>
                </InputBox>
                <SubmitBtn>Login
                </SubmitBtn>
            </LoginContainer>
        </Container>

    );
}


export default Login;

const Container = styled.div`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
`
const LoginContainer = styled.div`
    width: 100%;
    display: inline-grid;
`

const InputBox = styled.input`
    width: 300px;
    border: solid 1px black;
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
        border: solid 1px #0058a3;
        box-shadow: 0px 0px 0px 1.5px #0058a3;
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
import axios from "axios";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";


function BookingMain() {

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
            <MainContainer>
                <BookingHeader>
                    <Title draggable='true'>브랜드</Title>
                    <RegoContainer>
                        <RegoNum>123456-12345678</RegoNum>
                        <RegoGrade>브랜드등급</RegoGrade>
                    </RegoContainer>
                    <MypageBtn onClick={() => alert('미구현')}>MyPage</MypageBtn>
                </BookingHeader>
                <SelectContainer>
                    <SelectContainerCell1>
                        <SelectRegion>🔍
                        </SelectRegion>
                    </SelectContainerCell1>
                    <SelectContainerCell2>
                        <SelectStartDate>📅
                        </SelectStartDate>
                        <SelectEndDate>📅
                        </SelectEndDate>
                    </SelectContainerCell2>
                </SelectContainer>
                <HotelList>
                    <HotelContainer>
                        <HotelPic></HotelPic>
                        <HotelInfo></HotelInfo>
                    </HotelContainer>
                    <HotelContainer>
                        <HotelPic></HotelPic>
                        <HotelInfo></HotelInfo>
                    </HotelContainer>
                    <HotelContainer>
                        <HotelPic></HotelPic>
                        <HotelInfo></HotelInfo>
                    </HotelContainer>
                    <HotelContainer>
                        <HotelPic></HotelPic>
                        <HotelInfo></HotelInfo>
                    </HotelContainer>
                </HotelList>
            </MainContainer>
        </Container>
    );
}


export default BookingMain;

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    
`
const MainContainer = styled.div`
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #f7f7f7;
    width: 100%;
    max-width: 600px;
`
const BookingHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    margin-bottom: 20px;
    background-color: white;
    align-items: center;
    border-bottom: solid 0.5px #dadada;
`
const Title = styled.p`
    font-size: 1.5rem;
    margin: 0 0 0 15px;
`
const RegoContainer = styled.div`
    text-align: center;
    width: 150px;
`
const RegoNum = styled.p`
    font-size: 0.8rem;
    margin: 0;
`
const RegoGrade = styled.p`
    font-size: 0.8rem;
    margin: 0;
`
const MypageBtn = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;
    padding: 0;
    font-size: 1rem;
    margin: 0 15px 0 0;
`
const SelectContainer = styled.div`
    margin: 1rem;
    border-radius: 8px;
    height: 6rem;
    background-color: white;
    box-shadow: 0 0 4px black;
`
const SelectContainerCell1 = styled.div`
    display: flex;    
    align-items: center;
    border-bottom: 0.5px solid grey;
    height: 50%;
`
const SelectContainerCell2 = styled.div`
    display: flex;
    height: 50%;
`
const SelectRegion = styled.div` 
    width: 100%;
    margin: 0 15px;
    align-items: center;
    display: flex;
    margin: 0 10px;
`
const SelectStartDate = styled.div` 
    width: 50%;
    height: 100%;
    border-right: 0.5px solid grey;
    margin-inline-start: 10px;
    align-items: center;
    display: flex;
`
const SelectEndDate = styled.div` 
    width: 50%;
    height: 100%;
    margin-inline-start: 10px;
    align-items: center;
    display: flex;
`
const HotelList = styled.div`
`
const HotelContainer = styled.div`
    margin: 1rem;
    border-radius: 8px;
    height: 10rem;
    background-color: white;
    box-shadow: 0px 0px transparent;
    display: flex;
`
const HotelPic =styled.div`
    background-color: grey;
    border-radius: 8px;
    width: 30%;
`
const HotelInfo =styled.div`
`
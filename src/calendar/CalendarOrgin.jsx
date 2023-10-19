import React, { useState } from 'react'
import styled from 'styled-components';

function Calendar() {
    
    const [date, setDate] = useState(new Date());
    const [viewYear, setViewYear] = useState(date.getFullYear());
    const [viewMonth, setViewMonth] = useState(date.getMonth());
    
    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];

    if (PLDay !==6) {
        for (let i = 0; i < PLDay + 1; i++){
            prevDates.unshift(PLDate - i);
        }
    }

    for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);


    const prevMonth = () => {
        date.setMonth(date.getMonth() - 1);
        setViewMonth(date.getMonth());
    }

    const nextMonth = () => {
        date.setMonth(date.getMonth() + 1);
        setViewMonth(date.getMonth());
    }

    const goToday = () => {
        date.setMonth(new Date().getMonth());
        setViewMonth(date.getMonth());
    }

    const navMonth = (props) =>{
        if(props < 7){
            nextMonth();
        }else{
            prevMonth();
        }
    }

    return (
        <Container>
            <MarkUp>캘린더</MarkUp>
            <CalendarContatiner>
                <CalendarHeader>
                    <h2>{viewYear}년</h2>
                    <h2>{viewMonth + 1}월</h2>
                    <CalendarNav>
                        <NavBtn onClick={prevMonth}>&lt;</NavBtn>
                        <NavTodayBtn onClick={goToday}>Today</NavTodayBtn>
                        <NavBtn onClick={nextMonth}>&gt;</NavBtn>
                    </CalendarNav>
                </CalendarHeader>
                <DaysContainer>
                    <DayContainer>일</DayContainer>
                    <DayContainer>월</DayContainer>
                    <DayContainer>화</DayContainer>
                    <DayContainer>수</DayContainer>
                    <DayContainer>목</DayContainer>
                    <DayContainer>금</DayContainer>
                    <DayContainer>토</DayContainer>
                </DaysContainer>
                <DatesContainer>
                    {dates.map((date, i) => {
                        dates[i] = date;
                        const condition = i >= firstDateIndex && i < lastDateIndex + 1
                            ? 'this'
                            : 'other';
                        if (condition === 'other') {
                            return (
                                <DateContainerOthers onClick={() => navMonth(date)}>{date}</DateContainerOthers>
                            )
                        }
                        else {
                            return (
                                <DateContainer onClick={() => console.log(viewYear, viewMonth + 1, date)}>{date}</DateContainer>
                            )
                        }
                    })}
                </DatesContainer>
            </CalendarContatiner>
        </Container>
    )
}

export default Calendar;


const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`
const MarkUp = styled.h2`
  color: darkgrey;
  margin: 20px;
`
const CalendarContatiner = styled.div`
    text-align: center;
    width: 600px;
    margin: 50px;
`
const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CalendarNav = styled.div`
    display: flex;
    border: 1px solid grey;
    border-radius: 5px;
`
const NavBtn = styled.button`
    width: 28px;
    height: 30px;
    border: none;
    font-size: 16px;
    line-height: 34px;
    background-color: transparent;
    cursor: pointer;
`
const NavTodayBtn = styled.button`
    width: 75px;
    border: none;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    background-color: transparent;
    cursor: pointer;
`
const DaysContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`
const DayContainer = styled.div`
    width: calc(100% / 7);
    &:nth-child(7n +1){
        color: red;
    }
    &:nth-child(7n){
        color: blue;
    }
`
const DatesContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    height: 500px;
    border-top: 1px solid gray;
    border-right: 1px solid gray;
`
const DateContainer = styled.div`
    width: calc((100% - 8px) / 7) ;
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
    &:nth-child(7n +1){
        color: red;
    }
    &:nth-child(7n){
        color: blue;
    }
`
const DateContainerOthers = styled.div`
    width: calc((100% - 8px) / 7) ;
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
    color: white;
    background-color: lightgray;
`


// https://www.youtube.com/watch?v=jFmcH5GVRs4
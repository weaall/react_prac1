import React from 'react'
import styled from 'styled-components';

function Calendar() {

    const date = new Date();
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();
    
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

    dates.map((date, i) => {
        dates[i] = `${date}`;
    })

    return (
        <Container>
            <MarkUp>캘린더</MarkUp>
            <CalendarContatiner>
                <h2>{viewYear}년</h2>
                <h2>{viewMonth + 1}월</h2>
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
                    {dates.map((dataMap) => {
                        return (
                            <DateContainer onClick={() => console.log(dataMap)}>{dataMap}</DateContainer>
                        )
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
    width: 800px;
`
const DaysContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    border-top: 1px solid grey;
    border-right: 1px solid grey;
`
const DayContainer = styled.div`
    width: calc((100% - 8px) / 7);
    border-left: 1px solid grey;
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
    border-top: 1px solid grey;
    border-right: 1px solid grey;
`
const DateContainer = styled.div`
    width: calc((100% - 8px) / 7);
    border-bottom: 1px solid grey;
    border-left: 1px solid grey;
    &:nth-child(7n +1){
        color: red;
    }
    &:nth-child(7n){
        color: blue;
    }
`


// https://www.youtube.com/watch?v=jFmcH5GVRs4
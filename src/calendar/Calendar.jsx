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

    const navMonth = (props) => {
        if(props < 7){
            nextMonth();
        }else{
            prevMonth();
        }
    }

    const arr = [
        {date: '2023-10-1', price: 11000},
        {date: '2023-10-2', price: 12000},
        {date: '2023-10-3', price: 13000},
        {date: '2023-10-4', price: 14000},
        {date: '2023-10-5', price: 15000},
        {date: '2023-10-6', price: 18000},
        {date: '2023-10-7', price: 11000},
        {date: '2023-10-8', price: 12000},
        {date: '2023-10-9', price: 13000},
        {date: '2023-10-10', price: 14000},
        {date: '2023-10-11', price: 15000},
        {date: '2023-10-12', price: 18000},
        {date: '2023-10-13', price: 11000},
        {date: '2023-10-14', price: 12000},
        {date: '2023-10-15', price: 13000},
        {date: '2023-10-16', price: 14000},
        {date: '2023-10-17', price: 15000},
        {date: '2023-10-18', price: 18000},
        {date: '2023-10-19', price: 11000},
        {date: '2023-10-20', price: 12000},
        {date: '2023-10-21', price: 13000},
        {date: '2023-10-22', price: 14000},
        {date: '2023-10-23', price: 15000},
        {date: '2023-10-24', price: 18000},
        {date: '2023-10-25', price: 11000},
        {date: '2023-10-26', price: 12000}
    ];

    return (
        <Container>
            <MarkUp>캘린더</MarkUp>
            <InnetContainer>
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
                                const viewToday = new Date();
                                const setedDate = arr.find(v => v.date === `${viewYear}-${viewMonth + 1}-${date}`);
                                let setedPrice = [];
                                if (setedDate === undefined) {
                                    setedPrice = 0;
                                } else {
                                    setedPrice = setedDate.price;
                                }
                                return (
                                    <DateContainer onClick={() => console.log(viewYear + "-" + (viewMonth + 1) + "-" + date)}>{date}
                                        <PriceContainer>
                                            <PriceInput></PriceInput>
                                            <PriceInputBtn>+</PriceInputBtn>
                                        </PriceContainer>
                                        <PriceCurrent>{setedPrice}</PriceCurrent>
                                        <PriceCurrent>{viewToday.getMonth()}</PriceCurrent>
                                    </DateContainer>
                                )
                            }
                        })}
                    </DatesContainer>
                </CalendarContatiner>
                <PriceSetContainer>
                    <WeekdaysPriceContainer>
                        <ViewPrice>WeekdaysPrice
                        </ViewPrice>
                        <InsertPrice>
                        </InsertPrice>
                    </WeekdaysPriceContainer>
                    <FridaysPriceContainer>
                        <ViewPrice>FridaysPrice
                        </ViewPrice>
                        <InsertPrice>
                        </InsertPrice>
                    </FridaysPriceContainer>
                    <SaterdaysPriceContainer>
                        <ViewPrice>SaterdaysPrice
                        </ViewPrice>
                        <InsertPrice>
                        </InsertPrice>
                    </SaterdaysPriceContainer>
                </PriceSetContainer>
            </InnetContainer>
        </Container>
    )
}

export default Calendar;


const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`
const InnetContainer = styled.div`
    display: flex;
`
const MarkUp = styled.h2`
  color: darkgrey;
  margin: 20px;
`
const CalendarContatiner = styled.div`
    text-align: center;
    min-width: 300px;
    max-width: 800px;
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
    display: grid;
    width: calc((100% - 7px) / 7) ;
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
    width: calc((100% - 7px) / 7) ;
    border-bottom: 1px solid gray;
    border-left: 1px solid gray;
    color: white;
    background-color: lightgray;
`
const PriceContainer = styled.div`
    height: auto;
    display: flex;
    padding: 0 10px;
`
const PriceInput = styled.input`
    width: 70%;
    height: 20px;
    border: 1px solid gray;
    border-radius: 4px;
`
const PriceInputBtn = styled.button`
    width: 30%;
    height: 24px;
    border: 1px solid gray;
    border-radius: 4px;
    cursor: pointer;
`
const PriceCurrent = styled.div`
    margin: 0;
`
const PriceSetContainer = styled.div`
    display: inline-grid;
    justify-content: space-between;
    text-align: center;
    width: 100px;
    height: 200px;
    margin: 50px;
`
const WeekdaysPriceContainer = styled.div`
`
const FridaysPriceContainer = styled.div`
`
const SaterdaysPriceContainer = styled.div`
`
const ViewPrice = styled.p`
`
const InsertPrice = styled.input`
`


// https://www.youtube.com/watch?v=jFmcH5GVRs4
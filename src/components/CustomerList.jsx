import axios from "axios";
import React, { useEffect, useState } from 'react';
import styled from "styled-components";


function CustomerList() {

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
        
        <TableContainer>
            <MarkUp>회원관리</MarkUp>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>ID</TableHeadCell>
                        <TableHeadCell>구분</TableHeadCell>
                        <TableHeadCell>소속</TableHeadCell>
                        <TableHeadCell>번호</TableHeadCell>
                        <TableHeadCell>등급</TableHeadCell>
                        <TableHeadCell>이름</TableHeadCell>
                        <TableHeadCell>생년월일</TableHeadCell>
                        <TableHeadCell>전화번호</TableHeadCell>
                        <TableHeadCell>주소</TableHeadCell>
                        <TableHeadCell>상세주소</TableHeadCell>
                        <TableHeadCell>설정</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((myMap) => {
                        return (
                            <TableRow key={myMap.id}>
                                <TableCell>{myMap.id}</TableCell>
                                <TableCell>{myMap.regoBrand}</TableCell>
                                <TableCell>{myMap.regoGroup}</TableCell>
                                <TableCell>{myMap.regoNum}</TableCell>
                                <TableCell>{myMap.regoGrade}</TableCell>
                                <TableCell>{myMap.name}</TableCell>
                                <TableCell>{myMap.regoDate}</TableCell>
                                <TableCell>{myMap.phone}</TableCell>
                                <TableCell>{myMap.address}</TableCell>
                                <TableCell>{myMap.addressDetail}</TableCell>
                                <TableCell>
                                    <button onClick={() => deleteData(myMap.id)}>삭제</button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default CustomerList;

const MarkUp = styled.h2`
  color: darkgrey;
  margin: 20px;
`

const TableContainer = styled.div`
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
`

const Table = styled.table`
    margin: 20px;
    display: inline-block;
    border-collapse: collapse;
    text-align: center;
    font-size: 15px;
`

const TableHead = styled.thead`
`

const TableHeadCell = styled.th`
    background-color: #0058a3;
    color: white;
    text-align: center;
    border: solid 1px #0058a3;
`

const TableBody = styled.tbody`
`

const TableRow = styled.tr`
`

const TableCell = styled.td`
    background-clip: padding-box;
    padding: 2px;
    border: 1px solid grey;
    
`

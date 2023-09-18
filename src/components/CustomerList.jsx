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
                        <TableHeadCell>가입일</TableHeadCell>
                        <TableHeadCell>이름</TableHeadCell>
                        <TableHeadCell>주소</TableHeadCell>
                        <TableHeadCell>전화번호</TableHeadCell>
                        <TableHeadCell>설정</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((myMap) => {
                        return (
                            <TableRow key={myMap.id}>
                                <TableCell>{myMap.id}</TableCell>
                                <TableCell>{myMap.date}</TableCell>
                                <TableCell>{myMap.name}</TableCell>
                                <TableCell>{myMap.address}</TableCell>
                                <TableCell>{myMap.phone}</TableCell>
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
    display: inline-block;
    padding: 50px;
`

const TableHead = styled.thead`
    padding: 50px;
`

const TableHeadCell = styled.th`
    padding: 10px 30px;
    margin: none;
    background-color: #0058a3;
    color: white;
    
`

const TableBody = styled.tbody`
`

const TableRow = styled.tr`
`

const TableCell = styled.td`
    text-align: center;
`
import { Link } from "react-router-dom";
import {React } from 'react';
import styled from "styled-components";

function Header() {
    return (
        <HeaderStyle>
            <ContainerLi>
                <Link to={'/'}>
                    <ListBtn>회원관리</ListBtn>
                </Link>
            </ContainerLi>
            <Divider></Divider>
            <ContainerLi>
                <Link to={'/'}>
                    <ListBtn>예약관리</ListBtn>
                </Link>
            </ContainerLi>
            <Divider></Divider>
            <ContainerLi>
                <Link to={'/'}>
                    <ListBtn>제휴관리</ListBtn>
                </Link>
            </ContainerLi>
            <Divider></Divider>
            <ContainerLi>
                <Link to={'/Login'}>
                    <ListBtn>제휴예약</ListBtn>
                </Link>
            </ContainerLi>
            <Divider></Divider>
            <ContainerLi>
                <Link to={'/customerAdd'}>
                    <ListBtn>회원추가</ListBtn>
                </Link>
            </ContainerLi>
            <Divider></Divider>
            <ContainerLi>
                <Link to={'/Main'}>
                    <ListBtn>팝업관리</ListBtn>
                </Link>
            </ContainerLi>
            <Divider></Divider>
            <ContainerLi>
                <Link to={'/AddChainSub'}>
                    <ListBtn>제휴객실</ListBtn>
                </Link>
            </ContainerLi>
            <Divider></Divider>
            <ContainerLi>
                <Link to={'/AddChain'}>
                    <ListBtn>제휴보기</ListBtn>
                </Link>
            </ContainerLi>
            <Divider></Divider>
            <ContainerLi>
                <Link to={'/AddChain'}>
                    <ListBtn>제휴추가</ListBtn>
                </Link>
            </ContainerLi>
        </HeaderStyle>
    )
}

export default Header;

const HeaderStyle = styled.div`
    width: 100%;
    background-color: #0058a3;
    color: white;
    justify-content: center;
    display: flex;
`;

const ContainerLi = styled.div`
    color: white;
    margin: 0 20px;
    
`
const ListBtn = styled.button`
    color: white;
    font-size: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
    padding: 0;
`
const Divider = styled.em`
    content: '';
    width: 2px;
    height: 29px;
    background-color: white;
    vertical-align: -1px;
`
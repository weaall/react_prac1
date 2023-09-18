import { Link } from "react-router-dom";
import React from 'react';
import styled from "styled-components";


const HeaderStyle = styled.div`
    width: 100%;
    height: 100px;
    background-color: #0058a3;;
    color: white;
    font-size: 20px;
    text-align: center;
`;

function Header() {
    return (
        <HeaderStyle>
            <ContainerLi>
                <Link to={'/'}>
                    <ListBtn>회원관리</ListBtn>
                </Link>
            </ContainerLi>
            <ContainerLi>
                <Link to={'/customerAdd'}>
                    <ListBtn>회원추가</ListBtn>
                </Link>
            </ContainerLi>
        </HeaderStyle>
    )
}

export default Header;

const ContainerLi = styled.div`
    color: white;
    
`
const ListBtn = styled.button`
    color: white;
    font-size: 20px;
    border: none;
    background-color: transparent;
    
`
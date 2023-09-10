import { Link } from "react-router-dom";
import React, { Component } from 'react';
import styled from "styled-components";


const HeaderStyle = styled.div`
    width: 100%;
    height: 100px;
    background-color: darkgrey;
    color: white;
    font-size: 20px;
    text-align: center;
`;

function Header() {
    return (
        <HeaderStyle>
            <Link to={'/'}>Weaall</Link>
            <Link to={'/customerAdd'}>Add</Link>
        </HeaderStyle>
    )
}

export default Header;
import { Link } from "react-router-dom";
import React from 'react';
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
            <Link to={'/'}><p>Weaall</p></Link>
            <Link to={'/customerAdd'}>
                <button>추가

                </button>
            </Link>
        </HeaderStyle>
    )
}

export default Header;
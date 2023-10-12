import React from 'react';
import styled, { keyframes } from 'styled-components';
 
function PopupContent(props) {

    const onClose = () => {
        props.getClose(false)
    }
        return(
            <PopUpContainer>
                <PopUpAlign>
                    <div> 
                        <h2>This is Popup Title</h2>
                        <div>
                            <button type="button" onClick={onClose}>close</button>
                        </div>
                    </div>
                </PopUpAlign>
            </PopUpContainer>
        );
}
 
export default PopupContent;

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const PopUpContainer = styled.div`
    background-color: black;
    width: 100%;
    height: 100%;
    animation: ${fadeIn} 1s ease-out;
`
const PopUpAlign = styled.div`
    display: relative;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 30px 20px;
    box-shadow: 0 0 2px black;
    border-radius: 8px;
`
import React, {Component} from 'react';
import styled from 'styled-components';
 
class PopupContent extends Component {
    render(){
        return(
            <PopUpContainer>
                <PopUpAlign>
                    <div> 
                        <h2>This is Popup Title</h2>
                        <div>
                            <button type="button" onClick={this.props.onClose}>close</button>
                        </div>
                    </div>
                </PopUpAlign>
            </PopUpContainer>
        );
    }
}
 
export default PopupContent;

const PopUpContainer = styled.div`
    background-color: black;
    width: 100%;
    height: 100%;
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
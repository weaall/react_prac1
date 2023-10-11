import React from 'react';
import PopupDom from './popUpDom';
import PopupContent from './popUpContents';
import { useState } from 'react';
 
function Main(props) {
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const openPopup = e =>{
        setIsOpenPopup({
            isOpenPopup: true,
        })
    }

    const closePopup = e =>{
        setIsOpenPopup({
            isOpenPopup: false,
        })
    }

    return (
        <div>
            <h2>Open Popup</h2>
            <div>
                <button type="button"
                    id="popupDom"
                    onClick={openPopup}
                >
                    Click
                </button>
                {isOpenPopup &&
                    <PopupDom>
                        <PopupContent onClose={closePopup} />
                    </PopupDom>
                }
            </div>
        </div>
    );
}

export default Main;
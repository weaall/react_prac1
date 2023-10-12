import React from 'react';
import PopupDom from './popUpDom';
import PopupContent from './popUpContents';
import { useState } from 'react';
 
function Main() {
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const openPopup = () =>{
        setIsOpenPopup(true);
    }

    const closePopup = () =>{
        setIsOpenPopup(false);
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
                        <PopupContent getClose={closePopup} />
                    </PopupDom>
                }
            </div>
        </div>
    );
}

export default Main;
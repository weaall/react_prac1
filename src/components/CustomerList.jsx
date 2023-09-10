import axios from "axios";
import React, { useEffect, useState } from 'react';


function CustomerList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        setData();
    },[]);

    const setData = async () => {
        let user = await axios.get("/member_table");
        user = user.data;
        setList(user);
    };

    return (
        <div>
            <div>
                {list.map((myMap) => {
                    return (
                        <p>
                            {myMap.id} {myMap.date} {myMap.name} {myMap.address} {myMap.phone}
                        </p>
                    );
                })}
            </div>

        </div>
    );
}

export default CustomerList;
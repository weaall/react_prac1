import axios from "axios";
import React, { useEffect, useState } from 'react';


function CustomerList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        setData();
    }, []);

    const setData = async () => {
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
        <div>
            <div>
                {list.map((myMap) => {
                    return (
                        <div>
                            <p>
                                {myMap.id} {myMap.date} {myMap.name} {myMap.address} {myMap.phone}
                            </p>
                            <button onClick={() => deleteData(myMap.id)}>{myMap.id} 삭제</button>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default CustomerList;
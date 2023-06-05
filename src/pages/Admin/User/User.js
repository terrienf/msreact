import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const User = () => {
    let navigate = useNavigate()

    useEffect(()=> {
        console.log('useEffect')
    }, [])
    const francis = (userId) => {
        console.log('click')
        navigate("../userEdit/"+userId)

    }

    return (
        <div className="user">
            liste user
            <button onClick={() => francis(4)}>User 4</button>
        </div>
    );
};

export default User;
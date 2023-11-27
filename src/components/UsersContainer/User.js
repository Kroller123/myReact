import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    let {id,name} = user

    let navigate = useNavigate();

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <button onClick={()=>navigate(`${id}`, {state: {user}})}>User Details</button>
        </div>
    );
};

export {User};
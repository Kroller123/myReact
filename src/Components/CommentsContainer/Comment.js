import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    let {id, name, email, body} = comment

    let navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate('posts', {state: id})}>post</button>
            <hr/>
        </div>
    );
};

export {Comment};
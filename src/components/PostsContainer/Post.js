import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    let {title,id} = post

    let navigate = useNavigate();
    return (
        <div>
            <div><b>id</b> : {id}</div>
            <div><b>title</b> : {title}</div>
            <button onClick={()=> navigate(`${id}`)}>Post Details</button>
        </div>
    );
};

export {Post};
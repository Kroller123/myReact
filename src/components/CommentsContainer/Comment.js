import React from 'react';

const Comment = ({comment}) => {
    let {postId,id,name,email,body} = comment
    return (
        <div>
            <div><b>postId</b> : {postId}</div>
            <div><b>id</b> : {id}</div>
            <div><b>name</b> : {name}</div>
            <div><b>email</b> : {email}</div>
            <div><b>body</b> : {body}</div>
            <hr/>
        </div>
    );
};

export {Comment};
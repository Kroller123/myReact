import React from 'react';

const Post = ({post}) => {
    let {id, title, body, email} = post

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <div>email: {email}</div>
            <hr/>
        </div>
    );
};

export {Post};
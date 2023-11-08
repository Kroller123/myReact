import React from 'react';

const Todo = ({todo}) => {
    let {userId, id, title} = todo
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <hr/>
        </div>
    );
};

export {Todo};
import React from 'react';
import {Comments} from "../CommentsContainer/Comments";

const PostDetails = ({post}) => {
    let {id,userId,title,body} = post
    return (
        <div>
            <div><b>id</b> : {id}</div>
            <div><b>userId</b> : {userId}</div>
            <div><b>title</b> : {title}</div>
            <div><b>body</b> : {body}</div>
            <hr/>
            <Comments postId={id}/>
        </div>
    );
};

export {PostDetails};
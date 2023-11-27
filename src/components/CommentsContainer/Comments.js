import React, {useEffect, useState} from 'react';
import {commentsServices} from "../../services/commentsServices";
import {Comment} from "./Comment";

const Comments = ({postId}) => {
    let [comments, setComments] = useState([]);

    useEffect(()=>{
        commentsServices.getByPostId(postId).then(({data})=> setComments(data))
    })
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};
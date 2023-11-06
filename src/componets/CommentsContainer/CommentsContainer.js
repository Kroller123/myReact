import React, {useEffect, useState} from 'react';
import CommentForm from "./CommentForm";
import {commentsService} from "../../service/commentsService";
import Comments from "./Comments";

const CommentsContainer = () => {
    let [comments, setComments] = useState([]);

    useEffect(() =>{
        commentsService.getAll().then(({data}) => setComments(data))
    }, [])
    return (
        <div style={{width:'50%'}}>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentsContainer;
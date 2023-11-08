import React, {useEffect, useState} from 'react';

import {Post} from "./Post";
import {postService} from "../../services/postService";

const Posts = ({userId}) => {
    let [posts, setPosts] = useState([])


    useEffect(() => {
        postService.getByCommentId(userId).then(({data}) => setPosts(data))
    }, [userId])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
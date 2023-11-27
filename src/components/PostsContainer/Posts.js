import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsServices} from "../../services/postsServices";
import {Post} from "./Post";

const Posts = () => {

    let{userId} = useParams();
    let [posts , setPosts] = useState([]);

    useEffect(() => {
        postsServices.getByUserId(userId).then(({data})=> setPosts(data))
    }, [userId])


    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts}; 
import React from 'react';
import {useForm} from "react-hook-form";
import {commentsService} from "../../service/commentsService";

const CommentForm = ({setComments}) => {
    let {reset,register,handleSubmit} = useForm()

    let save = async (comment) => {
        let {data} = await commentsService.create(comment)
        setComments(prev=>[...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Save</button>
        </form>
    );
};

export default CommentForm;
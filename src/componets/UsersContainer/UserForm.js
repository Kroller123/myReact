import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../service/userService";

const UserForm = ({setUsers}) => {
    let {reset,register,handleSubmit} = useForm()

    let save = async (user) => {
        let {data} = await userService.create(user)
        setUsers(prev=>[...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>Save</button>
        </form>
    );
};

export default UserForm;
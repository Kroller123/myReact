import React, {useEffect, useState} from 'react';
import {UserDetails} from "../components/UsersContainer/UserDetails";
import {Outlet, useParams} from "react-router-dom";
import {usersServices} from "../services/usersServices";

const UsersDetailsPage = () => {
    let {userId} = useParams();
    let [user, setUser] = useState(null);


    useEffect(()=>{
        usersServices.getById(userId).then(({data})=> setUser(data))
    },[userId])


    return (
        <div>
            {user && <UserDetails user={user} key={user.id}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UsersDetailsPage};
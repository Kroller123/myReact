import React from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../Components/CommentsContainer/Comments";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Comments/>
        </div>
    );
};

export {CommentsPage};
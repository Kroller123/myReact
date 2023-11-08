import {useLocation} from "react-router-dom";

import {Posts} from "../Components/PostsContainer/Posts";

const PostsPage = () => {
    let {state: userId} = useLocation();


    return (
        <div>
            <Posts userId={userId}/>
        </div>
    );
};

export {PostsPage};
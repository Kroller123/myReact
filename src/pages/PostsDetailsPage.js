import {PostDetails} from "../components/PostsContainer/PostDetails";
import {useLoaderData} from "react-router-dom";
const PostsDetailsPage = () => {
    let {data} = useLoaderData();


    return (
        <div>
            <PostDetails post={data}/>
        </div>
    );
}


export {PostsDetailsPage};
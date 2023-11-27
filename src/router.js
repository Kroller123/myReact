import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UsersDetailsPage} from "./pages/UsersDetailsPage";
import {PostsPage} from "./pages/PostsPage";
import {usersServices} from "./services/usersServices";
import {PostsDetailsPage} from "./pages/PostsDetailsPage";
import {postsServices} from "./services/postsServices";

let router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>, loader: () => usersServices.getAll()},
            {
                path: 'users/:userId', element: <UsersDetailsPage/>, children: [
                    {path: 'posts', element: <PostsPage/>}
                ]
            },
            {
                path: 'users/:userId/posts/:postId',
                element: <PostsDetailsPage/>,
                loader: ({params:{postId}}) => postsServices.getById(postId),
            }
        ]
    }
])


export {router}
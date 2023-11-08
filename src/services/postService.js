import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

let postService = {
    getByCommentId: (commentId) => axiosService.get(urls.comments.byId(commentId))
}


export {postService}
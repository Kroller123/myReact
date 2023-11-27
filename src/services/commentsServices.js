import {axiosService} from "./axiosService";
import {urls} from "../constants/ursl";

let commentsServices = {
    getByPostId:(postId) => axiosService.get(urls.comments, {params: {postId}})
}

export {
    commentsServices
}
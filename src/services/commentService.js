import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

let commentService = {
    getAll: () => axiosService.get(urls.comments.comments)
}


export {commentService}
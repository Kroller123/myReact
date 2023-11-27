import {axiosService} from "./axiosService";
import {urls} from "../constants/ursl"

let postsServices ={
    getByUserId:(postId) => axiosService.get(urls.posts.base, {params:{postId}}),
    getById:(id) => axiosService.get(urls.posts.byId(id))
}

export {
    postsServices
}
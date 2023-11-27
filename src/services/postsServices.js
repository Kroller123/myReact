import {axiosService} from "./axiosService";
import {urls} from "../constants/ursl"

let postsServices ={
    getByUserId:(userId) => axiosService.get(urls.posts.base, {params:{userId}}),
    getById:(id) => axiosService.get(urls.posts.byId(id))
}

export {
    postsServices
}
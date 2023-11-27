import {axiosService} from "./axiosService";
import {urls} from "../constants/ursl"

let postsServices ={
    getAll:() => axiosService.get(urls.posts),
    getById:(id) => axiosService.get(urls.posts.byId(id))
}

export {
    postsServices
}
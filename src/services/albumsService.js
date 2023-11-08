import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

let albumsService = {
    getAll: () => axiosService.get(urls.albums)
}


export {
    albumsService
}
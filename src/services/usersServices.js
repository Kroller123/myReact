import {axiosService} from "./axiosService";
import {urls} from "../constants/ursl";

let usersServices = {
    getAll:() => axiosService.get(urls.users)
}

export {usersServices}
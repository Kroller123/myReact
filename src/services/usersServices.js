import {axiosService} from "./axiosService";
import {urls} from "../constants/ursl";

let usersServices = {
    getAll:() => axiosService.get(urls.users.base),
    getById:(id) => axiosService.get(urls.users.byId(id))
}

export {usersServices}
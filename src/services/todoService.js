import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

let todoService = {
    getAll: () => axiosService.get(urls.todos)
}


export {
    todoService
}
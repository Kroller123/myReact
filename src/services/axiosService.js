import axios from "axios";
import {baseURL} from "../constants/ursl";

let axiosService = axios.create({baseURL})

export {
    axiosService
}
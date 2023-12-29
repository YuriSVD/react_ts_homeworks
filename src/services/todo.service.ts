import {axiosService, IRes} from "./axios.service";
import {ITodo} from "../interfaces/todo.interface";
import {urls} from "../configs/urls";

const todoService = {
    getAll: (): IRes<ITodo[]> => axiosService.get(urls.todos)
}

export {todoService}
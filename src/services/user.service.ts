import {IRes} from "../types";
import {IUser} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../configs";

const userService = {
    getAll: (): IRes<IUser[]> => axiosService.get(urls.users),
    createUser: (user: IUser): IRes<IUser> => axiosService.post(urls.users, user)
}

export {userService};
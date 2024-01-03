import {axiosService, IRes} from "./axios.service";
import {urls} from "../configs/urls";
import {IUser} from "../interfaces/user.interface";
import {IComment} from "../interfaces/comment.interface";
import {IPost} from "../interfaces/post.interface";

const userService = {
    getAll: ():IRes<IUser[]> => axiosService.get(urls.users),
    getById: (id: string | undefined): IRes<IUser> => axiosService.get(`${urls.users}/${id}`),
    getPostsByUserId:(id: string | undefined): IRes<IPost[]> => axiosService.get(`${urls.users}/${id}${urls.posts}`)
}

export {userService}
import {axiosServicePlaceHolder, IRes} from "./axios.service";
import {IComment} from "../interfaces/comment.interface";
import {urls} from "../configs/urls";
import {IUser} from "../interfaces/user.interface";

const commentService = {
    getAll: (): IRes<IComment[]> => axiosServicePlaceHolder.get(urls.comments),
    create: (comment: IComment): IRes<IComment> => axiosServicePlaceHolder.post(urls.comments, comment)
};

const userService = {
    getAll: (): IRes<IUser[]> => axiosServicePlaceHolder.get(urls.users),
    create: (user: IUser): IRes<IUser> => axiosServicePlaceHolder.post(urls.users, user)
};

export {commentService, userService};
import {axiosService, IRes} from "./axios.service";
import {urls} from "../configs/urls";
import {IComment} from "../interfaces/comment.interface";

const commentService = {
    getAll: ():IRes<IComment[]> => axiosService.get(urls.comments)
}

export {commentService}
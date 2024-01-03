import {axiosService, IRes} from "./axios.service";
import {IComment} from "../interfaces/comment.interface";
import {urls} from "../configs/urls";

const commentService = {
    getAll: ():IRes<IComment[]> => axiosService.get(urls.comments)
}

export {commentService}
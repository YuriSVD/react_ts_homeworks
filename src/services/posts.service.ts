import {IPost} from "../interfaces/post.interface";
import {axiosService, IRes} from "./axios.service";
import {urls} from "../configs/urls";
import {IComment} from "../interfaces/comment.interface";

const postsService = {
    getAll: (): IRes<IPost[]> => axiosService.get(urls.posts),
    getCommentsByPostId: (id: string | undefined): IRes<IComment[]> => axiosService.get(`${urls.posts}/${id}${urls.comments}`),
    getPostById: (id: string | undefined): IRes<IPost> => axiosService.get(`${urls.posts}/${id}`)
}

export {postsService}
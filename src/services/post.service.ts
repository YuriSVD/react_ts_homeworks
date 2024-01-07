import {IPost} from "../interfaces";
import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postService = {
    getAll: (): IRes<IPost[]> => axiosService.get(urls.posts),
    createPost: (post: IPost): IRes<IPost> => axiosService.post(urls.posts, post),
}

export {postService};
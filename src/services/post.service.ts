import {axiosService, IRes} from "./axios.service";
import {urls} from "../configs/urls";
import {IPost} from "../interfaces/post.interface";

const postService = {
    getPostById: (id: string | undefined):IRes<IPost> => axiosService.get(`${urls.posts}/${id}`)
}

export {postService}
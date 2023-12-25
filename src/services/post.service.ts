import axios from "axios";
import {axiosPost, IRes} from "./axios.service";
import {IPost} from "../interfaces/post_interface";

const postService = {
    getAll: ():IRes<IPost[]> => axiosPost.get(""),
}

export {postService}
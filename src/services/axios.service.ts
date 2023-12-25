import axios, {AxiosResponse} from "axios";
import {launchesURL, postsURL} from "../configs/urls";

type IRes<T> = Promise<AxiosResponse<T>>

const axiosPost = axios.create({baseURL: postsURL});

const axiosLaunches = axios.create({baseURL: launchesURL});

export {axiosPost, axiosLaunches};

export type {
    IRes
};
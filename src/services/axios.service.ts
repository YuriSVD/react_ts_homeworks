import axios, {AxiosResponse} from "axios";
import {baseURLCar, baseURLPlaceHolder} from "../configs/urls";

type IRes<T> = Promise<AxiosResponse<T>>
const axiosServiceCar = axios.create({baseURL: baseURLCar});

const axiosServicePlaceHolder = axios.create({baseURL: baseURLPlaceHolder});

export {axiosServiceCar, axiosServicePlaceHolder}

export type {IRes}
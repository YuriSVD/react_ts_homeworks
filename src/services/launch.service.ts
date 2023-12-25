import {axiosLaunches, IRes} from "./axios.service";
import {ILaunch} from "../interfaces/launch.interface";

const launchService = {
    getAll: ():IRes<ILaunch[]> => axiosLaunches.get(""),
}

export {launchService};
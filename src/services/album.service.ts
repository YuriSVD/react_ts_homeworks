import {axiosService, IRes} from "./axios.service";
import {IAlbum} from "../interfaces/albums.interface";
import {urls} from "../configs/urls";

const albumService = {
    getAll: ():IRes<IAlbum[]> => axiosService.get(urls.albums)
}

export {albumService}
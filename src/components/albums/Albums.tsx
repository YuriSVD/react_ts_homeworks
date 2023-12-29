import React, {useEffect, useState} from 'react';
import {IAlbum} from "../../interfaces/albums.interface";
import {albumService} from "../../services/album.service";
import Album from "../album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    useEffect(() => {
        albumService.getAll()
            .then(value => value.data)
            .then(value => setAlbums(value));
    }, []);
    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;
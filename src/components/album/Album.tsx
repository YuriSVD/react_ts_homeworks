import React, {FC} from 'react';
import {IAlbum} from "../../interfaces/albums.interface";

interface IProps {
    album: IAlbum
}
const Album:FC<IProps> = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div>
            {id}. {title}
        </div>
    );
};

export default Album;
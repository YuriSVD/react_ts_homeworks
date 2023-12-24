import React, {FC} from 'react';
import {IRickAndMortyCharacter} from "../../interfaces/rickAndMortyCharacter";

interface IProps {
    rickAndMortyCharacter: IRickAndMortyCharacter;
}

const RickAndMortyCharacter:FC<IProps> = ({rickAndMortyCharacter}) => {
    const {name, status, species, gender, image} = rickAndMortyCharacter;
    return (
        <div>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <ul>
                <li>Status: {status}</li>
                <li>Species: {species}</li>
                <li>Gender: {gender}</li>
            </ul>
        </div>
    );
};

export default RickAndMortyCharacter;
import React from 'react';
import {IRickAndMortyCharacter} from "../../interfaces/rickAndMortyCharacter";
import RickAndMortyCharacter from "../rickAndMortyCharacter/RickAndMortyCharacter";

const rick: IRickAndMortyCharacter = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};
const morty: IRickAndMortyCharacter = {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
};
const summer: IRickAndMortyCharacter = {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
};
const beth: IRickAndMortyCharacter = {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
};
const jerry: IRickAndMortyCharacter = {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
};
const abadango: IRickAndMortyCharacter = {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
}
const rickAndMortyCharacters: IRickAndMortyCharacter[] = [rick, morty, summer, beth, jerry, abadango];
const RickAndMortyCharacters = () => {
    return (
        <div>
            {rickAndMortyCharacters.map(rickAndMortyCharacter => <RickAndMortyCharacter rickAndMortyCharacter={rickAndMortyCharacter} key={rickAndMortyCharacter.id}/>)}
        </div>
    );
};

export default RickAndMortyCharacters;
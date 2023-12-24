import React from 'react';
import './App.css';
import Simpsons from "./components/simpsons/Simpsons";
import RickAndMortyCharacters from "./components/rickAndMortyCharacters/RickAndMortyCharacters";


function App() {
    return (
        <div>
            <Simpsons/>
            <RickAndMortyCharacters/>
        </div>
    );
}

export default App;

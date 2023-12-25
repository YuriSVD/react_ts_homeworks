import React, {useState} from 'react';
import './App.css';
import Posts from "./components/posts/Posts";
import Launches from "./components/launches/Launches";
import {IPost} from "./interfaces/post_interface";

function App() {
    return (
        <div>
            <Posts/>
            <Launches/>
        </div>
    );
}

export default App;

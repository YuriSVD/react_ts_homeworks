import React, {useState} from 'react';
import './App.css';
import Cars from "./components/cars/Cars";
import Comments from "./components/comments/Comments";
import Users from "./components/users/Users";

function App() {
    const [choice, setChoice] = useState<string>("")
    return (
        <div>
            <button onClick={() => {
                setChoice("ShowCars");
            }}>Car Page</button>
            <button onClick={() => {
                setChoice("ShowComments");
            }}>Comment Page</button>
            <button onClick={() => {
                setChoice("ShowUsers");
            }}>User Page</button>
            {!choice && "choose your destiny"}
            {choice === "ShowCars" && <Cars/>}
            {choice === "ShowComments" && <Comments/>}
            {choice === "ShowUsers" && <Users/>}
        </div>
    );
}

export default App;

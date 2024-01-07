import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout, PostPage, UserPage} from "./Pages";

function App() {
    return (
    <div>
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"users"}/>}/>
                <Route path={"users"} element={<UserPage/>}/>
                <Route path={"posts"} element={<PostPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;

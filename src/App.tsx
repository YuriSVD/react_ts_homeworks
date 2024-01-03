import React from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./compontnts/home/Home";
import Layouts from "./compontnts/layouts/Layouts";
import About from "./compontnts/about/About";
import Users from "./compontnts/users/Users";
import Posts from "./compontnts/posts/Posts";
import Comments from "./compontnts/comments/Comments";
import UserDetails from "./compontnts/user-details/UserDetails";
import CurrentUserPosts from "./compontnts/currentUserPosts/CurrentUserPosts";
import PostDetails from "./compontnts/post-details/PostDetails";

function App() {
  return (
    <div>
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/layouts"}>Layouts</Link>
            <Link to={"/about"}>About</Link>
        </div>
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/layouts"} element={<Layouts/>}>
                    <Route path={"users"} element={<Users/>}>
                        <Route path={":userId"} element={<UserDetails/>}>
                            <Route path={"posts"} element={<CurrentUserPosts/>}>
                                <Route path={":postId"} element={<PostDetails/>}/>
                            </Route>
                        </Route>
                    </Route>
                    <Route path={"posts"} element={<Posts/>}/>
                    <Route path={"comments"} element={<Comments/>}/>
                </Route>
                <Route path={"/about"} element={<About/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;

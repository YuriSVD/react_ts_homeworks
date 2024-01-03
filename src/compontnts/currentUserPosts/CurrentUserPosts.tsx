import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import {IPost} from "../../interfaces/post.interface";
import Post from "../post/Post";

const CurrentUserPosts = () => {
    const {userId} = useParams<string>();
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        userService.getPostsByUserId(userId)
            .then(value => value.data)
            .then(value => setPosts(value));
    }, [userId]);
    return (
        <div>
            <h3>Posts of current user</h3>
            {posts.map(post => <Post post={post} key={post.id}/>)}
            <Outlet/>
        </div>
    );
};

export default CurrentUserPosts;
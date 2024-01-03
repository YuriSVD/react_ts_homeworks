import React, {useEffect, useState} from 'react';
import {IPost} from "../../interfaces/post.interface";
import {postsService} from "../../services/posts.service";
import Post from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        postsService.getAll()
            .then(value => value.data)
            .then(value => setPosts(value));
    }, []);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;
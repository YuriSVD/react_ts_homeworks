import React, {useEffect, useState} from 'react';
import {IPost} from "../../interfaces/post_interface";
import {axiosPost} from "../../services/axios.service";
import Post from "../post/Post";
import {postService} from "../../services/post.service";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        postService.getAll()
            .then(value => value.data)
            .then(value => setPosts(value));
    }, []);
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export default Posts;
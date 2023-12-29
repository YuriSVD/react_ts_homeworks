import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPost} from "../../interfaces/post.interface";
import {postService} from "../../services/post.service";

type IProps = {
    postId: string
}

const PostDetails = () => {
    const {postId} = useParams<IProps>();
    const [post, setPost] = useState<IPost>();
    useEffect(() => {
        postService.getPostById(postId)
            .then(value => value.data)
            .then(value => setPost(value))
    }, [postId]);
    return (
        <>
            {post &&
                <div>
                    <div>UserId: {post.userId}</div>
                    <div>Id: {post.id}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            }
        </>
    );
};

export default PostDetails;
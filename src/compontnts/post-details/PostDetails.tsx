import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IComment} from "../../interfaces/comment.interface";
import {postsService} from "../../services/posts.service";
import {IPost} from "../../interfaces/post.interface";
import Comment from "../comment/Comment";

const PostDetails = () => {
    const {postId} = useParams<string>();
    const [comments, setComments] = useState<IComment[]>([]);
    const [post, setPost] = useState<IPost>();
    useEffect(() => {
        postsService.getCommentsByPostId(postId)
            .then(value => value.data)
            .then(value => setComments(value));
        postsService.getPostById(postId)
            .then(value => value.data)
            .then(value => setPost(value))
    }, [postId]);

    return (
        <>
            {post && <div>
                <h3>Post Information</h3>
                <div>UserId: {post.userId}</div>
                <div>Id: {post.id}</div>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
                <h3>Comments to selected post</h3>
                {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
            </div>}
        </>
    );
};

export default PostDetails;
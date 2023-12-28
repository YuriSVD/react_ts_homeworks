import React, {useEffect, useState} from 'react';
import {IComment} from "../../interfaces/comment.interface";
import {commentService} from "../../services/placeholder.service";
import Comment from "../comment/Comment";
import CommentForm from "../comment/CommentForm";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        commentService.getAll()
            .then(value => value.data)
            .then(value => setComments(value));
    }, []);
    return (
        <div>
            <CommentForm/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;
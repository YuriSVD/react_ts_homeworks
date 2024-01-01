import React, {useEffect, useState} from 'react';
import {IComment} from "../../interfaces/comment.interface";
import {commentService} from "../../services/comment.service";
import Comment from "../comment/Comment";
import {Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        commentService.getAll()
            .then(value => value.data)
            .then(value => setComments(value));
    }, []);
    return (
        <div>
            <div>
                <h3>Post Details</h3>
                <Outlet/>
            </div>
            <div>
                <h3>All Comments</h3>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export default Comments;
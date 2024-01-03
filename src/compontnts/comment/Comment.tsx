import React, {FC} from 'react';
import {IComment} from "../../interfaces/comment.interface";

interface IProps {
    comment: IComment;
}
const Comment:FC<IProps> = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <div>PostId: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <br/>
        </div>
    );
};

export default Comment;
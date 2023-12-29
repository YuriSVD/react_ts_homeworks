import React, {FC} from 'react';
import {IComment} from "../../interfaces/comment.interface";
import {Link} from "react-router-dom";

interface IProps {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <Link to={postId.toString()}>
                {id}. {name}
            </Link>
        </div>
    );
};

export default Comment;
import React, {FC} from 'react';
import {IPost} from "../../interfaces/post_interface";

interface IProps {
    post: IPost
}

const Post: FC<IProps> = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <h3>{id} {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;
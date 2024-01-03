import React, {FC} from 'react';
import {IPost} from "../../interfaces/post.interface";
import {Link} from "react-router-dom";

interface IProps {
    post: IPost
}
const Post:FC<IProps> = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <Link to={id.toString()}>{id}. {title}</Link>
        </div>
    );
};

export default Post;
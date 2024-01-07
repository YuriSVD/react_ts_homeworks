import React, {FC} from 'react';

import {IPost} from "../../interfaces";

interface IProps {
    post: IPost
}

const Post:FC<IProps> = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <br/>
        </div>
    );
};

export {Post};
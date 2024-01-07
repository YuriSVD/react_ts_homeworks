import React, {FC} from 'react';
import {PostForm, Posts} from '../components';

const PostPage:FC = () => {
    return (
        <div>
            <PostForm/>
            <Posts/>
        </div>
    );
};

export {PostPage};
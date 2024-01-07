import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {postActions} from "../../redux";
import {Post} from "../Post";

const Posts:FC = () => {
    const {posts} = useAppSelector(state => state.postReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(postActions.getAll())
    }, [dispatch]);
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
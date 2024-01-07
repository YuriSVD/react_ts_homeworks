import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IPost} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {postActions} from "../../redux";

const PostForm = () => {
    const {register, handleSubmit, reset} = useForm<IPost>({mode: "all"});
    const dispatch = useAppDispatch();
    const save:SubmitHandler<IPost> = (post) => {
        dispatch(postActions.createPost({post}));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"enter userId"} {...register("userId")}/>
            <input type="text" placeholder={"enter title"} {...register("title")}/>
            <input type="text" placeholder={"enter body"} {...register("body")}/>
            <button>Save</button>
        </form>
    );
};

export {PostForm};
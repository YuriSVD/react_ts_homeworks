import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IComment} from "../../interfaces/comment.interface";
import {commentService} from "../../services/placeholder.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../validators/comment.validator";

const CommentForm = () => {
    const {register, reset, handleSubmit, formState:{isValid, errors}} = useForm<IComment>({mode:"all", resolver: joiResolver(commentValidator)})
    const save:SubmitHandler<IComment> = async (comment) => {
        const {data} = await commentService.create(comment);
        console.log(data);
        reset();
    };
    return <form onSubmit={handleSubmit(save)}>
        <input type="text" placeholder={"enter postId"} {...register("postId")}/>
        {errors.postId && <span>{errors.postId.message}</span>}
        <input type="text" placeholder={"enter name"} {...register("name")}/>
        {errors.name && <span>{errors.name.message}</span>}
        <input type="text" placeholder={"enter email"} {...register("email")}/>
        {errors.email && <span>{errors.email.message}</span>}
        <input type="text" placeholder={"enter body"} {...register("body")}/>
        {errors.body && <span>{errors.body.message}</span>}
        <button disabled={!isValid}>Save</button>
    </form>;
};

export default CommentForm;
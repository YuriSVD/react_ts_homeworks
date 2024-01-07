import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../../interfaces";
import {userActions} from "../../redux";
import {useAppDispatch} from "../../hooks";

const UserForm:FC = () => {
    const {register, handleSubmit, reset} = useForm<IUser>({mode: "all"});
    const dispatch = useAppDispatch();
    const save: SubmitHandler<IUser> = (user) => {
        dispatch(userActions.createUser({user}));
        reset();
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"enter name"} {...register("name")}/>
            <input type="text" placeholder={"enter username"} {...register("username")}/>
            <input type="text" placeholder={"enter email"} {...register("email")}/>
            <button>Save</button>
        </form>
    );
};

export {UserForm};
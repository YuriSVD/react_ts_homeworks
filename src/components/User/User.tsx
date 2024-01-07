import React, {FC} from 'react';
import {IUser} from "../../interfaces";

interface IProps {
    user: IUser;
}

const User:FC<IProps> = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <br/>
        </div>
    );
};

export {User};
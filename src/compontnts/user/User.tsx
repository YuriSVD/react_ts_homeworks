import React, {FC} from 'react';
import {IUser} from "../../interfaces/user.interface";
import {Link} from "react-router-dom";

interface IProps {
    user: IUser
}
const User:FC<IProps> = ({user}) => {
    const {id, name} = user;
    return (
        <Link to={id.toString()}>
            <div>{id}. {name}</div>
        </Link>
    );
};

export default User;
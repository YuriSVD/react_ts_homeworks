import React, {FC, useEffect} from 'react';

import {userActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {User} from "../User";

const Users:FC = () => {
    const {users} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.getAll())
    }, [dispatch]);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};
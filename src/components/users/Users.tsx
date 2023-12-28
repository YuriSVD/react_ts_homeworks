import React, {useEffect, useState} from 'react';
import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/placeholder.service";
import User from "../user/User";
import UserForm from "../user/UserForm";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAll().then(value => value.data)
            .then(value => setUsers(value));
    }, []);
    return (
        <div>
            <UserForm/>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
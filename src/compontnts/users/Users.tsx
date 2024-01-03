import React, {useEffect, useState} from 'react';
import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/user.service";
import User from "../user/User";
import {Outlet} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAll()
            .then(value => value.data)
            .then(value => setUsers(value));
    }, []);
    return (
        <div>
            <div>
                <h3>All Users!!!</h3>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export default Users;
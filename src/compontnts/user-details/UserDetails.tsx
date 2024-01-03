import React, {FC, useEffect, useState} from 'react';
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {IUser} from "../../interfaces/user.interface";
import {userService} from "../../services/user.service";

const UserDetails: FC = () => {
    const {userId} = useParams<string>();
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        userService.getById(userId)
            .then(value => value.data)
            .then(value => setUser(value));
    }, [userId]);
    const navigate = useNavigate();
    return (
        <>
            {user &&
            <div>
                <h3>User Details</h3>
                <div>Id: {user?.id}</div>
                <div>Name: {user?.name}</div>
                <div>Username: {user?.username}</div>
                <div>Phone: {user?.phone}</div>
                <div>Website: {user?.website}</div>
                <button onClick={() => {
                    navigate("posts");
                }}>Post of current user
                </button>
                <Outlet/>
            </div>}
        </>
    );
};

export default UserDetails;
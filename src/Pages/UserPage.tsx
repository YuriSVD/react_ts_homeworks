import React, {FC} from 'react';
import {Users, UserForm} from "../components";

const UserPage:FC = () => {
    return (
        <div>
            <UserForm/>
            <Users/>
        </div>
    );
};

export {UserPage};
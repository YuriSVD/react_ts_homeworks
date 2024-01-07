import React from 'react';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => {
                navigate("/users");
            }}>Users
            </button>
            <button onClick={() => {
                navigate("/posts");
            }}>Posts
            </button>
        </div>
    );
};

export {Header};
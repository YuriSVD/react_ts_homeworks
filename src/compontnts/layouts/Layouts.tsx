import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layouts = () => {
    return (
        <div>
            <h2>Layouts</h2>
            <ul>
                <li>
                    <Link to={"users"}>Users</Link>
                </li>
                <li>
                    <Link to={"posts"}>Posts</Link>
                </li>
                <li>
                    <Link to={"comments"}>Comments</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Layouts;
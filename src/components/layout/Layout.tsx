import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div>
                <h3>Layout view</h3>
                <ul>
                    <li>
                        <Link to={"comments"}>Comments</Link>
                    </li>
                    <li>
                        <Link to={"albums"}>Albums</Link>
                    </li>
                    <li>
                        <Link to={"todos"}>Todos</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Sub layout view</h3>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
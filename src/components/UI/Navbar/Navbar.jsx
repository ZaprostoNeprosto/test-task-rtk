import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar">
            {location.pathname !== '/' && (
                <div>
                    <NavLink to="/">Главная</NavLink>
                </div>
            )}
            {location.pathname !== '/posts' && (
                <div>
                    <NavLink to="/posts">Посты</NavLink>
                </div>
            )}
        </div>
    );
};

export default Navbar;

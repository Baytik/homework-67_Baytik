import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="main-nav">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">Posts</NavLink>
                </li>
            </nav>
        </header>
    );
};

export default Header;
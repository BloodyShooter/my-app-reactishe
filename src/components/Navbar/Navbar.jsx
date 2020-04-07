import React from 'react'
import clasess from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={clasess.nav}>
            <div className={clasess.item}>
                <NavLink to="/profile" activeClassName={clasess.activeLink}>Profile</NavLink>
            </div>
            <div className={clasess.item}>
                <NavLink to="/dialogs" activeClassName={clasess.activeLink}>Messages</NavLink>
            </div>
            <div className={clasess.item}>
                <NavLink to="/users" activeClassName={clasess.activeLink}>Users</NavLink>
            </div>
            <div className={clasess.item}>
                <a>News</a>
            </div>
            <div className={clasess.item}>
                <a>Music</a>
            </div>
            <div className={clasess.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
};

export default Navbar
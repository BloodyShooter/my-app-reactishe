import React from 'react'
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Inkscape.logo.svg/390px-Inkscape.logo.svg.png'/>

        <div className={classes.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/Login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header
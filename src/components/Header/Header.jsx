import classes from  './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (<header className = {classes.header}>
            <img src = "https://e-batyushka.ru/wp-content/uploads/2020/01/favicon.png.png"></img>
            <div className={classes.loginBlock}>
                {props.isAuth ? <div> {props.login} <button onClick={props.logout} >Log out</button> </div> : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>)
}
export default Header;
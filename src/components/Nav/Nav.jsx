import { NavLink } from "react-router-dom";
import FriendsNav from "../Friends/FriendsNav/FriendsNav";
import classes from "./Nav.module.css";
import React from 'react';

const Nav = (props) => {
    return (<nav className = {classes.nav}>
        <div className = {classes.item}>
            <NavLink to = "/profile" activeClassName = {classes.active}>Profile</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to = "/dialogs" activeClassName = {classes.active}>Messages</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to = "/users" activeClassName = {classes.active}>Users</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to = "/news" activeClassName = {classes.active}>News</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to = "/music" activeClassName = {classes.active}>Music</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to = "/settings" activeClassName = {classes.active}>Settings</NavLink>
        </div>
        <div className = {classes.friends}>
            <NavLink to = "/friends" activeClassName = {classes.active}>Friends
            <div className = {classes.friendName}><FriendsNav name = {props.state?.friends}/></div></NavLink>
        </div>
    </nav>)
}

export default Nav;
import { NavLink } from "react-router-dom";
import FriendsNav from "../Friends/FriendsNav/FriendsNav";
import classes from "./Nav.module.css"

const Nav = (props) => {
    return (<nav className = {classes.nav}>
        <div className = {classes.item}>
            <NavLink to = "/profile" className = {({isActive}) => `${isActive ? classes.active : ""}`}>Profile</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to = "/dialogs" className = {({isActive}) => `${isActive ? classes.active : ""}`}>Messages</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to = "/news" className = {({isActive}) => `${isActive ? classes.active : ""}`}>News</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to = "/music" className = {({isActive}) => `${isActive ? classes.active : ""}`}>Music</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to = "/settings" className = {({isActive}) => `${isActive ? classes.active : ""}`}>Settings</NavLink>
        </div>
        <div className = {classes.friends}>
            <NavLink to = "/friends" className = {({isActive}) => `${isActive ? classes.active : ""}`}>Friends
            <div className = {classes.friendName}><FriendsNav name = {props.state.friends}/></div></NavLink>
        </div>
    </nav>)
}

export default Nav;
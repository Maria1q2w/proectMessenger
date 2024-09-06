import classes from "./FriendsNav.module.css";
import Friend from './Friend/FriendNav'

const FriendsNav = (props) => {
    let friendsElement  = props.name?.map(name =>  <Friend name = {name.name}/>)

    return (
    <div className = {classes.item}>
        {friendsElement}
    </div>)}

export default FriendsNav;
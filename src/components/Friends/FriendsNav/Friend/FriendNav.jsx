import classes from "./FriendNav.module.css";

const Friend = (props) => {
    return (<div className = {classes.el}>
        <img src = "https://avatars.mds.yandex.net/i?id=bc493ebfd4db3861036b3c98f388b3408b4ffc3e-2510862-images-thumbs&n=13"></img>
        <div className = {classes.name}>{props.name}</div>
    </div>)}

export default Friend;
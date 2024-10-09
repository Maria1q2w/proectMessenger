import classes from "./Post.module.css";
import React from 'react';

const Post = (props) => {
    return (<div className = {classes.item}>
                <img src = "https://avatars.mds.yandex.net/i?id=bc493ebfd4db3861036b3c98f388b3408b4ffc3e-2510862-images-thumbs&n=13"></img>
                {props.message}
                    <div><span>Like </span>{props.like}</div>
            </div>)}

export default Post;
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    let postsElements  = props.posts?.map(post => <Post message= {post.message} like= {post.likesCount} />)
    const dispatch = useDispatch();
    let newPostElement = useRef();

    let addPost = () => {
        dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        dispatch(action);
    }

    return (<div className= {classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange= {onPostChange} ref= {newPostElement} value= {props.newPostText}></textarea>
                    </div>
                    <div>
                        <button onClick= {addPost}>Add post</button>
                    </div>
                </div>
                <div className= {classes.posts}>
                    {postsElements}
                </div>
            </div>)}

export default MyPosts;
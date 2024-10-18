import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { PureComponent } from "react";
import React from 'react';
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required }from "../../../utils/validators/validators"
import { Textarea } from "../../common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post message"} validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = React.memo((props) => {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps != this.props || nextState != this.state;
    // }

    let postsElements  = [...props.posts].reverse().map(post => <Post key={post.id} message= {post.message} like= {post.likesCount} key={post.id} />)
        let newPostElement = React.createRef();
    
        let onAddPost = (values) => {
            props.addPost(values.newPostText);
        };

        return (<div className= {classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className= {classes.posts}>
                {postsElements}
            </div>
        </div>
        )
})

export default MyPosts;
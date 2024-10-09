import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 10}, 
        {id: 2, message: 'It\'s my first post', likesCount: 12},
    ]
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("samurai");
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
    //expect(newState.posts[2].message).toBe("samurai");
});

test('message of new posts should be samurai', () => {
    let action = addPostActionCreator("samurai");
    let newState = profileReducer(state, action);
    //expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe("samurai");
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    //expect(newState.posts.length).toBe(3);
    expect(newState.posts.length).toBe(1);
});

test('after deleting length should not be decrement if id is incorrect', () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    //expect(newState.posts.length).toBe(3);
    expect(newState.posts.length).toBe(2);
});

import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 10}, 
                {id: 2, message: 'It\'s my first post', likesCount: 12},
            ],
            newPostText: "react samurai"
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"}, 
                {id: 2, message: "Howggg are you?"},
                {id: 3, message: "Yo"},
            ],
            dialogs: [
                {id: 1, name: "Dimych"}, 
                {id: 2, name: "Andrew"},
                {id: 3, name: "Artem"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Masha"},
            ],
            newMessageBody: "",
        },
        sidebar: {
            friends: [
                {name: "Andrew"},
                {name: "Artem"},
                {name: "Sasha"},
            ],
        },

    },
    _callSubscriber() {
        console.log("state changed");
    },
    getState()  {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);

    }
}

window.store = store;
export default store;
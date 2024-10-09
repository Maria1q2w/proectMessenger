const SEND_MESSAGE = "SEND-MESSAGE";


let initialState = {
    messages: [
        {id: 1, message: "Hi"}, 
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
    ],
    dialogs: [
        {id: 1, name: "Dimych"}, 
        {id: 2, name: "Andrew"},
        {id: 3, name: "Artem"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Masha"},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    
    switch(action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 4, message: body}]
            }
        }
        default:
            return state;

    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;
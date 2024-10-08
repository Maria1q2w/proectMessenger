import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import { useRef } from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    
    let state = props.store?.getState().dialogsPage;

    let dialogsElements = state?.dialogs?.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} />);
    let messagesElements = state?.messages?.map(message => <Message message = {message.message} />);
    let newMessageBody = state?.newMessageBody;

    let onSendMessageClick = () => {
        props.store?.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value= {newMessageBody} onChange= {onNewMessageChange} placeholder= "Enter your message"></textarea></div>
                    <div><button onClick= {onSendMessageClick}>Send</button></div>
                </div>
                
            </div>
        </div>
    )
}

export default Dialogs;
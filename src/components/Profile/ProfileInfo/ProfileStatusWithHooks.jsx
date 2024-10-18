import classes from "./ProfileInfo.module.css";
import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMods = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
    <div>
        {!editMode && 
        <div>
            <b>Status: </b><span onDoubleClick={activateEditMods} >{props.status || "-----"}</span>
        </div>
        }
        {editMode &&
        <div>
            <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode} />
        </div>
        }       
    </div>
    )
}

export default ProfileStatusWithHooks;
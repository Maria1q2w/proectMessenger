import classes from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";
import React from 'react';

const DialogItem = (props) => {
    return (<div className = {classes.dialogItem}>
        <NavLink to = {"/dialogs/" + props.id} activeClassName = {classes.active}>{props.name}</NavLink> 
    </div>)
}

export default DialogItem;
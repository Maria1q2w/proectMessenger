import classes from './FormsControls.module.css';
import React from 'react';
import { Field } from 'redux-form';

const FormControl = ({input, meta: {touched, error}, element, children}) => {
    const hasError =  touched && error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : " ")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, child, meta, element, ...restprops} = props;
    return (
        <FormControl {...props} ><textarea {...input} {...restprops} ></textarea></FormControl>
    )
}

export const Input = (props) => {
    const {input, child, meta, element, ...restprops} = props;
    return (
        <FormControl {...props} ><input {...input} {...restprops} ></input></FormControl>
    )
}

export const createField = (placeholder, name, component, validatots, props={}, text="") => {
    return <div>
            <Field placeholder={placeholder} name={name} component={component} validate={validatots} {...props} /> {text}
        </div>
}
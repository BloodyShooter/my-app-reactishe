import React from 'react'
import styles from './FormsControls.module.css'
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta : {touched, error}, child}) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError? styles.error: "")}>
            <div>
                {child}
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
};

export const TextArea = ({input, meta : {touched, error}, ...props}) => {

    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError? styles.error: "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span>{error}</span> }
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError? styles.error: "")}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
};

export const createField = (placeholder, name, component, validate, props = {}, text = "") => (
    <div>
        <Field
            placeholder={ placeholder }
            name={ name }
            component={ component }
            validate={ validate }
            {...props}
        /> {text}
    </div>
);
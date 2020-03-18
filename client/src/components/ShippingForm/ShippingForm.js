import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './ShippingForm.module.sass';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    }
    return errors
};


const renderField = ({
                         input,
                         label,
                         type,
                         placeholder,
                         readonly,
                         meta: { touched, error }
                     }) => (
    <div className={styles.formField}>
        <label>{label}</label>
        <div className={styles.row}>
            <input readOnly={readonly} className={`${ error && touched && styles.errorInput } `} {...input} placeholder={placeholder} type={type} />
            {touched &&
            ((error && <span className={styles.error}>{error}</span>))}
        </div>
    </div>
);

const shippingTypes = ['Free Shipping', 'Express Shipping - additional 9.99', 'Courier Shipping - additional 19.99'];
const renderShippingType = ({ input, label,  meta: { touched, error } }) => (
    <div className={styles.formField}>
        <label >{label}</label>
        <select {...input}>

            {shippingTypes.map(val => (
                <option value={val} key={val}>
                    {val}
                </option>
            ))}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
);

function ShippingForm(props) {
    const { handleSubmit, submitting, totalPrice } = props
    return (
        <div className={styles.formContainer}>
            <form className={styles.shippingForm} onSubmit={handleSubmit}>
                <Field
                    name="username"
                    type="text"
                    component={renderField}
                    label="Name*"
                    placeholder="Vitalii Moroz"
                />
                <Field
                    name="address"
                    type="text"
                    component={renderField}
                    label="Address*"
                />
                <Field
                    name="phone"
                    type="text"
                    component={renderField}
                    label="Phone"
                />
                <Field name="email" type="email" component={renderField} label="E-mail" placeholder={'example@gmail.com'}/>
                {totalPrice && totalPrice > 300 ?
                    <Field
                        name="shippingType"
                        type="text"
                        component={renderField}
                        label="Shipping options"
                        readonly="readonly"
                        placeholder="Free Express Shipping"
                    />
                    :<Field
                    name="shippingType"
                    type="text"
                    component={renderShippingType}
                    label="Shipping options"
                />}
                <div className={styles.payButton}>
                    <button type="submit" disabled={submitting}>
                        Pay
                    </button>
                </div>
            </form>
        </div>

    )
}

export default reduxForm({
    form: 'form',
    validate,
    destroyOnUnmount: false,
})(ShippingForm);
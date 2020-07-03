import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from '../formFields';

import history from '../../history';

import OrderSummary from './orderSummary';

class ShippingForm extends Component {
    render () {
        const {className, handleSubmit} = this.props
        return (
            <form onSubmit={handleSubmit} className={`${className} shipping-form`}>
                <Field className='shipping-form__name'
                type="name"
                title="Company Name"
                placeholder="Company Name"
                name="companyname"
                component={FormInput}
                />
                <Field className='shipping-form__address'
                type="companyaddress"
                title="Company Adress"
                placeholder=" Company Adress"
                name="companyaddress"
                component={FormInput}
                />
                <Field className='shipping-form__city'
                type="city"
                title="City"
                placeholder="City"
                name="city"
                component={FormInput}
                />           
                <Field className='shipping-form__state'
                type="state"
                title="State"
                placeholder="State"
                name="state"
                component={FormInput}
                />
                <Field className='shipping-form__zipcode'
                type="zipcode"
                title="Zipcode"
                placeholder="Zipcode"
                name="zipcode"
                component={FormInput}
                />

                <div className="shipping-form__line"></div>

                <Field className='shipping-form__ccname'
                type="name"
                title="Name on Credit Card"
                placeholder="Name"
                name="ccname"
                component={FormInput}
                />
                <Field className='shipping-form__card'
                type="password"
                title="Credit Card Number"
                placeholder="____-____-____-____"
                name="card"
                component={FormInput}
                />
                <Field className='shipping-form__expiration'
                type="expiration"
                title="Expiration Date"
                placeholder="expiration"
                name="expiration"
                component={FormInput}
                />
                <Field className='shipping-form__ccv'
                type="ccv"
                title="CCV"
                placeholder="CCV"
                name="ccv"
                component={FormInput}
                />

                <Field className='shipping-form__back'
                onClick={()=> history.push('/signin')}
                type="button"
                title="Back"
                name="back"
                short={true}
                component={FormButton}/>

                <div className="shipping-form__line"></div>
                <Field className='shipping-form__pay-complete'
                type="submit"
                title="Pay & Complete"
                name="pay-complete"
                component={FormButton}/>
                
                <OrderSummary className='shipping-form__order-summary'/>
            </form>
        )
    }
}

ShippingForm = reduxForm({
    form: 'ShippingForm'
})(ShippingForm)

export default ShippingForm
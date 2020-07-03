import React, {Component} from "react";

import PageTitle from "../pageTitle";

// REDUX
import {connect} from 'react-redux';
import * as actions from '../../actions';

import ShippingForm from './shippingForm';


class Shipping extends Component {

    componentDidMount(){
        this.props.setHeaderLinks([])
        this.props.setNavbarLinks([])
    }

    onSubmit = (fields) => {
        fields.items = this.props.cartProducts
        this.props.fetchOrderPlaced(fields)
        this.props.history.push('orderconfirmation')
    }

    render () {
        return (
            <div className="shipping">
                <PageTitle className="shipping__page-title" title="Shipping Address" />
                <ShippingForm onSubmit={this.onSubmit} className='shipping__form' />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

Shipping = connect(mapStateToProps, actions)(Shipping)

export default Shipping
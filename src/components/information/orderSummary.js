import React, { Component } from 'react';

import { connect } from 'react-redux';

import { UnderLinedTitle, InfoTitle } from './infoHelp';

class OrderSummary extends Component {
    render() {
        const { className } = this.props
        let subtotal = 0
        let tax = 0.16;
        let amtStickers = 0
        this.props.cartProducts.map(products => {
            subtotal += products.product.quantity * products.product.base_price;
            amtStickers += products.product.quantity;
        })
        return (
            <div className={`${className} order-summary`}>
                <UnderLinedTitle className='order-summary__title' title='Order Summary' />
                <InfoTitle className='order-summary__subtotal' title={`${amtStickers} items`} value={`$${subtotal}`} />
                <InfoTitle className='order-summary__tax-shipping' title='Taxes Shipping' value={`$${tax}`} />
                <InfoTitle className='order-summary__total info-title-green' title='Total' value={`$${subtotal + tax}`} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;
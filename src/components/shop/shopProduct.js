import React, { Component } from 'react';
import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';

import * as actions from '../../actions';
import { connect } from 'react-redux';

class ShopProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            quantity: 1
        }
    }

    handleQuantity = (e) => {
        this.setState({quantity: e});
    }

    handleAddToCart = () => {

        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden')
            const quantity = this.state.quantity;
            const { _id, description, base_price, belongsTo, imageUrl } = this.props
            this.props.addCartProduct({_id, description, base_price, belongsTo, imageUrl, quantity})
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden')
        }
    }

    render(){
        const {description, base_price } = this.props;
        return (
            <div className='shop-product'>
                <div className='shop-product__front'>
                    {/* <img alt="product-front" className='shop-product__front__image' src='http://via.placeholder.com/220x220' /> */}
                    <div className='shop-product__front__title'>{description}</div>
                </div>
                <div className='shop-product__back'>
                    <div className='shop-product__back__title'>
                        {description}
                    </div>
                    <div className="shop-product__back__description">
                        {/* <img alt="product-back" className='' src='http://via.placeholder.com/210x160' /> */}
                    </div>
                    <div className='shop-product__back__price_quantity'>
                        <GreenPriceTag className='shop-product__back__price' title={base_price} />
                        <Quantity className='shop-product__back__quantity' quantity={this.state.quantity} getQuantity={this.handleQuantity}/>
                    </div>
                    <a href="#" onClick={this.handleAddToCart} className='shop-product__back__add-to-cart'>
                        Add to Cart
                    </a>
                </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    const { filters } = state.options
    return { filters}
}

ShopProduct = connect(mapStateToProps,actions)(ShopProduct);

export default ShopProduct;
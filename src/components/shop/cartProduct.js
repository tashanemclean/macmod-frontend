import React, { Component } from 'react';
import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class CartProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            quantity: this.props.product.quantity
        }

        this.handleProductRemove = this.handleProductRemove.bind(this);
    }

    handleProductRemove = (e, item) => {
        e.preventDefault();

        // console.log(item)
        const pro = this.props.deleteCartProduct(item);

        // console.log(pro)

        this.props.removeItem(item);

    }

    handleQuantity = (e) =>{

        this.setState({quantity: e})

        const quantity = e;
        const { _id, description, base_price, belongsTo, imageUrl } = this.props.product;
        this.props.addCartProduct({_id, description, base_price, belongsTo, imageUrl, quantity})
    }

    // componentDidMount(){
    //     const {quantity} = this.props.product
    //     this.setState({quantity: quantity})
    // }

    render() {
        const { className, product, idItem } = this.props
        const { description, base_price, _id } = product;
        console.log(product)
        return (
            <div className={`${className} cart-product`}>
                <img alt="cart-prod" className='cart-product__image' src='http://via.placeholder.com/130x130' />
                <div className='cart-product__title'>{description}</div>
                <Quantity className='cart-product__quantity' quantity={this.state.quantity} getQuantity={this.handleQuantity}/>
                <a href="#" onClick={e => this.handleProductRemove(e, idItem)} className='cart-product__remove'>Remove</a>
                <GreenPriceTag className='cart-product__price' title={base_price} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user
    return {
        cartProducts
    }
}

CartProduct = connect(mapStateToProps, actions)(CartProduct)

export default CartProduct
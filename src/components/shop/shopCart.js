import React, { Component } from 'react'; 
import CartProduct from './cartProduct';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import CartButton from './cartButton';

import history from '../../history';

function CartContent({cartRemovedIt, className, products}) {

    const handleRemove = (e) => {

        cartRemovedIt(true);
    }

    let count = products.length;
    let productsJSX = products.map((product, i) => <CartProduct {...product} idItem={i} key={product._id} removeItem={handleRemove} />)
    return (
        <div className={`${className} cart-content`} >
            <div className='cart-content__title'>
                Cart Items {count}
            </div>
            <div className='cart-content__products'>
                {productsJSX}
            </div>
            <CartFooter className='cart-content__footer' products={products} />
        </div>
    )
}

function CartFooter({className,products}) {
    let subTotal = 0;
    products.map(cartProducts => {
        subTotal += cartProducts.product.quantity * cartProducts.product.base_price; 
    })

    return (
        <div className={`${className} cart-footer`}>
            <a href="#" onClick={() => history.push('/order/review')} className='cart-footer__checkout'>
                Checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
            </div>
            <div className='cart-footer__price'>
                ${subTotal}
            </div>
        </div>
    )
}

class ShopCart extends Component {

    constructor(props){
        super(props)

        this.handleRemoveCart = this.handleRemoveCart.bind(this);

    }

    componentDidMount() {
        this.props.fetchCartProducts();
    }

    handleAddToCart = () => {
        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden')
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden')
        }
    }

    handleRemoveCart = (e) => {
        this.props.fetchCartProducts();
    }

    render () {
        const { className } = this.props;
        return (
            <div id='shop-cart' className={`${className} shop-cart cart-hidden`}>
                <CartButton className='shop-cart__toggle' icon='fas fa-times' onClick={this.handleAddToCart} />
                <CartContent className='shop-cart__content' products={this.props.cartProducts} cartRemovedIt={this.handleRemoveCart} />
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

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;
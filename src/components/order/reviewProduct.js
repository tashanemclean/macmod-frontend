import React, { Component } from 'react';
import GreenPriceTag from '../greenPriceTag';

class ReviewProduct extends Component {
    render() {
        const { product } = this.props;
        const { imageUrl, description, base_price, quantity } = product;
        return (
            <div className='review-product'>
                <img className='review-product__image' src={imageUrl} />
                <div className='review-product__title'>{description}</div>
                <div className='review-product__quantity'>{quantity}</div>
                <GreenPriceTag className='review-product__price' title={base_price * quantity}/>
            </div>
        )
    }
}

export default ReviewProduct;
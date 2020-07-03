import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewProduct from './reviewProduct';

class ReviewProducts extends Component {

    render() {
        const { className,cartProducts } = this.props;
        return (
            <div className={`${className} review-products`}>
                {
                    cartProducts.map((product,key) => {
                        return <ReviewProduct 
                            key={product._id}
                            {...product}
                            />
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

ReviewProducts = connect(mapStateToProps)(ReviewProducts)

export default ReviewProducts;
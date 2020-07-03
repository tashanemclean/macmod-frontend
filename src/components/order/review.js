import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

class Review extends Component {

    componentDidMount(){
        // this.props.setHeaderLinks([]);
        // this.props.setNavbarLinks([]);
    }

    onSubmit = () => {
        this.props.history.push('/information/shipping')
    }
    render() {
        let subTotal = 0;
        this.props.cartProducts.map(product => {
            subTotal += product.product.quantity * product.product.base_price;
        })
        return (
            <div className="review">
                <PageTitle className='review__page-title' title='Order Review'/>
                <ReviewForm className='review__form' onSubmit={this.onSubmit} subTotal={subTotal} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

Review = connect(mapStateToProps, actions)(Review);

export default Review;
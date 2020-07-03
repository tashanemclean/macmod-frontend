import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import navbarRoutes from 'components/headernavbar/navRoutes';

class OrderConfirmation extends Component {

    componentDidMount(){
        this.props.setNavbarLinks(navbarRoutes);
    }

    render(){
        const { orderconfirmation } = this.props;
        return (
            <div className='order-confirmation'>
                <h3>Thank you for your order</h3>
                <h4>Your confrimation number is </h4>
                <hr></hr>
                <h1>{orderconfirmation.order_no}</h1>
            </div>
        )
    }
};

function mapStateToProps(state) {
    const { orderconfirmation } = state.orders;
    return { orderconfirmation };
};

OrderConfirmation = connect(mapStateToProps,actions)(OrderConfirmation);

export default OrderConfirmation;
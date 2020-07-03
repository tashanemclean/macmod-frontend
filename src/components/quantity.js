import React, { Component } from 'react';

class Quantity extends Component {

    constructor(props) {
        super(props)

        this.state = {
            quantity: this.props.quantity
        }

    }

    handleAddQuantity = (e) => {

        var element = e.target;

        if ((this.state.quantity === 1 && element.classList.contains('fa-minus') === true) || (this.state.quantity === 99 && element.classList.contains('fa-plus') === true)){
            console.log(this.state.quantity)
        }else if(element.classList.contains('fa-plus') === true){
            this.setState({quantity: this.state.quantity + 1});
            this.props.getQuantity(this.state.quantity + 1)
        }else if(element.classList.contains('fa-minus') === true){
            this.setState({quantity: this.state.quantity - 1});
            this.props.getQuantity(this.state.quantity - 1)
        }
    }

    render() {
        const { className, quantity } = this.props;
        return (
            <div className={`${className} quantity`}>
                <div className='quantity__count'>
                    {quantity}
                </div>
                <div className='quantity__plus' onClick={this.handleAddQuantity}>
                    <i className="fas fa-plus" ></i>
                </div>
                <div className='quantity__minus' onClick={this.handleAddQuantity} >
                    <i className="fas fa-minus"></i>
                </div>
            </div>
        )
    }
}

export default Quantity;
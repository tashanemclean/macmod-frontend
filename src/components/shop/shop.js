import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShopFilter from './shopFilter';
import ShopSearchBar from './shopSearchBar';
import ShopProduct from './shopProduct';

import CartButton from './cartButton';
import ShopCart from './shopCart';
import navbarRoutes from 'components/headernavbar/navRoutes';

class Shop extends Component {
    constructor() {
        super()

        this.state = {
            showCart: true,
        }
    }

    componentDidMount() {

        this.props.setNavbarLinks(navbarRoutes)

        if(this.props.clickedbuynow.length !=0) {
            this.props.fetchShopProducts({filters: this.props.clickedbuynow})
            this.setState({ filtered_apply: true })
        }
        else{
            this.props.fetchShopProducts({});
        }
        
    }

    onSubmit = (fields) => {
        // when a request to filter is submitted we set filtered to true
        this.setState({ filtered: true })
        this.props.fetchShopProductsQuery(fields)
    }

    handleAddToCart = () => {
        
        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden')
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden')
        }
    }

    render() {

        return (
            <div className='shop'>

                <ShopFilter /> {/*onApplyFilter={this.state.filters_applied}*/}

                <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar' />
                
                <div className='shop__products'>
                {
                    this.props.filteredProducts.map(product => {

                        return (
                            <ShopProduct {...product} key={product._id['$oid']} />
                        )
                    })
                }
                {
                    (this.state.filtered) ? null
                    :
                    this.props.products.map(product => {
                        return (
                            <ShopProduct {...product} key={product._id['$oid']} />
                        )
                    })
                }
                </div>
                { this.state.showCart ? <ShopCart className='shop__cart' />: '' }
                <CartButton onClick={this.handleAddToCart} className='shop__cart-button' icon='fas fa-cart-plus' />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { clickedbuynow } = state.brands
    const { categories,filteredProducts,products } = state.shop;
    const {filters, filtersLists} = state.options;
    return { 
        categories,
        filteredProducts,
        products,
        filters,
        filtersLists,
        clickedbuynow
    }
}

Shop = connect(mapStateToProps, actions)(Shop)

export default Shop
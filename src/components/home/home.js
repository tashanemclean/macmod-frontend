import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import HomeFilter from './homeFilter';
import SubNav from '../subnavbar/subNav';
import HomeEvents from './homeEvents';
import HomeEnd from './homeEnd';
import HomeResources from './homeResources';
import navbarRoutes from 'components/headernavbar/navRoutes';
import ShopFilter from '../shop/shopFilter';


class Home extends Component {
    constructor(){
        super()

        this.state = {
            defaultHome: true
        }
    }
    componentDidMount() {

        this.props.fetchHomePDF()
        this.props.setNavbarLinks(navbarRoutes)
        this.props.filterOptions()

    }

    componentWillUnmount(){
        this.props.setNavbarLinks(navbarRoutes)
    }

    render() {
        return (
            <div className='home'>
                <div className='home__items'>
                    <SubNav className='home__items__subnav' />
                    {/* <HomeFilter className='home__items__filter' /> */}

                    <div className='home__items__filter'><ShopFilter redirect={true} /></div>

                    <div className='home-trio'>
                        <HomeResources />
                    </div>

                    <HomeEvents />

                    <HomeEnd />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { headerLinks, navbarLinks } = state.headerNavbar;
    return { headerLinks, navbarLinks }
}

Home = connect(mapStateToProps, actions)(Home)

export default Home;
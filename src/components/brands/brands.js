import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import history from '../../history';
import navbarRoutes from 'components/headernavbar/navRoutes';

class Brands extends Component {

    componentDidMount(){
        this.props.setNavbarLinks(navbarRoutes)
        this.props.fetchBrands(this.props.match.params.id)
    }

    render(){
        const { brands } = this.props
        return (
            <div className='content'>
                <div className='brands'>
                    {
                        brands.map(a=> {
                            return (
                            <Col id={a._id['$oid']} key={a._id['$oid']} xs={2} md={3} className='brands__items'>
                                <Image
                                className='brands__items__image'
                                src={`${a.logourl}`} 
                                onClick={()=> history.push(`${a.path}`)} 
                                />
                            </Col>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { brands } = state.brands
    return { brands }
}

Brands = connect(mapStateToProps,actions)(Brands)

export default Brands;
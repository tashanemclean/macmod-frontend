import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import history from '../../history';

class PromotionsContainer extends Component {

    componentDidMount(){
        this.props.fetchPromotions()
    }

    render(){
        return (
            <div className='container'>
               <div className='promotions'>
                {
                    this.props.promotions.map(a => {
                        return (
                            <Card className='text-center' key={a._id} border='0' style={{ width: '18rem'}}>
                                <Card.Img src={a.promotionimages.promotionthumbnail} />
                                <Card.Body >
                                    <Card.Text>{a.promotiondescription}</Card.Text>
                                    <Button onClick={()=> history.push(a.promotionpath)}>VIEW OFFER</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { promotions } = state.promotions
    return { promotions}
}

PromotionsContainer = connect(mapStateToProps,actions)(PromotionsContainer)

export default PromotionsContainer;
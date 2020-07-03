import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// component to render tooltip details 
class ToolTipDetail extends Component {

    render(){
        const { image } = this.props
        return (
            <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={
                <Tooltip>
                    <Image style={{backgroundColor: 'white'}} fluid src={image} />
                </Tooltip>
            }
            >
                <Button variant="success">Show</Button>
          </OverlayTrigger>
        )
    }
}

function mapStateToProps(state) {
    const { phaseimage } = state.brands
    return { phaseimage }
}

ToolTipDetail = connect(mapStateToProps)(ToolTipDetail)

export default ToolTipDetail
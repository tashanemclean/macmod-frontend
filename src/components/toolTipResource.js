import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ToolTipDetail from './toolTipDetail';

// this resource is used to fetch the image that will be showed on the brandContentPage
class ToolTipResource extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { image } = this.props
        return (
            <ToolTipDetail image={image} />
        )
    }


}

ToolTipResource = connect(null,actions)(ToolTipResource)

export default ToolTipResource
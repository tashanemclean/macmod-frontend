import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import history from '../../history';

class HomeResources extends Component {

    componentDidMount(){
        this.props.fetchHomeResources()
    }

    render(){
        return(
            <div className='container'>
                <div className='events'>
                    {
                        this.props.resources.map(resource => {
                            return <div key={resource._id} className='events__items' onClick={()=> history.push(`${resource.path}`)} >
                                <h4>{resource.resources.label}</h4>
                                <div>{resource.resources.sub}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { resources } = state.page
    return { resources }
}

HomeResources = connect(mapStateToProps,actions)(HomeResources)

export default HomeResources
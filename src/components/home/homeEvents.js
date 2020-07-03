import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class HomeEvents extends Component {
    componentDidMount() {
        this.props.fetchFeaturedHomeResources()
    }
    render() {
        return (
            <div>
                <h4 className='events-heading'>Featured Resources</h4>
                <div className='container'>
                    <div className='events fet-resources'>
                        {
                            this.props.eventsresources.map(resource => {
                                return <div key={resource._id} className='events__items'>
                                    <h4>{resource.resources.label}</h4>
                                    <div>{resource.resources.sub}</div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { eventsresources } = state.page
    return { eventsresources }
}

HomeEvents = connect(mapStateToProps, actions)(HomeEvents);

export default HomeEvents
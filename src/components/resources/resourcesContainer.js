import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import navbarRoutes from 'components/headernavbar/navRoutes';
import ResourcesDetail from './resourcesDetail';

class ResourcesContainer extends Component {
    constructor(){
        super()

        this.state = {
            currentPage: [],
            path: [],
            obj: {}
        }
    }

    componentDidMount(){
        this.props.fetchResourcesDetails(this.props.match.params.id,20)
        this.props.setNavbarLinks(navbarRoutes)
    }

    componentDidUpdate(prevProps){
        if( prevProps.match.params.id === 'Posters and Presentations'){
            // we get the posters and presentions from the database
            this.props.fetchPostersPresentions()
        } 
        if(prevProps.match.params.id === 'Applications') {
            // this.props.fetchResourcesDetails(this.props.match.params.id,20)
        }
    }

    render(){
        const obj = this.props.resourcedetails
        const th = []
        if(obj?.length !== 0){
            for(var i in obj){
                delete obj[i].uploadDate
                th.push(Object.keys(obj[i]))
            }
        }
        return (
            <div className='container'>
                <div className='content'>
                    <ResourcesDetail path={this.props.match.params.id} resources={{obj,th}} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { navbarLinks } = state.headerNavbar
    const { resourcedetails } = state.resources
    return { navbarLinks,resourcedetails }
}

ResourcesContainer = connect(mapStateToProps,actions)(ResourcesContainer)

export default ResourcesContainer
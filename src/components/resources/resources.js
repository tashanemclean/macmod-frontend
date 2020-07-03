import React , { Component } from 'react'; 

import { connect } from 'react-redux';
import * as actions from '../../actions';

import history from '../../history';
import Image from 'react-bootstrap/Image';
import navbarRoutes from 'components/headernavbar/navRoutes';

class Resources extends Component {

    componentDidMount(){
        this.props.fetchResourcesContent()
        this.props.setNavbarLinks(navbarRoutes)
    }
    render(){
        const { resources } = this.props
        return (
            <div className='resource'>
                <div className='resource__image'>
                    <Image src='https://macmod.s3.us-east-2.amazonaws.com/images/misc/smarterchromaimage.svg' />
                </div>
                <div className='resource__container'>
                    {
                        resources.map(a => {
                            return (
                            <div 
                            key={a._id} 
                            className='resource__container__items' 
                            onClick={()=> history.push(`${a.path}`)}
                            >
                                <a>
                                    {a.name}
                                </a>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { resources } = state.resources
    return {
        resources
    }
}

Resources = connect(mapStateToProps,actions)(Resources);


export default Resources
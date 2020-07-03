import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import ContactUs from './contactUs';


const StoreLocation = () => {
    // component will fetch GOOGLE MAP API 
    return (
        <div className='location'>
        </div>
    )
}

class ContactUsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchContacts()
        this.props.fetchContactDetails()
    }
    
    render(){
       const { contacts,contactdetails } = this.props
        return (
            <div className='contact-us'>
                <StoreLocation />
                <ContactUs className='contact-us__details' contacts={contacts} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { contacts,contactdetails } = state.contacts
    return { contacts,contactdetails }
}
ContactUsContainer = connect(mapStateToProps,actions)(ContactUsContainer)

export default ContactUsContainer
import React, { Component } from 'react'

class MailButton extends Component {

    render(){
        const { className,onClick } = this.props
        return (
            <a onClick={onClick} className={`${className} mail-button`}>
                <i className='fas fa-envelope' />
            </a>
        )
    }
}

export default MailButton
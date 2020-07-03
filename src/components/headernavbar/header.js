import React, {Component} from "react";

import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import history from '../../history';

function FormSearchBar(props) {
    return (
        <div className='search-bar-grid header__searchbar'>
             <i className="fas fa-search search-bar-grid__icon"></i>
            <input className={`${props.className} form-search-bar search-bar-grid__input`} {...props.input} type='text' placeholder={`${props.placeholder}`} />
        </div>
    )
}

class Header extends Component {

    handleAddToCart = () => {
        console.log("clicked cart")
    }

    handleMailClick = () => {
        console.log('clicked mail')
    }
    render() {
        return (
            <div className='header' style={{backgroundImage: "url('https://macmod.s3.us-east-2.amazonaws.com/images/logos/Front_Cover_Core.jpg')"}}>
                <img
                alt="header-img"
                onClick={()=> history.push('/')}
                className="header__img" 
                src='https://mac-mod.vseen.com/wp-content/uploads/2019/09/logo.svg' />

                <Field 
                name='query'
                placeholder='Search' 
                component={FormSearchBar}
                className='header__searchbar__input'/>

                <div className='header__links'>
                    {
                        this.props.headerLinks.map((link, index) => {
                            return (
                                <a
                                    href="#"
                                    key={index}  
                                    className='header__link' 
                                    onClick={()=> history.push(link.path)}
                                >
                                    {link.title}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {headerLinks} = state.headerNavbar
    return {
        headerLinks
    }
}

Header = reduxForm({
    form: 'Header'
})(Header)

Header = connect(mapStateToProps)(Header)

export default Header;
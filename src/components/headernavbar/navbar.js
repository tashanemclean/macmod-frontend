import React, {Component} from "react"
import {connect} from 'react-redux'
import * as actions from '../../actions'

import history from '../../history'

import { Dropdown, Col, Row, ButtonGroup } from 'react-bootstrap'

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            navbar: []
        };
    }

    handleOnClick = (link) => {
        this.props.changeNavbarActive(link._id);
        if(this.props.onClick) {
            this.props.onClick(link._id);
        }
    }

    // componentDidMount(){

    //     fetch("http://localhost:5000/menu/navbar/")
    //     .then(res => res.json())
    //     .then((result) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 navbar: result
    //             });
    //         },
    //         (error) => {
    //             this.setState({
    //                 isLoaded: true,
    //                 error
    //             });
    //         }
    //     )

    // }

    render() {
        const { error, isLoaded, navbar } = this.state;

        // if(error){
        //     console.log(error.message)
        // }else if(!isLoaded){
        //     console.log("loading")
        // }else{
        //     console.log(navbar)
        // }

        return (
            <div className='navbar' style={{backgroundImage: "url('https://macmod.s3.us-east-2.amazonaws.com/images/logos/Front_Cover_Core.jpg')"}}>
                {
                    this.props.navbarLinks.map((link, index) => {
                        return (
                            <div className={`navbar__link ${link.active ? 'macmod-text' : ''}`} key={index} >
                                {
                                    link.isDropDown ? 
                                        <Dropdown as={ButtonGroup}>
                                            <Dropdown.Toggle variant="none" split href='#' className={` navbar__dropdown navbar__link ${link.active ? 'macmod-text' : ''}`}>{link.title}</Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {
                                                        link.dropdownItems.map(a => {
                                                            return (
                                                                <Col key={a._id}>
                                                                    <Row className='dropdown-items'>
                                                                        <Dropdown.Item  onClick={() => {this.handleOnClick(link);history.push(a.path)}}>{a.name}</Dropdown.Item>
                                                                    </Row>
                                                                </Col>
                                                            )
                                                        })
                                                    }
                                                </Dropdown.Menu>
                                        </Dropdown>
                                    : <a onClick={()=> {this.handleOnClick(link); history.push(link.path)}}>{link.title}</a>
                                }
                            </div>
                        )
                    })                    
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { navbarLinks, onClick } = state.headerNavbar
    return {
        navbarLinks,
        onClick
    }
}

Navbar = connect(mapStateToProps, actions)(Navbar)

export default Navbar;
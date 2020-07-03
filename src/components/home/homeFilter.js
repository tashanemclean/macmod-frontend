import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';

class HomeFilter extends Component {

    render() {
        const { className, options } = this.props
        return(
            <div className={`${className}__heading`}>
                <h3 className={`${className}__head-label`}>Find a Column or Search by Part Number</h3>
                <div className={`${className}`}>
                    {
                        options.options.map(a => {
                            return (
                                <Dropdown key={a._id}>
                                <div className='dropdown-label'>{a.dropdownlabel}</div>
                                    <Dropdown.Toggle>{a.dropdowntitle}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {a.dropdownitems.map((a,i) => {
                                            return (
                                                <Dropdown.Item key={i} >
                                                    {a}
                                                </Dropdown.Item>
                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { options } = state
    return { options }
}

HomeFilter = connect(mapStateToProps)(HomeFilter)

export default HomeFilter;
import React, { Component } from 'react';

class BulletsResource extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const resources = this.props.resource
        return(
            <div className='product-phase-table__ul-content-wrapper'>
                {
                    resources?.text !=null ? 
                    <ul>
                        {
                            Object.values(resources.text.split(/[\]/).splice(1,)).map((a,key) => {
                                return <li key={key}>{a}</li>
                            })
                        }
                    </ul>
                    : 
                    null
                }
            </div>
        )
    }
}

export default BulletsResource
import React, { Component } from 'react';

class ResourceHelper extends Component {

    render(){
        const { header,bulletpoints,page,tablehead,tablebody} = this.props;
        return (
            <div>
                <p>{header}</p>
                <strong>The general features of {page} include:</strong>
                <ul>
                    {
                        bulletpoints.map((bullets,key) => {
                            return <li key={key}>{bullets}</li>
                        })
                    }
                </ul>
                <strong>{page} phase specifications:</strong>
            </div>
        )
    }
}

export default ResourceHelper
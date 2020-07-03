import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';

class BrandsPhasePage extends Component {

    componentDidMount(){
        this.props.fetchPhasePage(this.props.match.params)
    }

    render(){

        const phasecontent = this.props.phasecontent
        const th = []
        for(var i in phasecontent[0]){
            th.push(i)
        }

        return (
            <Table>
                <thead>
                    <tr>
                        {
                            th.map((a,key) =>{
                                if(a === 'Phase Design') {
                                    return null
                                }
                                return <th key={key}>{a}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {

                        phasecontent?.map((content,i) => {
                            return (
                            <tr key={i}>
                                {Object.values(content).map((a,key) =>{
                                    if(a !== null){
                                        if (a.toString().includes('ACE')){
                                            return null
                                        }
                                    }
                                    if(a === 'Click Here') {
                                        return <td key={key}><a href="#">{a}</a></td>
                                    }
                                    if(a === 'Buy Now'){
                                        return <td key={key}><a href="#">{a}</a></td>
                                    }
                                    else {
                                        return <td key={key}><div href="#">{a}</div></td>
                                    }
                                })}
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        )
    }
};

function mapStateToProps(state){
    const phasecontent = state.phasecontent.phasecontent
    return { phasecontent }
};

BrandsPhasePage = connect(mapStateToProps,actions)(BrandsPhasePage);

export default BrandsPhasePage;
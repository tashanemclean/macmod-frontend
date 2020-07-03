import React, { Component } from 'react';
import {Accordion, Button, Card, Col, Form, Row} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import history from '../../history';

class ShopFilter extends Component {

    constructor() {
        super()

        this.state = {
            filtered: false,
            filtered_apply: false,
            filter_style: "outline-secondary"
        }

        this.handleFilter = this.handleFilter.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleClear = (e) =>{
        this.setState({ filter_style: "outline-secondary", filtered_apply: false })

        this.props.setShopFilter({})
        this.props.fetchShopProducts({})
    }

    handleFilter = (e) => {

        var obj = e.target
        var filterType = obj.getAttribute("data-filter")
        var filter = obj.options[obj.selectedIndex].innerHTML;
        console.log(filterType)

        var filters = this.props.filters;

        filters = {...filters, [filterType]:filter};

        if (filter === "All Products"){ delete filters.product}
        if (filter === "All Brands"){delete filters.brand}
        if (filter === "All Phases"){delete filters.phase}
        if (filter === "All Particle Sizes"){delete filters['particle-size']}
        if (filter === "All Pore Sizes"){delete filters['pore-size']}
        if (filter === "All Column IDs"){delete filters['column-id']}
        if (filter === "All Column Lengths"){delete filters['column-length']}

        this.props.setShopFilter(filters)
        this.handleUpdate(filters)

        this.setState({filter_style: "secondary"});

    }

    componentDidMount(){
        // this.props.fetchFilterLists()
        this.props.fetchShopProducts({});
    }

    handleUpdate = (e) => {
        // variable to keep track if component needs to redirect current page to view filtered selections
        const redirect = this.props.redirect;

        this.setState({filtered_apply: true});

        this.props.fetchShopProducts({filters: e});
        
        if(redirect) {
            return history.push('/shop')
        }

    }

    // handleClear = () =>{
    //     this.setState({filtered_apply: false});
    //     this.props.fetchShopProducts({})
    // }

    render() {
        const filters = this.props.filtersLists;
        return (
            <div className='shop__filter'>
                <Accordion>
                    <div>
                        <Card className="shop__filter_container">
                            <Row className="shop__filter_header">
                                <Col md={{span:4}}>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                                        <h4>Find a Column & Part Number </h4>   
                                    </Accordion.Toggle>
                                </Col>
                                <Col md={{span:3, offset:4}} className="text-right">
                                    <Button type="button" variant={this.state.filter_style} onClick={this.handleClear}>
                                        <i className="fas fa-filter"></i>
                                    </Button>
                                </Col>
                            </Row>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="shop__filter_label">Products: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.product || ''} name="product" className="shop__filter_control" data-filter="product" onChange={this.handleFilter}>
                                                {
                                                    filters.length === 0 ? null:
                                                    [
                                                        <option key={0} value="">All Products</option>,
                                                        Object.keys(filters.ProductTypes).map((reg, i) => (
                                                            <option key={i} value={filters.ProductTypes[reg]}>{filters.ProductTypes[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="shop__filter_label">Pore Size: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.hasOwnProperty('pore-size') ? filters?.SelectedFilters['pore-size'] : ''} className="shop__filter_control" name="pore-size" data-filter="pore-size" onChange={this.handleFilter}>
                                                {
                                                    filters.length === 0 ? null:
                                                    [
                                                        <option key={0} value="">All Pore Sizes</option>,
                                                        Object.keys(filters.PoreSizes).map((reg, i) => (
                                                            <option key={i} value={filters.PoreSizes[reg]}>{filters.PoreSizes[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="shop__filter_label">Brand: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.brand || ''} className="shop__filter_control" name="brand" data-filter="brand" onChange={this.handleFilter}>
                                                {
                                                    filters.length === 0 ? null:
                                                    [
                                                        <option key={0} value="">All Brands</option>,
                                                        Object.keys(filters.Brands).map((reg, i) => (
                                                            <option key={i} value={filters.Brands[reg]}>{filters.Brands[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="shop__filter_label">Column Id: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.hasOwnProperty('column-id') ? filters?.SelectedFilters['column-id'] : ''} className="shop__filter_control" name="column-id" data-filter="column-id" onChange={this.handleFilter}>
                                                {
                                                    filters.length === 0 ? null:
                                                    [
                                                        <option key={0} value="">All Column IDs</option>,
                                                        Object.keys(filters.ColumnIds).map((reg, i) => (
                                                            <option key={i} value={filters.ColumnIds[reg]}>{filters.ColumnIds[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="shop__filter_label">Phase: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.phase || ''} className="shop__filter_control" name="phase" data-filter="phase" onChange={this.handleFilter}>
                                                {
                                                    filters.length === 0 ? null:
                                                    [
                                                        <option key={0} value="">All Phases</option>,
                                                        Object.keys(filters.Phases).map((reg, i) => (
                                                            <option key={i} value={filters.Phases[reg]}>{filters.Phases[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="shop__filter_label" >Column Length: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.hasOwnProperty('column-length') ? filters?.SelectedFilters['column-length'] : ''} className="shop__filter_control" name="column-length" data-filter="column-length" onChange={this.handleFilter}>
                                                {
                                                    filters.length === 0 ? null:
                                                    [
                                                        <option key={0} value="">All Column Lengths</option>,
                                                        Object.keys(filters.ColumnLength).map((reg, i) => (
                                                            <option key={i} value={filters.ColumnLength[reg]}>{filters.ColumnLength[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={2} className="shop__filter_label">Particle Size: </Form.Label>
                                        <Col sm={2}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.hasOwnProperty('particle-size') ? filters?.SelectedFilters['particle-size'] : ''} className="shop__filter_control" name="particle-size" data-filter="particle-size" onChange={this.handleFilter}>
                                                {
                                                    filters.length === 0 ? null:
                                                    [
                                                        <option key={0} value="">All Particle Sizes</option>,
                                                        Object.keys(filters.ParticleSizes).map((reg, i) => (
                                                            <option key={i} value={filters.ParticleSizes[reg]}>{filters.ParticleSizes[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </div>
                </Accordion>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { options, filtersLists, filters } = state.options
    return { options, filtersLists, filters }
}

ShopFilter = connect(mapStateToProps,actions)(ShopFilter)

export default ShopFilter;
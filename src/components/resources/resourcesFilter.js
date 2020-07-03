import React, { Component } from 'react';
import {Accordion, Button, Card, Col, Form, Row} from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ResourcesFilter extends Component {

    constructor() {
        super()

        this.state = {
            filter_style: "outline-secondary"
        }

        this.handleFilter = this.handleFilter.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleClear = (e) =>{
        this.setState({filter_style: "outline-secondary"})

        this.props.onClear()
    }

    handleFilter = (e) => {

        var obj = e.target
        var filterType = obj.getAttribute("data-filter")
        var filter = obj.options[obj.selectedIndex].innerHTML;

        var filters = this.props.resourcesFilters;

        filters = {...filters, [filterType]:filter};

        if (filter === "All Brands"){ delete filters.Brand}
        if (filter === "All Formats"){delete filters.Format_Note}
        if (filter === "All Industries"){delete filters.Industry}
        if (filter === "All Instrument Type"){delete filters.Instrument_Type}
        if (filter === "All LC Modes"){delete filters.Lc_Mode}
        if (filter === "All Numbers"){delete filters.Number}
        if (filter === "All Titles"){delete filters.Title}
        if (filter === "All Topics"){delete filters.Topic}
        if (filter === "All Conferences"){delete filters.Conference}
        if (filter === "All Years"){delete filters.Year}

        this.props.setResourcesFilter(filters)
        this.props.onChangeFilter(filters)

        this.setState({filter_style: "secondary"});

    }

    componentDidMount(){
        
        this.props.fetchFilterResourcesLists()
        
    }

    render() {

        const filters = this.props.filtersResourcesLists;
        const path = this.props.resourcePath;

        console.log(filters)

        if (!['Technical Notes', 'Webinars', 'Posters and Presentations'].includes(path)){
            return null
        }else{
        return (
            <div className='resources__filter'>
                <Accordion>
                    <div>
                        <Card className="resources__filter_container">
                            <Row className="resources__filter_header">
                                <Col md={{span:4}}>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                                        <h4>{path} Filters </h4>   
                                    </Accordion.Toggle>
                                </Col>
                                <Col md={{span:3, offset:4}} className="text-right">
                                    <Button type="button" variant={this.state.filter_style} onClick={this.handleClear}>
                                        <i className="fas fa-filter"></i>
                                    </Button>
                                </Col>
                            </Row>
                            {path == 'Technical Notes' ? 
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="resources__filter_label">Format: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Format_Note || ''} name="format_note" className="resources__filter_control" data-filter="Format_Note" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' || typeof filters?.Format_Note == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Formats</option>,
                                                        Object.keys(filters.Format_Note).map((reg, i) => (
                                                            <option key={i} value={filters.Format_Note[reg]}>{filters.Format_Note[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="resources__filter_label">Industries: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Industry || ''} className="resources__filter_control" name="Industry" data-filter="Industry" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Industries</option>,
                                                        Object.keys(filters.Industry).map((reg, i) => (
                                                            <option key={i} value={filters.Industry[reg]}>{filters.Industry[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="resources__filter_label">Brand: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Brand || ''} className="resources__filter_control" name="Brand" data-filter="Brand" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Brands</option>,
                                                        Object.keys(filters.Brand).map((reg, i) => (
                                                            <option key={i} value={filters.Brand[reg]}>{filters.Brand[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="resources__filter_label">Instrument Type: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Instrument_Type || ''} className="resources__filter_control" name="Instrument_Type" data-filter="Instrument_Type" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Instrument Type</option>,
                                                        Object.keys(filters.Instrument_Type).map((reg, i) => (
                                                            <option key={i} value={filters.Instrument_Type[reg]}>{filters.Instrument_Type[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="resources__filter_label">LC Mode: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Lc_Mode || ''} className="resources__filter_control" name="Lc_Mode" data-filter="Lc_Mode" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All LC Modes</option>,
                                                        Object.keys(filters.Lc_Mode).map((reg, i) => (
                                                            <option key={i} value={filters.Lc_Mode[reg]}>{filters.Lc_Mode[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="resources__filter_label" >Number: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Number || ''} className="resources__filter_control" name="Number" data-filter="Number" onChange={this.handleFilter}>
                                                {console.log(filters?.Number)}
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' || typeof filters?.Number == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Numbers</option>,
                                                        Object.keys(filters.Number).map((reg, i) => (
                                                            <option key={i} value={filters.Number[reg]}>{filters.Number[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="resources__filter_label">Title: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Title || ''} className="resources__filter_control" name="Title" data-filter="Title" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Titles</option>,
                                                        Object.keys(filters.Title).map((reg, i) => (
                                                            <option key={i} value={filters.Title[reg]}>{filters.Title[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="resources__filter_label">Topic: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Topic || ''} className="resources__filter_control" name="Topic" data-filter="Topic" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' || typeof filters?.Topic == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Topics</option>,
                                                        Object.keys(filters.Topic).map((reg, i) => (
                                                            <option key={i} value={filters.Topic[reg]}>{filters.Topic[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Card.Body>
                            </Accordion.Collapse>
                                : null}
                            {path == 'Webinars' ? 
                                <Accordion.Collapse>
                                    <Card.Body>
                                    <Form.Group as={Row}>
                                    <   Form.Label column sm={1} className="resources__filter_label">Title: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Title || ''} className="resources__filter_control" name="Title" data-filter="Title" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Titles</option>,
                                                        Object.keys(filters.Title).map((reg, i) => (
                                                            <option key={i} value={filters.Title[reg]}>{filters.Title[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="resources__filter_label">Industries: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Industry || ''} className="resources__filter_control" name="Industry" data-filter="Industry" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Industries</option>,
                                                        Object.keys(filters.Industry).map((reg, i) => (
                                                            <option key={i} value={filters.Industry[reg]}>{filters.Industry[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="resources__filter_label">Brand: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Brand || ''} className="resources__filter_control" name="Brand" data-filter="Brand" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Brands</option>,
                                                        Object.keys(filters.Brand).map((reg, i) => (
                                                            <option key={i} value={filters.Brand[reg]}>{filters.Brand[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="resources__filter_label">Instrument Type: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Instrument_Type || ''} className="resources__filter_control" name="Instrument_Type" data-filter="Instrument_Type" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Instrument Type</option>,
                                                        Object.keys(filters.Instrument_Type).map((reg, i) => (
                                                            <option key={i} value={filters.Instrument_Type[reg]}>{filters.Instrument_Type[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="resources__filter_label">LC Mode: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Lc_Mode || ''} className="resources__filter_control" name="Lc_Mode" data-filter="Lc_Mode" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All LC Modes</option>,
                                                        Object.keys(filters.Lc_Mode).map((reg, i) => (
                                                            <option key={i} value={filters.Lc_Mode[reg]}>{filters.Lc_Mode[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="resources__filter_label">Topic: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Topic || ''} className="resources__filter_control" name="Topic" data-filter="Topic" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Topics</option>,
                                                        Object.keys(filters.Topic).map((reg, i) => (
                                                            <option key={i} value={filters.Topic[reg]}>{filters.Topic[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Card.Body>
                            </Accordion.Collapse>
                                : null}

                            {path == 'Posters and Presentations' ? 
                                <Accordion.Collapse>
                                    <Card.Body>
                                    <Form.Group as={Row}>
                                    <Form.Label column sm={1} className="resources__filter_label">Title: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Title || ''} className="resources__filter_control" name="Title" data-filter="Title" onChange={this.handleFilter}>
                                                {console.log(filters)}
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Titles</option>,
                                                        Object.keys(filters.Title).map((reg, i) => (
                                                            <option key={i} value={filters.Title[reg]}>{filters.Title[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="resources__filter_label">Industries: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Industry || ''} className="resources__filter_control" name="Industry" data-filter="Industry" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Industries</option>,
                                                        Object.keys(filters.Industry).map((reg, i) => (
                                                            <option key={i} value={filters.Industry[reg]}>{filters.Industry[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="resources__filter_label">Brand: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Brand || ''} className="resources__filter_control" name="Brand" data-filter="Brand" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Brands</option>,
                                                        Object.keys(filters.Brand).map((reg, i) => (
                                                            <option key={i} value={filters.Brand[reg]}>{filters.Brand[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="resources__filter_label">Instrument Type: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Instrument_Type || ''} className="resources__filter_control" name="Instrument_Type" data-filter="Instrument_Type" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Instrument Type</option>,
                                                        Object.keys(filters.Instrument_Type).map((reg, i) => (
                                                            <option key={i} value={filters.Instrument_Type[reg]}>{filters.Instrument_Type[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="resources__filter_label">LC Mode: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Lc_Mode || ''} className="resources__filter_control" name="Lc_Mode" data-filter="Lc_Mode" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All LC Modes</option>,
                                                        Object.keys(filters.Lc_Mode).map((reg, i) => (
                                                            <option key={i} value={filters.Lc_Mode[reg]}>{filters.Lc_Mode[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Form.Label column sm={{span: 2, offset: 1}} className="resources__filter_label">Year: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Year || ''} className="resources__filter_control" name="Year" data-filter="Year" onChange={this.handleFilter}>
                                                {console.log(filters?.Year)}
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' || typeof filters?.Year == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Years</option>,
                                                        Object.keys(filters?.Year).map((reg, i) => (
                                                            <option key={i} value={filters.Year[reg]}>{filters.Year[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={1} className="resources__filter_label">Conference: </Form.Label>
                                        <Col sm={3}>
                                            <Form.Control as="select" value={filters?.SelectedFilters?.Conference || ''} className="resources__filter_control" name="Conference" data-filter="Conference" onChange={this.handleFilter}>
                                                {
                                                    filters?.length === 0 || typeof filters == 'undefined' || typeof filters?.Conference == 'undefined' ? null:
                                                    [
                                                        <option key={0} value="">All Conferences</option>,
                                                        Object.keys(filters.Conference).map((reg, i) => (
                                                            <option key={i} value={filters.Conference[reg]}>{filters.Conference[reg]}</option>
                                                        ))
                                                    ]
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Card.Body>
                            </Accordion.Collapse>
                            : null}
                        </Card>
                    </div>
                </Accordion>
            </div>
        )
        }
    }
}

function mapStateToProps(state) {
    const { 
        options, 
        filtersResourcesLists, 
        resourcesFilters 
    } = state.options
    
    return { 
        options, 
        filtersResourcesLists, 
        resourcesFilters
    }
}

ResourcesFilter = connect(mapStateToProps,actions)(ResourcesFilter)

export default ResourcesFilter;
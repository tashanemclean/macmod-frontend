import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Document, Page, pdfjs } from 'react-pdf';

import ResourcesHelper from './resourcesHelper';
import ShowVideo from 'components/showVideo';

import ResourcesFilter from './resourcesFilter';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResourcesDetail extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            numPages: null,
            pageNumber: 1,
            resources: [],
            filtered_apply: false,
            filters: null
        }
    }

    handleClear = () =>{
        this.setState({filtered_apply: false, filters: null});
        if(this.props.path === 'Posters and Presentations'){
            this.props.fetchPostersPresentions({})
        }else{
            this.props.fetchResourcesFilesInfo(this.props.path, {})
        }
    }

    handleUpdate = (e) => {
        this.setState({filtered_apply: true});
        console.log(e)
        if(this.props.path === 'Posters and Presentations'){
            this.props.fetchPostersPresentions(e)
        }else{
            this.props.fetchResourcesFilesInfo(this.props.path, e);
        }

    }

    componentDidMount(){
        console.log(this.props.path)
        if(this.props.path === 'Posters and Presentations'){
            this.props.fetchPostersPresentions({})
        }else{
            this.props.fetchResourcesFilesInfo(this.props.path);
        }

    }

    render(){

        const { pageNumber, numPages } = this.state;
        const { resourcedetails, posterspresentations } = this.props;
        const filters = this.props.filtersResourcesLists;

        return (
            <div className='resources'>
                <ResourcesFilter 
                    resourcePath={this.props.path} 
                    onChangeFilter={this.handleUpdate } 
                    onClear={this.handleClear}
                />
                {this.props.path === 'Applications'? 
                <div>
                    <Table>
                        <thead>
                            <tr>
                                {
                                    this.props.resources.th[0] ? (
                                        this.props.resources.th[0].map((a,key) => {
                                            return <th key={key}>{a}</th>
                                        })
                                    ) :
                                    null
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.resources.obj.map((content,i)=> {
                                    return (
                                        <tr key={i}>
                                            {
                                                Object.values(content).map((a,key)=> {
                                                    if(this.props.resources.th[0][key] === "Title") {
                                                        return <td 
                                                            key={key}>
                                                            <a 
                                                            href={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${a.filename}`}
                                                            target="_blank">{a}
                                                            </a>
                                                            </td>
                                                    }
                                                    else {
                                                        return <td key={key}>{a}</td>
                                                    }
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                :
                this.props.path === 'Application Guides'?
                <div className='resources-guides'>
                    {resourcedetails.map((a,key) => {
                        return <div key={key} className='resources-guides__preview'>
                            {a.filename.replace('.pdf','')}
                            <div className='resources-guides__preview__img'>
                                <Document
                                file={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${a.filename}`}
                                onLoadSuccess={this.onDocumentLoadSuccess}
                                >
                                    <Page pageNumber={pageNumber} scale={0.2} />
                                </Document>
                            </div>
                            <Button 
                            size='sm'
                            href={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${a.filename}`} 
                            target="_blank">
                            VIEW</Button>
                        </div>
                    })}
                </div>
                :
                this.props.path === 'Webinars'?
                <ShowVideo filtered={this.state.filtered_apply} titles={filters?.Title}/>
                :
                this.props.path === 'Technical Notes'?
                <div className='resources-guides'>
                    {resourcedetails.map((a,key) => {

                        if (this.state.filtered_apply === true && !filters.Title.includes(a.filename.split('.').slice(0, -1).join('.')) ){
                            return false;
                        }

                        return <div key={key} className='resources-guides__preview'>
                            <div className='resources-guides__preview__img'>
                                <Document
                                file={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${a.filename}`}
                                onLoadSuccess={this.onDocumentLoadSuccess}
                                >
                                    <Page pageNumber={pageNumber} scale={0.2} />
                                </Document>
                            </div>
                            <Button 
                            size='sm'
                            href={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${a.filename}`} 
                            target="_blank">
                            VIEW</Button>
                        </div>
                    })}
                </div>
                :
                this.props.path === 'Product Bulletins'?
                <div className='resources-guides'>
                    {resourcedetails.map((a,key) => {
                        return <div key={key} className='resources-guides__preview'>
                            <div className='resources-guides__preview__img'>
                                <Document
                                file={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${a.filename}`}
                                onLoadSuccess={this.onDocumentLoadSuccess}
                                >
                                    <Page pageNumber={pageNumber} scale={0.2} />
                                </Document>
                            </div>
                            <Button 
                            size='sm'
                            href={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${a.filename}`}
                            target="_blank">
                            VIEW</Button>
                        </div>
                    })}
                </div>
                :
                this.props.path === 'Chromatographic Tools'?
                <div className='chromatographic-tools'>
                    <div className='resources-details'>
                        <div className='resources-details__header-msg'>
                            <h3>LC Method Transfer and Translation Made Simple</h3>
                        </div>
                        <div>
                            <div>
                                <p>A universal tool to simplify and streamline LC method transfer and LC method translation including:</p>
                                <ul>
                                    <li>Mobile phase consumption calculator</li>
                                    <li>Column equilibration calculator</li>
                                    <li>Determination of system well volume</li>
                                    <li>Column porosity and buffer composition calculators</li>
                                </ul>
                                <p>Also includes details of available LC knowledge and application notes.</p>
                                <div className='tool-wrapper'>
                                    <Button>Download Tools</Button>
                                    <Button>Download Instructions</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                this.props.path === 'Lab Notes'?
                    <div className='resources-guides'>
                        {resourcedetails.map((a,key) => {
                            return <div key={key} className='resources-guides__preview'>
                                {a.filename.replace('.pdf','')}
                                <div className='resources-guides__preview__img'>
                                    <Document
                                    file={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${a.filename}`}
                                    onLoadSuccess={this.onDocumentLoadSuccess}
                                    >
                                        <Page pageNumber={pageNumber} scale={0.2} />
                                    </Document>
                                </div>
                                <Button 
                                size='sm'
                                href={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${a.filename}`} 
                                target="_blank">
                                VIEW</Button>
                            </div>
                        })}
                    </div>
                :
                this.props.path === 'Posters and Presentations'?
                <div className='resources-guides'>
                    <Table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Conference</th>
                                <th>Brand</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posterspresentations.map((resource,key) => {
                                return <tr key={key}>
                                    <td><a href={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${resource.title}.pdf/Posters and Presentations`} target="_blank">{resource.title}</a></td>
                                    <td>{resource.year}</td>
                                    <td>{resource.conference}</td>
                                    <td>{resource.brand}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </div>
                :
                this.props.path === 'home end'?
                    resourcedetails.map((resource,key) => {
                        return <div key={key} className='resources-guides__preview'>
                            <div className='home-end__resources__pdf__image'>
                                <Document
                                file={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${resource.filename}`}
                                onLoadSuccess={this.onDocumentLoadSuccess}
                                >
                                    <Page pageNumber={pageNumber} scale={0.2} />
                                </Document>
                            </div>
                            <Button 
                            size='sm'
                            href={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${resource.filename}`} 
                            target="_blank">
                            VIEW</Button>
                        </div>
                    })
                :
                this.props.path === 'Industry'?
                <ResourcesHelper />
                :
                null} 
            </div>                  
        )
    }
}

function mapStateToProps(state){
    const { resourcedetails,posterspresentations } = state.resources
    const { filtersResourcesLists } = state.options
    return { resourcedetails,posterspresentations, filtersResourcesLists }


}

ResourcesDetail = connect(mapStateToProps,actions)(ResourcesDetail)

export default ResourcesDetail;
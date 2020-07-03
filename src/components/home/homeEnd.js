import React , { Component } from 'react'; 
import { connect } from 'react-redux';
import * as actions from '../../actions';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ResourcesDetail from '../resources/resourcesDetail';
import history from '../../history';

class HomeEnd extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchLabNotes('Lab Notes',3)
        this.props.fetchResourcesDetails('Product Bulletins',3)
    }

    render() {
        const resourcedetails = this.props.resourcedetails
        const color = ['#65cdca', '#885eb7', '#e2ebf2']
        return(
            <div className='container'>
                <div className='home-end'>
                    <div className='home-end__labnotes'>
                        <div className='home-end__labnotes__title'>
                            <h2>HPLC Lab Notes</h2>
                            <p className='view' onClick={() => history.push('/resources/content/Lab Notes')}>View All</p>
                        </div>
                        <div className='home-end__labnotes__line'></div>
                        {
                            this.props.labnotes.map((resource,key) => {
                                return <div key={key} className='home-end__notes' style={{ borderLeft: `5px solid ${color[key]}`, margin: '5px'}}>
                                    <div className='home-end__notes__date' >
                                        {new Date(resource.uploadDate['$date']).toString()}
                                    </div>
                                    <div className='home-end__notes__note'>
                                        <a href={`${process.env.REACT_APP_BACKEND_API}/applicationguides/download/${resource.filename}`} target='_blank' style={{color: '#000000', textDecoration: 'none'}}>{resource.filename.replace('.html','')}</a>
                                    </div>
                                    <div className='home-end__notes__pdf' >
                                        {/* {note.body} */}
                                    </div>
                                </div>
                            })
                        }
                        <div className='home-end__labnotes__subscribe'>
                            <h2>Subscribe to HPLC LabNotes</h2>
                            <label htmlFor='email'>Receive helpful hints and practical advice on HPLC delivered right to your inbox</label>
                            <InputGroup size='sm' style={{width: '400px'}}>
                                <FormControl
                                    id='email'
                                    placeholder='Email'
                                    aria-label='Email'
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button>SUBSCRIBE</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                    </div>
                    <div className='home-end__resources'>
                        <div className='home-end__resources__title'>
                            <h2 >Featured Resources</h2>
                            <p className='view' onClick={() => history.push('/resources/content/Product Bulletins')}>View All</p>
                        </div>
                        <div className='home-end__resources__line'></div>
                        <div className='home-end__resources__pdf'>
                            <ResourcesDetail path='home end' resources={resourcedetails} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { resourcedetails } = state.resources
    const { labnotes } = state.page
    return { labnotes,resourcedetails }
}

HomeEnd = connect(mapStateToProps,actions)(HomeEnd)

export default HomeEnd;
import {
    SET_HOME_PDF,
    SET_RESOURCES,
    SET_LAB_NOTES,
    SET_PAGE_CSV,
    SET_HOME_EVENTS_RESOURCES
} from './types';

export function setLabNotes(result) {
    return ({
        type: SET_LAB_NOTES,
        payload: result
    })
}

export function fetchPageCSV() {
    return ({
        type: SET_PAGE_CSV,
        payload: [
            {
                _id: 0,
                title: 'feature csv',
                csv: 'random csv data'
            },
            {
                _id: 1,
                title: 'featured csv',
                csv: 'random csv data'
            },
            {
                _id: 2,
                title: 'featured csv data',
                csv: 'random csv data'
            }
        ]
    })
}

export function fetchLabNotes(resource,num){
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/applicationguides/`+num, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resource)
        })
        .then(res => res.json())
        .then((result) => {
            if(result.length !== 0){
                dispatch(setLabNotes(result))
            }
        },
        (error) => {
            console.log(error)
        })
    }
}


export function fetchHomeResources(){
    return ({
        type: SET_RESOURCES,
        payload:[
            {
                _id: 0,
                resources: {
                    label: 'Videos / Webinars',
                    sub: 'View our video resources and helpful webinars'
                },
                path: '/resources/content/Webinars'
            },
            {
                _id: 1,
                resources: {
                    label: 'Applications',
                    sub: 'Download applications and analytes PDFs'
                },
                path: '/resources/content/Applications'
            },
            {
                _id: 2,
                resources: {
                    label: 'Posters & Presentations',
                    sub: 'Download posters and presentations from various conferences'
                },
                path: '/resources/content/Posters%20and%20Presentations'
            }
        ]
    })
}

export function fetchFeaturedHomeResources() {
    return ({
        type: SET_HOME_EVENTS_RESOURCES,
        payload: [
            {
                _id: 0,
                resources: {
                    label: 'EVENTS',
                    sub: 'Download posters and presentations from various conferences'
                }
            },
            {
                _id: 1,
                resources: {
                    label: 'Applications',
                    sub: 'Download posters and presentations from various conferences'
                }
            },
            {
                _id: 2,
                resources: {
                    label: 'Posters & Presentations',
                    sub: 'Download posters and presentations from various conferences'
                }
            }
        ]
    })
}

export function fetchHomePDF() {
    return ({
        type: SET_HOME_PDF,
        payload: [
            {
                _id: 0,
                pdf: {
                    _id: 0,
                    title: 'test pdf 1',
                    pdf: "123324"
                }
            },
            {
                _id: 1,
                pdf: {
                    _id: 1,
                    title: 'test pdf 1',
                    pdf: "123324"
                }
            },
            {
                _id: 2,
                pdf: {
                    _id: 2,
                    title: 'test pdf 1',
                    pdf: "123324"
                }
            }
        ]
    })
}
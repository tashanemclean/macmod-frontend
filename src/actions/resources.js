import {
    FETCH_RESOURCES,
    FETCH_RESOURCES_CONTENT,
    SET_RESOURCE_DETAILS,
    SET_POSTER_PRESENTATIONS,
    FETCH_RESOURCES_FILTER_LIST,
    SET_RESOURCES_APPLY_FILTER,
} from './types';

export function setResourcesFilter(resourcesFilters){
    return ({
        type: SET_RESOURCES_APPLY_FILTER,
        payload: resourcesFilters
    })
}

export function fetchFilterResourcesLists(lists){
    return ({
        type: FETCH_RESOURCES_FILTER_LIST,
        payload: lists
    })
}

export function setResourceDetails(resource){
    return ({
        type: SET_RESOURCE_DETAILS,
        payload: resource
    })
}

export function setPostersAndPresentaionns(resource){
    return ({
        type: SET_POSTER_PRESENTATIONS,
        payload: resource
    })
}

export function setResources(resources){
    return ({
        type: FETCH_RESOURCES_CONTENT,
        payload: resources
    })
}

export function fetchResourcesContent() {
    return ({
        type: FETCH_RESOURCES,
        payload: [
            {
                _id: 0,
                name: 'APPLICATIONS',
                path: '/resources/content/Applications'
            },
            {
                _id: 1,
                name: 'APPLICATION GUIDES',
                path: '/resources/content/Application Guides'
            },
            {
                _id: 2,
                name: 'PRODUCT BULLETINS',
                path: '/resources/content/Product Bulletins'
            },
            {
                _id: 3,
                name: 'TECHNICAL NOTES',
                path: '/resources/content/Technical Report'
            },
            {
                _id: 4,
                name: 'VIDEOS / WEBINARS',
                path: '/resources/content/Webinars'
            },
            {
                _id: 5,
                name: 'POSTERS AND PRESENTATIONS',
                path: '/resources/content/Posters And Presentations'
            },
            {
                _id: 6,
                name: 'CHROMATOGRAPHIC TOOLS',
                path: '/resources/content/Chromatographic Tools'
            },
            {
                _id: 7,
                name: 'LABNOTES',
                path: '/resources/content/Lab Notes'
            },
        ]
    })
}

export function fetchResources(resource){
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/applications`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resource)
        })
        .then(res => res.json())
        .then((result) =>{
            if(result.length !== 0){
                dispatch(setResources(result))
            }
        },
        (error) => {
            console.log(error)
        })
    }
}

export function fetchResourcesDetails(resource,num){
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
                dispatch(setResourceDetails(result))
            }
        },
        (error) => {
            console.log(error)
        })
    }
}

export function fetchPostersPresentions(filters={}){
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/posterspresentations`,
         {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({filters})
        })
        .then(res => res.json())
        .then((result) => {
            if(result.values.length !== 0) {
                dispatch(fetchFilterResourcesLists(result.filters))
                dispatch(setPostersAndPresentaionns(result.values))
            }
        },
        (error)=> {
            console.log(error)
        })
    }
}

export function fetchResourcesFilesInfo(resource, filters) {

    var route = "";

    if (resource == "Technical Notes"){
        route = "notes"
    }else if (resource == "Webinars"){
        route = "webinar"
    }

    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/${route}/`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({resource, filters})
            })
        .then(res => res.json())
        .then((result) => {
            // dispatch(setShopProducts(result.products))
            // console.log(result);
            dispatch(fetchFilterResourcesLists(result.filters))
        },
        (error)=> {
            console.log(error)
        })
    }
}
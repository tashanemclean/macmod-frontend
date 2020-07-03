import {
    FETCH_RESOURCES,
    FETCH_RESOURCES_CONTENT,
    SET_RESOURCE_DETAILS,
    SET_POSTER_PRESENTATIONS
} from '../actions/types'

const INITIAL_STATE = {
    resources: [],
    resourcespdf: [],
    resourcedetails: [],
    posterspresentations: []
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case SET_RESOURCE_DETAILS:
            const resourcedetails = action.payload
            resourcedetails.map((resource,key) => {
                delete resourcedetails[key]._id
            })
            return {
                ...state,
                resourcedetails
            }
        case FETCH_RESOURCES:
            const resources = action.payload
            return {
                ...state,
                resources
            }
        case FETCH_RESOURCES_CONTENT:
            const resourcespdf = action.payload;
            // bad logic, needs to be updated in future
            resourcespdf.map((resource,key) => {
                delete resourcespdf[key]._id
            })
            return {
                ...state,
                resourcespdf
            }
        case SET_POSTER_PRESENTATIONS:
            const posterspresentations = action.payload
            return {
                ...state,
                posterspresentations
            }
        default: return state
    }
}
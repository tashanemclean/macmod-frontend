import {
    FETCH_CONTACTS,
    FETCH_CONTACT_DETAILS
} from '../actions/types'

const INITIAL_STATE = {
    contacts: [],
    contactdetails: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_CONTACTS:
        const contacts = action.payload
            return {
                ...state,
                contacts
            }
        case FETCH_CONTACT_DETAILS: 
        const contactdetails = action.payload
            return {
                ...state,
                contactdetails
            }
        default: return state
    }
}


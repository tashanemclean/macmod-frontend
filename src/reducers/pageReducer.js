import {
    SET_HOME_PDF,
    SET_RESOURCES,
    SET_LAB_NOTES,
    SET_PAGE_CSV,
    SET_HOME_EVENTS_RESOURCES
} from '../actions/types'

const INITIAL_STATE = {
    csv: [],
    pdf: {},
    resources: [],
    labnotes: [],
    eventsresources: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_PAGE_CSV:
            const csv = action.payload;
            return {
                ...state,
                csv
            }
        case SET_HOME_PDF:
            const pdf = action.payload;
            return {
                ...state,
                pdf
            }
        case SET_RESOURCES: 
            const resources = action.payload;
                return {
                    ...state,
                    resources
                }
        case SET_LAB_NOTES:
                const labnotes = action.payload;
                return {
                    ...state,
                    labnotes
                }
        case SET_HOME_EVENTS_RESOURCES:
                const eventsresources = action.payload;
                return {
                    ...state,
                    eventsresources
                }
        default: return state
    }
}
import {
    SET_SUB_NAV_CATEGORIES,
    SET_SUB_HEADER_LINKS,
    SET_SUB_NAV_LINKS,
    CHANGE_SUB_NAV_ACTIVE
} from '../actions/types';

const INITIAL_STATE = {
    subHeaderLinks: [],
    subNavCategories: [],
    subNavLinks: [],
    onClick: ''
}

export default function(state = INITIAL_STATE, action ) {
    switch(action.type) {
        case SET_SUB_HEADER_LINKS:
            return {
                ...state,
                subHeaderLinks: action.payload
            }

        case SET_SUB_NAV_LINKS:
            const { links, onClick } = action.payload 
                return {
                    ...state,
                    subNavLinks: links,
                    onClick: onClick
                }
        case SET_SUB_NAV_CATEGORIES: 
            const subNavCategories = action.payload;
                return {
                    ...state,
                    subNavCategories
                }
        case CHANGE_SUB_NAV_ACTIVE:
            const subNavLinks = state.subNavLinks.map(link => {
                link.active = false
                if (link._id == action.payload) {
                    link.active = true
                }
                return link
            })
            return {
                ...state,
                subNavLinks
            }
        default: return state;
    }
}
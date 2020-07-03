import {
    FETCH_PROMOTIONS
} from '../actions/types';

const INITIAL_STATE = {
    promotions: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_PROMOTIONS:
            const promotions = action.payload
            return {
                ...state,
                promotions
            }
        default: return state
    }
}
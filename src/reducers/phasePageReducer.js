import {
    SET_PHASE_PAGE_CONTENT
} from '../actions/types';

const INITIAL_STATE = {
    phasecontent: []
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case SET_PHASE_PAGE_CONTENT:
            const phasecontent = action.payload
            phasecontent.map((a,key) => {
                delete phasecontent[key]._id
            })
            return {
                ...state,
                phasecontent
            }
        default: return state
    }
}
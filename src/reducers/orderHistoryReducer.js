import {
    SET_RECENT_ORDERS,
    SET_ORDER_PLACED,
    SET_ORDERED_ITEMS
} from '../actions/types';

const INTIAL_STATE = {
    orders: [],
    orderconfirmation: '',
    ordereditems: []
}

export default function(state = INTIAL_STATE, action) {
    switch (action.type) {
        case SET_RECENT_ORDERS:
            const orders = action.payload
            return {
                ...state,
                orders
            }
        
        case SET_ORDER_PLACED: 
            const orderconfirmation = action.payload
            return {
                ...state,
                orderconfirmation
            }

        case SET_ORDERED_ITEMS:
            const ordereditems = action.payload
            return {
                ...state,
                ordereditems
            }
            
        default: return state
    }
}
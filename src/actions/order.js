import {
    SET_ORDER_PLACED,
    SET_RECENT_ORDERS,
    SET_ORDERED_ITEMS
} from './types';

export function setOrderedItems(items){
    return ({
        type: SET_ORDERED_ITEMS,
        payload: items
    })
}

export function setRecentOrders(orders){
    return ({
        type: SET_RECENT_ORDERS,
        payload: orders
    })
}

export function setOrderConfirmation(orderId) {
    return ({
        type: SET_ORDER_PLACED,
        payload: orderId
    })
}

export function fetchOrderPlaced(order){
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/order`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            }
        )
        .then(res => res.json())
        .then((result) => {
            dispatch(setOrderConfirmation(result))
        },
        (error)=> {
            console.log(error)
        })
    }
}

export function fetchRecentOrders(){
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/orderhistory`)
        .then(res => res.json())
        .then((result) => {
            dispatch(setRecentOrders(result))
        },
        (error)=> {
            console.log(error)
        })
    }
}

export function fetchOrderedItems(items) {
    return (dispatch) => {
    fetch(`${process.env.REACT_APP_BACKEND_API}/orderitems`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)
        })
        .then(res => res.json())
        .then((result) => {
            dispatch(setOrderedItems(result.result))
        },
        (error)=> {
            console.log(error)
        })
        }
}
import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    DELETE_CART_PRODUCT,
    AUTHENTICATE_USER
} from "../actions/types"

const INITIAL_STATE = {
    user: {},
    cartProducts: [],
    purchases: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type){
        case AUTHENTICATE_USER:
            const { user } = action.payload;
            return {
                ...state,
                user
            }
        case DELETE_CART_PRODUCT:

            const toDelete = action.payload;

            state.cartProducts.splice(toDelete, 1);

            return {
                ...state
            }
            
        case ADD_CART_PRODUCT:
            var exists = false
            const newCp = action.payload
            var cartProducts = []

            state.cartProducts.map(cartProduct => {
                if(cartProduct.product._id == newCp._id) {
                    exists = true;
                    cartProduct.product.quantity = newCp.quantity;
                }
                cartProducts.push(cartProduct);
            })
            if(!exists) {
                cartProducts.push({
                    _id: state.cartProducts.length + 1,
                    product: newCp
                })
            }

            return {
                ...state,
                cartProducts: cartProducts
            }

        case SET_CART_PRODUCTS:

            return {
                ...state
            }

        case SET_USER_PURCHASES:
            return {
                ...state,
                purchases: action.payload
            }
        default: return state
    }
}
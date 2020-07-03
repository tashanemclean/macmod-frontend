import {
    SET_SHOP_CATEGORIES,
    // SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY,
    FETCH_SHOP_FILTER_LISTS,
    SET_SHOP_APPLY_FILTER
} from './types';

export function setShopFilter(filter){
    return ({
        type: SET_SHOP_APPLY_FILTER,
        payload: filter
    })
}

export function fetchShopFilterLists(lists){
    return ({
        type: FETCH_SHOP_FILTER_LISTS,
        payload: lists
    })
}

export function setShopProducts(products){
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: products
    })
}

export function filterProductsWithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'ALL'
            },
            {
                _id: 1,
                title: 'PRODUCTS'
            },
            {
                _id: 2,
                title: 'BUY'
            },
            {
                _id: 3,
                title: 'RESOURCES'
            },
            {
                _id: 4,
                title: 'PROMOTIONS'
            },
            {
                _id: 5,
                title: 'WHO WE ARE'
            },
            {
                _id: 6,
                title: 'CONTACT US'
            }
        ]
    })
}

export function fetchShopProducts(selectedFilters) {

    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/products/catalog/`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedFilters)
            })
        .then(res => res.json())
        .then((result) => {
            dispatch(setShopProducts(result.products))
            dispatch(fetchShopFilterLists(result.filters))
        },
        (error)=> {
            console.log(error)
        })
    }
}

export function fetchShopProductsQuery(query){
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/products/catalog/query`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(query)
            }
        )
        .then(res => res.json())
        .then((result) => {
            console.log("RES:", result)
            dispatch(setShopProducts(result))
            dispatch(filterProductsWithQuery(query))
        },
        (error)=> {
            console.log(error)
        })
    }
}
import {
    FETCH_BRANDS,
    FETCH_BULLETS,
    FETCH_PHASE_IMAGE,
    FETCH_BRAND_CONTENT,
    SET_PHASE_PAGE_IMAGE,
    CLICKED_BUY_NOW
} from './types';

export function setBuyNow(item){
    return ({
        type: CLICKED_BUY_NOW,
        payload: item
    })
}

export function setPageBullets(document){
    return ({
        type: FETCH_BULLETS,
        payload: document
    })
}

export function setPhaseImage(images){
    return ({
        type: FETCH_PHASE_IMAGE,
        payload: images
    })
}

export function setBrands(brands){
    return ({
        type: FETCH_BRANDS,
        payload: brands
    })
}

export function setBrandContent(brandContent){
    return ({
        type: FETCH_BRAND_CONTENT,
        payload: brandContent
    })
}

export function fetchBrandContent(brandContent){
    
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/productphases`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(brandContent)
        })
        .then(res => res.json())
        .then((result) =>{
            if(result.length !== 0){
                const res = JSON.parse(result.results)
                dispatch(setBrandContent(res))
                dispatch(setPageBullets(result.bullet_points.results[0]))
            }
        },
        (error) => {
            console.log(error)
        })
    }

}

export function fetchBrands(brandToFetch){
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/productlogos`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(brandToFetch)
        })
        .then(res => res.json())
        .then((result) => {
            dispatch(setBrands(result))
        },
        (error)=> {
            console.log(error)
        })
    }
}

export function fetchPhaseImages(phaseimages){
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/productphases/phaseimage`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(phaseimages)
        })
        .then(res => res.json())
        .then((result) =>{
            if(result.length !== 0){
                dispatch(setPhaseImage(result.results))
            }
        },
        (error) => {
            console.log(error)
        })
    }
}

export function setPageImage(resource){
    return ({
        type: SET_PHASE_PAGE_IMAGE,
        payload:resource
    })
}

export function setProductPageImage(image){
    return (dispatch) => {
        dispatch(setPageImage(image))
    }
}

export function setClickedBuyNow(itemToBuy){
    return (dispatch) => {
        dispatch(setBuyNow(itemToBuy))
    }
}
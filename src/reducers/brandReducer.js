import {
    FETCH_BRANDS,
    FETCH_BULLETS,
    FETCH_PHASE_IMAGE,
    FETCH_BRAND_CONTENT,
    SET_PHASE_PAGE_IMAGE,
    CLICKED_BUY_NOW
} from '../actions/types';

const INITIAL_STATAE = {
    brands: [],
    brandcontent: [],
    brandbullets: [],
    phaseimage: [],
    productpageimage: [],
    clickedbuynow: []
}

export default function(state = INITIAL_STATAE, action) {
    switch(action.type){
        // this logic can be changed later
        case SET_PHASE_PAGE_IMAGE: 
            const productpageimage = action.payload
            return {
                ...state,
                productpageimage
            }
            
        case FETCH_PHASE_IMAGE:
            let phaseimage = []
            const phaseimages = action.payload
            phaseimages.map(a => {
                phaseimage.push(a[0].imageurl)
            })
            return {
                ...state,
                phaseimage
            }

        case FETCH_BULLETS:
            const brandbullets = action.payload
            return {
                ...state,
                brandbullets
            }

        case FETCH_BRANDS:
            const brands = action.payload;
            return {
                ...state,
                brands
            }

        case FETCH_BRAND_CONTENT:
            const brandcontent = action.payload;
            // bad logic, needs to update in future
            // here we map the brandcontent array where we will get the _id and phasename
            brandcontent.map((content,key) => {
                // we remove the _id and phasename from the object
                delete brandcontent[key]._id
                delete brandcontent[key].phasename
                // delete brandcontent[key]['Phase Number']
            })
            return {
                ...state,
                brandcontent
            }

        case CLICKED_BUY_NOW:
            const clickedbuynow = action.payload;
            return {
                ...state,
                clickedbuynow
            }

        default: return state
    }
}
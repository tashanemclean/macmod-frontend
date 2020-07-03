import {
    SET_SUB_NAV_LINKS,
    CHANGE_SUB_NAV_ACTIVE,
    SET_SUB_NAV_CATEGORIES,
    SET_SUB_HEADER_LINKS
} from './types';

export function setSubHeaderLinks(links){
    return ({
        type: SET_SUB_HEADER_LINKS,
        payload: links
    })
}

export function setSubNavLinks(links, onClick) {
    return ({
        type: SET_SUB_NAV_LINKS,
        payload: {
            links,
            onClick: onClick ? onClick: ''
        }
    })
}

export function changeSubNavActive(_id) {
    return ({
        type: CHANGE_SUB_NAV_ACTIVE,
        payload: _id
    })
}

export function fetchSubNavCategories(){
    return ({
        type: SET_SUB_NAV_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: "WHAT'S NEW"
            },
            {
                _id: 1,
                title: "INDUSTRY"
            },
            {
                _id: 2,
                title: "SMARTER CHROMATOGRAPHY"
            },
            {
                _id: 3,
                title: "BRAND"
            },
            {
                _id: 4,
                title: "LC MODE"
            },
            {
                _id: 5,
                title: "NEWS"
            }
        ]
    })
}
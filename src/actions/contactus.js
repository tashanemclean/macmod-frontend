import {
    FETCH_CONTACTS,
    FETCH_CONTACT_DETAILS
} from './types';

export function fetchContactDetails(){
    return ({
        type: FETCH_CONTACT_DETAILS,
        payload: [
            {
                _id: 0,
                location: 'agagjajg',
                hoursofopertation: 'mon - fri',
                phone: 343343,
                fax: 34394883,
                email: 'agaghah@aghghag'
            }
        ]
    })
}

export function setContacts(results) {
    console.log(results)
    return ({
        type: FETCH_CONTACTS,
        payload: results
    })
}

export function fetchContacts() {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/contactus`)
        .then(res => res.json())
        .then((result) => {
            dispatch(setContacts(result))
        },
        (error)=> {
            console.log(error)
        })
    }
}
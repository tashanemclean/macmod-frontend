import {
    SET_PHASE_PAGE_CONTENT
} from './types';

export function setPhasePageContent(phase){
    return ({
        type: SET_PHASE_PAGE_CONTENT,
        payload: phase
    }) 
}

export function fetchPhasePage(phaseToFetch){
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_BACKEND_API}/phasepagecontent`, 
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(phaseToFetch)
        })
        .then(res => res.json())
        .then((result) => {
            dispatch(setPhasePageContent(result))
        },
        (error) => {
            console.log(error)
        })
    }
}
import {
    SET_FILTER_OPTIONS,
    FETCH_SHOP_FILTER_LISTS,
    SET_SHOP_APPLY_FILTER,
    FETCH_RESOURCES_FILTER_LIST,
    SET_RESOURCES_APPLY_FILTER,
} from '../actions/types';

const INITIAL_STATE = {
    options: [],
    filtersLists: [],
    filters: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_FILTER_OPTIONS:
            const options = action.payload;
            return {
                ...state,
                options
        }

        case FETCH_SHOP_FILTER_LISTS:
            var filtersLists = action.payload;
            return {
                ...state,
                filtersLists
            }

        case FETCH_RESOURCES_FILTER_LIST:
            var filtersResourcesLists = action.payload;
            return {
                ...state,
                filtersResourcesLists
            }
        case SET_SHOP_APPLY_FILTER:
            var filters = action.payload;

            return {
                ...state,
                filters
            }
        case SET_RESOURCES_APPLY_FILTER:
            var resourcesFilters = action.payload;
            return {
                ...state,
                resourcesFilters
            }
        default: return state;
    }
}
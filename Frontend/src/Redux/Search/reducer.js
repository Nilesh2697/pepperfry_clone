import {GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE} from "./actionType"

const initState = {
    data: [],
    isLoading: false,
    isError: false
}

export const SearchReducer = (state=initState, action) => {
    switch(action.type){
        case GET_SEARCH_REQUEST:{
            return{
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case GET_SEARCH_SUCCESS:{
            return{
                ...state,
                data: action.payload,
                isLoading: false
            }
        }

        case GET_SEARCH_FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError: true
            }
        }

        default: return state
    }
}
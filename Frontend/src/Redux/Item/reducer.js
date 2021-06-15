import { GET_ITEM_FAILURE, GET_ITEM_REQUEST, GET_ITEM_SUCCESS } from "./actionType";



const initState = {
    data: [],
    isLoading: false,
    isError: false
}

export const ItemReducer = (state=initState, action) => {
    switch(action.type){
        case GET_ITEM_REQUEST:{
            return{
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case GET_ITEM_SUCCESS:{
            return{
                ...state,
                data: action.payload,
                isLoading: false
            }
        }

        case GET_ITEM_FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default: return state
    }
}
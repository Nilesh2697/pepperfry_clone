import {GET_ITEM_REQUEST, GET_ITEM_SUCCESS, GET_ITEM_FAILURE} from "./actionType"
import axios from "axios"

const getItem = (payload) => (dispatch) => {
    
}


const get_item_request = () => {
    return{
        type: GET_ITEM_REQUEST
    }
}

const get_item_success = (payload) => {
    return{
        type: GET_ITEM_SUCCESS,
        payload
    }
}

const get_item_failure = () => {
    return{
        type: GET_ITEM_FAILURE
    }
}
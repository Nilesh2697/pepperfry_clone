import {GET_ITEM_REQUEST, GET_ITEM_SUCCESS, GET_ITEM_FAILURE} from "./actionType"
import axios from "axios"

const getItem = (payload) => (dispatch) => {
    const item_req = get_item_request()
    dispatch(item_req)
    axios.get(`http://localhost:3001/users`)
    .then((res) => {
        const success_user_req = search_success(res.data)
        console.log(success_user_req)
    })
    .catch(err =>{
        const failure_user_req = search_failure()
        dispatch(failure_user_req)
    })
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

export{getItem}
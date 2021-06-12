import {GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE} from "./actionType"
import axios from "axios"

const getSearch = (payload) => (dispatch) => {
    const search_req = search_request()
    dispatch(search_req)
    axios.get(`http://localhost:3001/search/${payload}`)
    .then(resp => {
        const success_req = search_success(resp.data)
        dispatch(success_req)
    })
    .catch(err => {
        const failure_req = search_failure()
        dispatch(failure_req)
    })

}

const search_request = () => {
    return{
        type: GET_SEARCH_REQUEST
    }
}

const search_success = (payload) => {
    return{
        type: GET_SEARCH_SUCCESS,
        payload
    }
}

const search_failure = () => {
    return{
        type: GET_SEARCH_FAILURE
    }
}

export {getSearch}
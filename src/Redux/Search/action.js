import {GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS, GET_SEARCH_FAILURE} from "./actionType"
import axios from "axios"

const getSearch = (payload) => (dispatch) => {
    search_request()
    axios.get(`http://localhost:3001/search/${payload}`)
    .then(resp => search_success(resp.data))
    .catch(err => search_failure())

}

const search_request = () => {
    return{
        type: GET_SEARCH_REQUEST
    }
}

const search_success = (payload) => {
    return{
        type: GET_SEARCH_SUCCESS
    }
}

const search_failure = () => {
    return{
        type: GET_SEARCH_FAILURE
    }
}

export {getSearch}
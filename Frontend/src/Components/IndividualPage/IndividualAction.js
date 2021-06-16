import axios from "axios"
import { GET_DATA_BY_CATEGORY_FAILURE, GET_DATA_BY_CATEGORY_REQUEST, GET_DATA_BY_CATEGORY_SUCCESS } from "./IndividualActionType"

export const getDataByCategoryRequest=()=>{
    return{
        type:GET_DATA_BY_CATEGORY_REQUEST,
    }
}

export const getDataByCategorySuccess=(payload)=>{
    return{
        type:GET_DATA_BY_CATEGORY_SUCCESS,
        payload
    }
}

export const getDataByCategoryFailure=(payload)=>{
    return{
        type:GET_DATA_BY_CATEGORY_FAILURE,
        payload
    }
}

export const getDataByCategory=(payload)=>(dispatch)=>{
   dispatch(getDataByCategoryRequest())

   axios.get(`http://localhost:3001/${payload}`)
   .then(res=>dispatch(getDataByCategorySuccess(res.data)))
   .catch(err=>dispatch(getDataByCategoryFailure(err)))
}
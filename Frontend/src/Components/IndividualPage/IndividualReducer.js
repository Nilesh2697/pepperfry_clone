import { GET_DATA_BY_CATEGORY_FAILURE, GET_DATA_BY_CATEGORY_REQUEST, GET_DATA_BY_CATEGORY_SUCCESS } from "./IndividualActionType"

const inState ={
  categoryList:[],
  isLoading:false,
  isError:false,

}

export const IndividualReducer =(state=inState,{type,payload})=>{
    switch(type){
            case GET_DATA_BY_CATEGORY_REQUEST:{
                return{
                    ...state,
                    isLoading:true
                }
            }
            case GET_DATA_BY_CATEGORY_SUCCESS:{
                return{
                    ...state,
                    isLoading:false,
                    list:payload
                }
            }
            case GET_DATA_BY_CATEGORY_FAILURE:{
                return{
                    ...state,
                    isError:true
                }
            }
            default:
                return state
    }
}
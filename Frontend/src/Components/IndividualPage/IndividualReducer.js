import { getData } from "../../Redux/localStorage"
import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_WISHLIST_FAILURE, ADD_TO_WISHLIST_REQUEST, ADD_TO_WISHLIST_SUCCESS, FETCH_IN_CART_FAILURE, FETCH_IN_CART_REQUEST, FETCH_IN_CART_SUCCESS, FETCH_IN_WISHLIST_FAILURE, FETCH_IN_WISHLIST_REQUEST, FETCH_IN_WISHLIST_SUCCESS, FINAL_CART_SET_FAILURE, FINAL_CART_SET_REQUEST, FINAL_CART_SET_SUCCESS, FINAL_WISH_SET_SUCCESS, GET_DATA_BY_CATEGORY_FAILURE, GET_DATA_BY_CATEGORY_REQUEST, GET_DATA_BY_CATEGORY_SUCCESS } from "./IndividualActionType"

// const isCart = getData("finalCart");
const isWished = getData("wishList");
const inState ={
  categoryList:[],
  isLoading:false,
  isError:false,
  list:[],
//   finalCart:isCart||[],
//   inCart:[],
  finalWishlist:isWished||[],
  inWishList:[]
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
                    isError:true,
                    isLoading:false,
                }
            }
            case ADD_TO_CART_REQUEST:{
                return{
                    ...state,
                    isLoading:true
                }
            }
            case ADD_TO_CART_SUCCESS:{
                return{
                    ...state,
                    isLoading:false
                }
            }
            case ADD_TO_CART_FAILURE:{
                return{
                    ...state,
                    isError:true,
                    isLoading:false
                }
            }
             
            case ADD_TO_WISHLIST_REQUEST:{
                return{
                    ...state,
                    isLoading:true
                }
            }
            case ADD_TO_WISHLIST_SUCCESS:{
                return{
                    ...state,
                    isLoading:false
                }
            }
            case ADD_TO_WISHLIST_FAILURE:{
                return{
                    ...state,
                    isError:true,
                    isLoading:false
                }
            }
            // case FINAL_CART_SET_SUCCESS:{
            //     return{
            //         ...state,
            //         isLoading:false,
            //         finalCart:payload
            //     }
            // }
            case FINAL_WISH_SET_SUCCESS:{
                return{
                    ...state,
                    isLoading:false,
                    finalWishlist:payload
                }
            }

            // case FETCH_IN_CART_REQUEST:{
            //     return{
            //         ...state,
            //         isLoading:true
            //     }
            // }
            // case FETCH_IN_CART_SUCCESS:{
            //     return{
            //         ...state,
            //         isLoading:false,
            //         inCart:payload
            //     }
            // }
            // case FETCH_IN_CART_FAILURE:{
            //     return{
            //         ...state,
            //         isError:true
            //     }
            // }
            case FETCH_IN_WISHLIST_REQUEST:{
                return{
                    ...state,
                    isLoading:true
                }
            }
            case FETCH_IN_WISHLIST_SUCCESS:{
                return{
                    ...state,
                    isLoading:false,
                    inWishList:payload
                }
            }
            case FETCH_IN_WISHLIST_FAILURE:{
                return{
                    ...state,
                    isError:true
                }
            }
            default:
                return state
    }
}
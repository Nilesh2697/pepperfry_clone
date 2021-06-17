import axios from "axios"
import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_LOCAL_CART_REQUEST, ADD_TO_LOCAL_CART_SUCCESS, ADD_TO_WISHLIST_FAILURE, ADD_TO_WISHLIST_REQUEST, ADD_TO_WISHLIST_SUCCESS, FETCH_IN_CART_FAILURE, FETCH_IN_CART_REQUEST, FETCH_IN_CART_SUCCESS, FETCH_IN_WISHLIST_FAILURE, FETCH_IN_WISHLIST_REQUEST, FETCH_IN_WISHLIST_SUCCESS, FINAL_CART_SET_FAILURE, FINAL_CART_SET_REQUEST, FINAL_CART_SET_SUCCESS, FINAL_WISH_SET_SUCCESS, GET_DATA_BY_CATEGORY_FAILURE, GET_DATA_BY_CATEGORY_REQUEST, GET_DATA_BY_CATEGORY_SUCCESS, GET_USER_BY_ID_FAILURE, GET_USER_BY_ID_REQUEST, GET_USER_BY_ID_SUCCESS } from "./IndividualActionType"

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

export const addToCartRequest=(payload)=>{
    return{
        type:ADD_TO_CART_REQUEST,
        payload
    }
}

export const addToCartSuccess=(payload)=>{
    return{
        type:ADD_TO_CART_SUCCESS,
        payload
    }
}

export const addToCartFailure=(payload)=>{
    return{
        type:ADD_TO_CART_FAILURE,
        payload
    }
}

export const addToWishListRequest=(payload)=>{
    return{
        type:ADD_TO_WISHLIST_REQUEST,
        payload
    }
}

export const addToWishListSuccess=(payload)=>{
    return{
        type:ADD_TO_WISHLIST_SUCCESS,
        payload
    }
}

export const addToWishListFailure=(payload)=>{
    return{
        type:ADD_TO_WISHLIST_FAILURE,
        payload
    }
}

export const addToCart =(userId,payload)=>(dispatch)=>{
    console.log(userId,payload)
     if(userId!==""||userId !== undefined||userId !== null){
        dispatch(addToCartRequest())
        axios.put(`http://localhost:3001/users/${userId}`,{
            
                cart:payload
            
           }    
           )
           .then(res=>dispatch(addToCartSuccess(res.data)))
           .catch(err=>dispatch(addToCartFailure(err)))
     }

}

export const addToWishList =(userId,payload)=>(dispatch)=>{
    console.log(userId,payload)
     if(userId!==""||userId !== undefined||userId !== null){
        dispatch(addToWishListRequest())
        axios.put(`http://localhost:3001/users/${userId}`,{
            params:{
                wishList:3
            }
           }    
           )
           .then(res=>dispatch(addToWishListSuccess(res.data)))
           .catch(err=>dispatch(addToWishListFailure(err)))
     }

}


export const finalCartSuccess=(payload)=>{
    return{
        type:FINAL_CART_SET_SUCCESS,
        payload
    }
}

export const finalWishListSuccess=(payload)=>{
    return{
        type:FINAL_WISH_SET_SUCCESS,
        payload
    }
}

// export const fetchInCartRequest=(payload)=>{
//     return{
//         type:FETCH_IN_CART_REQUEST,
//         payload
//     }
// }
// export const fetchInCartSuccess=(payload)=>{
//     return{
//         type:FETCH_IN_CART_SUCCESS,
//         payload
//     }
// }
// export const fetchInCartFailure=(payload)=>{
//     return{
//         type:FETCH_IN_CART_FAILURE,
//         payload
//     }
// }

export const fetchInWishListRequest=(payload)=>{
    return{
        type:FETCH_IN_WISHLIST_REQUEST,
        payload
    }
}
export const fetchInWishListSuccess=(payload)=>{
    return{
        type:FETCH_IN_WISHLIST_SUCCESS,
        payload
    }
}
export const fetchInWishListFailure=(payload)=>{
    return{
        type:FETCH_IN_WISHLIST_FAILURE,
        payload
    }
}

// export const fetchInCart =(payload)=>(dispatch)=>{
//     console.log(payload)
//     dispatch(fetchInCartRequest());
//     axios.get(`http://localhost:3001/userbyID/${payload}`)
//     .then(res=>dispatch(fetchInCartSuccess(res.data[0].carts)))
//     .catch(err=>dispatch(fetchInCartFailure(err)))
// }

export const fetchInWishList =(payload)=>(dispatch)=>{
   
    dispatch(fetchInWishListRequest());
    axios.get(`http://localhost:3001/userbyID/${payload}`)
    .then(res=>dispatch(fetchInWishListSuccess(res.data[0].wishlist)))
    .catch(err=>dispatch(fetchInWishListFailure(err)))
}
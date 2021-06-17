import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, saveData } from "../../Redux/localStorage";
import { addToWishList,  fetchInWishList,  finalWishListSuccess } from '../IndividualPage/IndividualAction';
import {WishList} from "./WishList"

export const WishListView=()=>{
    const isAuth = useSelector(state=>state.fireReducer.isAuth);
    const dispatch = useDispatch();
    const userId = useSelector(state=>state.fireReducer.userId);
    const isData = getData("wishList");
    const inWishList =  useSelector(state=>state.categoryReducer.inWishList);
    const finalWishlist = useSelector(state=>state.categoryReducer.finalWishlist);


    console.log(inWishList,isData)

    const handleRemove1=(id)=>{
        let cartItem= finalWishlist?.filter((el)=>{
          if(el.id!==id){
              return el;
          }
        })
        dispatch(finalWishListSuccess(cartItem));
        if (userId !== undefined || userId !== "") {
            dispatch(addToWishList(userId, cartItem));
          }
        saveData("wishList", cartItem)  
    }
  



    React.useEffect(()=>{
        if(isAuth===true){
          dispatch(fetchInWishList(userId))
        }
     },[finalWishlist])
    

    return(
        <>
        {
           inWishList?.length>0?inWishList.map((el)=>{
                return <WishList />
           }):isData?.length>0?isData.map((el)=>{
                return <WishList handleRemove1={handleRemove1} el={el}/>
                   
           }):null
        }
        </>
    )
}
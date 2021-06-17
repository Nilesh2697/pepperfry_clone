import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, saveData } from "../../Redux/localStorage";
import {  fetchInCart } from '../../Redux/FireAuth/fireAction';
import { CartCard } from "./CartCard";
import { finalCartSuccess,addToCart } from "../IndividualPage/IndividualAction";

export const CartView=()=>{
    const isAuth = useSelector(state=>state.fireReducer.isAuth);
    const dispatch = useDispatch();
    const userId = useSelector(state=>state.fireReducer.userId);
    const isData = getData("finalCart");
    const inCart =  useSelector(state=>state.fireReducer.inCart);
    const finalCart = useSelector(state=>state.categoryReducer.finalCart);


    console.log(inCart,isData)

    const handleRemove=(id)=>{
        let cartItem= finalCart?.filter((el)=>{
          if(el.id!==id){
              return el;
          }
        })
        dispatch(finalCartSuccess(cartItem));
        if (userId !== undefined || userId !== "") {
            dispatch(addToCart(userId, cartItem));
          }
        saveData("finalCart", cartItem)  
    }
  

    React.useEffect(()=>{
        if(isAuth===true){
          dispatch(fetchInCart(userId))
        }
     },[finalCart])
    

    return(
        <>
        {
           inCart?.length>0?inCart.map((el)=>{
                return <CartCard handleRemove={handleRemove} el={el} />
           }):isData?.length>0?isData.map((el)=>{
                return <CartCard handleRemove={handleRemove} el={el}/>
                   
           }):null
        }
        </>
    )
}
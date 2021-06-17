import React from "react";
import { ItemCard } from "../CardComponents/ItemCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishList, finalCartSuccess, finalWishListSuccess, getDataByCategory } from "./IndividualAction";
import { saveData } from "../../Redux/localStorage";

export const IndividualProductPage = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const list = useSelector((state) => state.categoryReducer.list);
    // const cart = useSelector(state=>state.categoryReducer.cart);
    const finalCart = useSelector(state=>state.categoryReducer.finalCart);
    const userId = useSelector(state=>state.fireReducer.userId);
    const finalWishlist = useSelector(state=>state.categoryReducer.finalWishlist);
   
    
    const handleAdd = (item1, counter = 1) => {
        let flag = 0;

        let cartItem = finalCart?.map((el) => {
            if (el.id === item1._id) {
                flag = 1;
                return { ...el, qty: el.qty + counter };
            } else {
                return el;
            }
        });

      if (flag === 0) {
        const payLoad = {
          item: item1.name,
          qty: counter,
          actual_price: item1.actual_price,
          offer_price: item1.offer_price,
          id: item1._id,
          madeBy:item1.madeBy,
          image: item1.img[0],
          details:item1.details,
          total_savings:item1.total_savings,
          price:item1.price,
          savings:item1?.savings,
          ap:item1?.ap
        };
        dispatch(finalCartSuccess([...finalCart, payLoad]));
        if (userId !== undefined || userId !== "") {
          dispatch(addToCart(userId, [...finalCart, payLoad]));
        }
        saveData("finalCart",([...finalCart, payLoad]));
      } else {
        dispatch(finalCartSuccess(cartItem));
        if (userId !== undefined || userId !== "") {
          dispatch(addToCart(userId, cartItem));
        }
    };
    }
    const handleAddToWishList = (item1, counter = 1) => {
        let flag = 0;
  
        let cartItem = finalWishlist?.map((el) => {
          
          if (el.id === item1._id) {
             
            flag = 1;
            return { ...el, qty: el.qty + counter };
          } else {
            return el;
          }
        });

        if (flag === 0) {
          const payLoad = {
            item: item1.name,
            qty: counter,
            actual_price: item1.actual_price,
            offer_price: item1.offer_price,
            id: item1._id,
            madeBy:item1.madeBy,
            image: item1.img[0],
            details:item1.details,
            total_savings:item1.total_savings,
            price:item1.price,
            savings:item1?.savings,
            ap:item1?.ap
          };
          dispatch(finalWishListSuccess([...finalWishlist, payLoad]));
          if (userId !== undefined || userId !== "") {
            dispatch(addToWishList(userId, [...finalWishlist, payLoad]));
          }
          saveData("wishList",([...finalWishlist, payLoad]));
        } else {
          dispatch(finalWishListSuccess(cartItem));
          if (userId !== undefined || userId !== "") {
            dispatch(addToWishList(userId, cartItem));
          }
          saveData("wishList", cartItem )
        }
    };

    React.useEffect(() => {
        dispatch(getDataByCategory(category));
    }, []);

    // React.useEffect(()=>{
    //     dispatch(getDataByCategory(category))
    // },[])

   
    return(
        <>
            <div
                style={{
                    display: "grid",
                    width: 800,
                    gridTemplateColumns: "repeat(2, 1fr)",
                }}
            >
                {list?.length > 0
                    ? list.map((el) => {
                          return (
                              <ItemCard
                                  handleAdd={handleAdd}
                                  handleAddToWishList={handleAddToWishList}
                                  category={category}
                                  item={el}
                              />
                          );
                      })
                    : null}
            </div>
        </>
    );
}

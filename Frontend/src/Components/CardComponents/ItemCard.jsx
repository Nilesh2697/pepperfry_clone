import React from "react";
import { ItemCustomCard } from "./CustomCardStyle";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {Link} from "react-router-dom";


export const ItemCard = ({item,category,handleAdd,handleAddToWishList}) => {
    
    return (
        <ItemCustomCard key={item?._id}>        
            <img
                src={item?.img[0]}
                alt="Item_Img"
                style={{height:220}}
            />
            <br />
            <h2>
            <button onClick={()=>handleAdd(item)}>cart</button>   
            <Link to={`/item/${item._id}/${category}`} style={{textDecoration:"none",color:"black"}}>{item.name}</Link></h2>
            <div>
                <p>{item.madeBy}</p>
                <FavoriteBorderIcon onClick={()=>handleAddToWishList(item)}/>
            </div>
            <div>
                <span>{item.offer_price}</span>
                <span>{item.actual_price}</span>
            </div>
            <p>
                Save ₹ <span>{item.total_savings}</span>, Limited Time Offer
            </p>
            <div>
                <div style={{fontWeight:"bold"}}>Make a Set</div>
                <div>
                    <img
                        src={item.img[1]}
                        alt="Item_Img"
                    />
                    <img
                        src={item.img[2]}
                        alt="Item_Img"
                    />
                     <img
                        src={item.img[3]}
                        alt="Item_Img"
                    />
                </div>
            </div>
        </ItemCustomCard>
    );
};

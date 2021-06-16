import React from "react";
import { AddToCartDiv, ItemCustomCard } from "./CustomCardStyle";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import { Link } from "react-router-dom";

export const ItemCard = ({ item, category }) => {
    // const [showButton, setShowButton] = useState(false);
    const handleAdd = () => {
        alert(item._id);
        console.log(item._id);
    };
    return (
        <ItemCustomCard
            key={item?._id}
            // onMouseOver={() => setShowButton(true)}
            // onMouseOut={() => setShowButton(false)}
        >
            <div style={{ position: "relative" }}>
                <img
                    src={item?.img[0]}
                    alt="Item_Img"
                    style={{ height: 220 }}
                />

                <AddToCartDiv onClick={handleAdd}>ADD TO CART</AddToCartDiv>
            </div>

            <br />
            <h2>
                <Link
                    to={`/item/${item._id}/${category}`}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    {item.name}
                </Link>
            </h2>
            <div>
                <p>{item.madeBy}</p>
                <FavoriteRoundedIcon />
            </div>
            <div>
                <span>{item.offer_price}</span>
                <span>{item.actual_price}</span>
            </div>
            <p>
                Save ₹ <span>{item.total_savings}</span>, Limited Time Offer
            </p>
            <div>
                <div style={{ fontWeight: "bold" }}>Make a Set</div>
                <div>
                    <img src={item.img[1]} alt="Item_Img" />
                    <img src={item.img[2]} alt="Item_Img" />
                    <img src={item.img[3]} alt="Item_Img" />
                </div>
            </div>
        </ItemCustomCard>
    );
};

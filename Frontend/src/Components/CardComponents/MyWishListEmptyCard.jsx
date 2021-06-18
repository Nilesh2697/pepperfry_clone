import React from "react";
import { EmptyCardDiv } from "./CustomCardStyle";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
// import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";

export const MyWishListEmptyCard = () => {
    return (
        <EmptyCardDiv>
            <img
                src="https://www.pepperfry.com/images/svg/empty-wishlist.svg"
                alt="Empty WishList Logo"
            />
            <p>You Haven't Added Any Item To Your Wishlist</p>
            <div>
                <div
                    style={{
                        display: "flex",
                        // padding: "1% 2%",
                        gap: "1px",
                        // border: "1px solid black",
                        width: "68%",
                        margin: "auto",
                        // textAlign: "center",
                    }}
                >
                    START WISHING
                    <SentimentSatisfiedOutlinedIcon
                        style={{ marginTop: "-2px" }}
                    />
                </div>
            </div>
        </EmptyCardDiv>
    );
};

import React from "react";
import { EmptyCardDiv } from "./CustomCardStyle";

export const MyCartEmptyCard = () => {
    return (
        <EmptyCardDiv>
            <img
                src="https://www.pepperfry.com/images/svg/empty-cart.svg"
                alt="Empty Cart Logo"
            />
            <p>Your Shopping Cart Is Empty</p>
            <div>CONTINUE SHOPPING</div>
        </EmptyCardDiv>
    );
};

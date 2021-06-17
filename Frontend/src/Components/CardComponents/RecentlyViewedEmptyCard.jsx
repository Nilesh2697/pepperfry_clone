import React from "react";
import { EmptyCardDiv } from "./CustomCardStyle";

export const RecentlyViewedEmptyCard = () => {
    return (
        <EmptyCardDiv>
            <img
                src="https://www.pepperfry.com/images/svg/empty-recently-view.svg"
                alt="Empty Recently Viewed List Logo"
            />
            <p>Nothing To Display Here</p>
            <div>START SHOPPING</div>
        </EmptyCardDiv>
    );
};

import React from "react";
import { EmptyCardDiv } from "./CustomCardStyle";
import { Link } from "react-router-dom";

export const RecentlyViewedEmptyCard = () => {
    return (
        <EmptyCardDiv>
            <img
                src="https://www.pepperfry.com/images/svg/empty-recently-view.svg"
                alt="Empty Recently Viewed List Logo"
            />
            <p>Nothing To Display Here</p>
          <div> <Link to={"/"} style={{textDecoration:"none",color:"rgb(241, 101, 33)"}}> START SHOPPING</Link></div>
        </EmptyCardDiv>
    );
};

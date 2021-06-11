import React from "react";
import { BrandLists } from "./BrandLists";
import { DynamicPageCategory } from "./DynamicPageCategory";
import { FlashSale } from "./FlashSale";
import { NewArivals } from "./NewArivals";
import { ShopByStyle } from "./ShopByStyle";
import { Spotlight } from "./Spotlight";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Facilities } from "./Facilities";
import { Faq } from "./Faq";

import {
    brandListEndPoint,
    categoryHeadingListEndPoint,
    facilitiesListEndPoint,
    faqListEndPoint,
    firstSaleLogoEndPoint,
    newArivalListEndPoint,
    shopByStyleListEndPoint,
    spotLightListEndPoint,
} from "../../StaticData/apiEndPoints";
import { useDispatch } from "react-redux";
import { getData } from "../../Redux/DataList/action";
import { useEffect } from "react";

export const CustomDynamicPage = () => {
    const dispatch = useDispatch();

    const handleGetData = () => {
        dispatch(
            getData(
                categoryHeadingListEndPoint,
                firstSaleLogoEndPoint,
                spotLightListEndPoint,
                newArivalListEndPoint,
                shopByStyleListEndPoint,
                brandListEndPoint,
                facilitiesListEndPoint,
                faqListEndPoint,
            ),
        );
    };

    useEffect(handleGetData, [dispatch]);
    return (
        <div>
            <br />
            <DynamicPageCategory />
            <br />
            <br />
            <FlashSale />
            <br />
            <Spotlight />
            <br />
            <br />
            <br />
            <NewArivals />
            <br />
            <br />
            <ShopByStyle />
            <br />
            <br />
            <BrandLists />
            <div
                style={{
                    color: "rgb(195,0,6)",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                }}
            >
                <p>BROWSE ALL BRANDS</p>

                <ArrowForwardIosIcon />
            </div>

            <br />
            <Facilities />
            <br />
            <Faq />
        </div>
    );
};

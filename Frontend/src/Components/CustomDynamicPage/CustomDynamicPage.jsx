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
    FACILITIES_LIST_END_POINT,
    FAQ_LIST_END_POINT,
    FIRST_SALE_LOGO_END_POINT,
    FURNITURE_BRAND_LIST_END_POINT,
    FURNITURE_CATEGORY_LIST_END_POINT,
    FURNITURE_NEWARIVAL_LIST_END_POINT,
    FURNITURE_SHOP_BY_STYLE_LIST_END_POINT,
    FURNITURE_SPOTLIGHT_LIST_END_POINT,
    BEDROOM_CATEGORY_LIST_END_POINT,
    BEDROOM_SPOTLIGHT_LIST_END_POINT,
    BEDROOM_NEWARIVAL_LIST_END_POINT,
    BEDROOM_SHOP_BY_STYLE_LIST_END_POINT,
    BEDROOM_BRAND_LIST_END_POINT,
} from "../../StaticData/apiEndPoints";
import { useDispatch } from "react-redux";
import { getData } from "../../Redux/DataList/action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const CustomDynamicPage = () => {
    const dispatch = useDispatch();
    const { product } = useParams();
    console.log(product);
    let endPointList = [];
    switch (product) {
        case "furniture": {
            endPointList.push(FURNITURE_CATEGORY_LIST_END_POINT);
            endPointList.push(FIRST_SALE_LOGO_END_POINT);
            endPointList.push(FURNITURE_SPOTLIGHT_LIST_END_POINT);
            endPointList.push(FURNITURE_NEWARIVAL_LIST_END_POINT);
            endPointList.push(FURNITURE_SHOP_BY_STYLE_LIST_END_POINT);
            endPointList.push(FURNITURE_BRAND_LIST_END_POINT);
            endPointList.push(FACILITIES_LIST_END_POINT);
            endPointList.push(FAQ_LIST_END_POINT);
            break;
        }

        case "bedroom": {
            endPointList.push(BEDROOM_CATEGORY_LIST_END_POINT);
            endPointList.push(FIRST_SALE_LOGO_END_POINT);
            endPointList.push(BEDROOM_SPOTLIGHT_LIST_END_POINT);
            endPointList.push(BEDROOM_NEWARIVAL_LIST_END_POINT);
            endPointList.push(BEDROOM_SHOP_BY_STYLE_LIST_END_POINT);
            endPointList.push(BEDROOM_BRAND_LIST_END_POINT);
            endPointList.push(FACILITIES_LIST_END_POINT);
            endPointList.push(FAQ_LIST_END_POINT);

            break;
        }
        default: {
            break;
        }
    }

    const handleGetData = () => {
        dispatch(
            getData(
                endPointList[0],
                endPointList[1],
                endPointList[2],
                endPointList[3],
                endPointList[4],
                endPointList[5],
                endPointList[6],
                endPointList[7],
            ),
        );
    };

    useEffect(handleGetData, [product]);
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
                }}
            >
                <p
                    style={{
                        cursor: "pointer",
                    }}
                >
                    BROWSE ALL BRANDS
                </p>
                <ArrowForwardIosIcon
                    style={{
                        cursor: "pointer",
                    }}
                />
            </div>

            <br />
            <Facilities />
            <br />
            <Faq />
        </div>
    );
};

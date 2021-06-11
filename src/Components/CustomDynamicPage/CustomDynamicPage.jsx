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
    furnitureBrandListEndPoint,
    furnitureCategoryHeadingListEndPoint,
    furnitureFacilitiesListEndPoint,
    furnitureFaqListEndPoint,
    furnitureFirstSaleLogoEndPoint,
    furnitureNewArivalListEndPoint,
    furnitureShopByStyleListEndPoint,
    furnitureSpotLightListEndPoint,
} from "../../StaticData/apiEndPoints";
import { useDispatch } from "react-redux";
import { getData } from "../../Redux/DataList/action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const CustomDynamicPage = () => {
    const dispatch = useDispatch();
    const { product } = useParams();
    let endPointList = [];
    switch (product) {
        case "furniture": {
            endPointList.push(furnitureCategoryHeadingListEndPoint);
            endPointList.push(furnitureFirstSaleLogoEndPoint);
            endPointList.push(furnitureSpotLightListEndPoint);
            endPointList.push(furnitureNewArivalListEndPoint);
            endPointList.push(furnitureShopByStyleListEndPoint);
            endPointList.push(furnitureBrandListEndPoint);
            endPointList.push(furnitureFacilitiesListEndPoint);
            endPointList.push(furnitureFaqListEndPoint);
            break;
        }

        case "bedroom": {
            console.log(product);
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

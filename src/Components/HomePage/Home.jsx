import React, { useEffect } from "react";

import {
    homeChikHomeEndPoint,
    houseFavouriteListEndPoint,
    happyHomeEssentialsEndPoint,
    nightEssentialEndPoint,
    decorationListEndPoint,
    modernStyleBannersEndPoint,
} from "../../StaticData/apiEndPoints";

import { useDispatch } from "react-redux";
import { getData } from "../../Redux/DataList/action";

import { Ads } from "../AdsModel/Ads";
import { HomeChikHome } from "./HomeChikHome";
import { HouseFavourite } from "./HouseFavourite";
import { HomeEssentials } from "./HomeEssentials";
import { NightEssentials } from "./NightEssentials";
import { DecorationList } from "./DecorationList";
import { ModernStyleBannerList } from "./ModernStyleBannerList";

export const Home = () => {
    const dispatch = useDispatch();

    const handleGetData = () => {
        dispatch(
            getData(
                homeChikHomeEndPoint,
                houseFavouriteListEndPoint,
                happyHomeEssentialsEndPoint,
                nightEssentialEndPoint,
                decorationListEndPoint,
                modernStyleBannersEndPoint,
            ),
        );
    };

    useEffect(handleGetData, [dispatch]);

    return (
        <div>
            {/* <Ads /> */}
            <br />
            <HomeChikHome />
            <br />
            <br />
            <HouseFavourite />
            <br />
            <br />
            <HomeEssentials />
            <br />
            <br />
            <NightEssentials />
            <br />
            <br />
            <DecorationList />
            <br />
            <br />
            <ModernStyleBannerList />
        </div>
    );
};

import React, { useEffect } from "react";

import {
    // homeChikHomeEndPoint,
    houseFavouriteListEndPoint,
    happyHomeEssentialsEndPoint,
    nightEssentialEndPoint,
    decorationListEndPoint,
    modernStyleBannersEndPoint,
} from "../../StaticData/apiEndPoints";

import { useDispatch } from "react-redux";
import { getData } from "../../Redux/DataList/action";
import { BankOffer } from "./BankOffer";
import { HomeChikHome } from "./HomeChikHome";
import { HouseFavourite } from "./HouseFavourite";
import { HomeEssentials } from "./HomeEssentials";
import { NightEssentials } from "./NightEssentials";
import { DecorationList } from "./DecorationList";
import { ModernStyleBannerList } from "./ModernStyleBannerList";
import { Carousalone } from "./Carousel/Carousalone";

export const Home = () => {
    const dispatch = useDispatch();
    const homeChikHomeEndPoint =
        "https://glacial-atoll-43442.herokuapp.com/homeChick";
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
            <Carousalone />
            <br />
            <br />
            <BankOffer />
            <br />
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

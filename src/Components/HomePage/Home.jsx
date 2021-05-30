import React from "react";
import { CustomCard } from "../CardComponents/CustomCard";
import homeChikHomeList from "../../StaticData/homeChikHomeList.json";
import houseFavouriteList from "../../StaticData/houseFavouriteList.json";
import { HomeChikHomeContainer, HouseFavouriteContainer } from "./HomeStyle";

export const Home = () => {
    const homeChikHome = homeChikHomeList;
    const houseFavourite = houseFavouriteList;
    // console.log(cardList);
    return (
        <div>
            <HomeChikHomeContainer>
                {homeChikHome.map((item, index) => (
                    <CustomCard key={index} type="primary" item={item} />
                ))}
            </HomeChikHomeContainer>
            <br />
            <br />
            <HouseFavouriteContainer>
                {houseFavourite.map((item, index) => (
                    <CustomCard key={index} type="secondary" item={item} />
                ))}
            </HouseFavouriteContainer>
        </div>
    );
};

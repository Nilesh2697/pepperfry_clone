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
                    <CustomCard key={index} type="primary">
                        <img src={item.heading_image} alt="HeadingImage" />

                        <label>
                            <span>Traits : </span>
                            {item.description}
                        </label>
                        <label>
                            <span>Price : </span>
                            {item.price}
                        </label>
                        <img src={item.product_image} alt="ProductImage" />
                        {item.product_feature}
                        <label>
                            <span>Popular For : </span>
                            <span>{item.product_type}</span>
                        </label>
                    </CustomCard>
                ))}
            </HomeChikHomeContainer>
            <br />
            <br />
            <HouseFavouriteContainer>
                {houseFavourite.map((item, index) => (
                    <CustomCard key={index} type="secondary">
                        <img src={item.image_url} alt="ProductImage" />
                        <label>{item.heading}</label>
                        <label>{item.description}</label>
                    </CustomCard>
                ))}
            </HouseFavouriteContainer>
        </div>
    );
};

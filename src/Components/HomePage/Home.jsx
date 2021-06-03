import React from "react";
import { CustomCard } from "../CardComponents/CustomCard";
import homeChikHomeList from "../../StaticData/homeChikHomeList.json";
import houseFavouriteList from "../../StaticData/houseFavouriteList.json";
import { HomeChikHomeContainer, HouseFavouriteContainer } from "./HomeStyle";

export const Home = () => {
    const homeChikHome = homeChikHomeList;
    const houseFavourite = houseFavouriteList;

    return (
        <div>
            <HomeChikHomeContainer>
                <p>HOME CHIC HOME</p>
                <p>Give Your Place A Makeover</p>
                <div>
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
                </div>
            </HomeChikHomeContainer>

            <br />
            <br />

            <HouseFavouriteContainer>
                <p>HOUSE FAVOURITES</p>
                <p>Loved By All</p>
                <div>
                    {houseFavourite.map((item, index) => (
                        <CustomCard key={index} type="secondary">
                            <img src={item.image_url} alt="ProductImage" />
                            <label>{item.heading}</label>
                            <label>{item.description}</label>
                        </CustomCard>
                    ))}
                </div>
            </HouseFavouriteContainer>
        </div>
    );
};

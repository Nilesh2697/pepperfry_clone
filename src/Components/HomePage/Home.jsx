import React, { useEffect } from "react";
import { CustomCard } from "../CardComponents/CustomCard";
import homeChikHomeList from "../../StaticData/homeChikHomeList.json";
import houseFavouriteList from "../../StaticData/houseFavouriteList.json";
import { HomeChikHomeContainer, HouseFavouriteContainer } from "./HomeStyle";

import {
    homeChikHomeEndPoint,
    houseFavouriteListEndPoint,
} from "../../StaticData/apiEndPoints";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/DataList/action";
import { Spinner } from "../Loading/Spinner";

import { Ads } from "../AdsModel/Ads";


export const Home = () => {
    const homeChikHome = homeChikHomeList;
    const houseFavourite = houseFavouriteList;
    const dispatch = useDispatch();
    const { dataListLoading, dataListError, dataListOne, dataListTwo } =
        useSelector((res) => res.dataList);

    const handleGetData = () => {
        const endPointList = {
            homeChikHomeEndPoint,
            houseFavouriteListEndPoint,
        };
        dispatch(
            getData(
                endPointList.homeChikHomeEndPoint,
                houseFavouriteListEndPoint,
            ),
        );
    };

    useEffect(handleGetData, [dispatch]);

    return (
        <div>
            {/* <Ads /> */}
            <HomeChikHomeContainer>
                <p>HOME CHIC HOME</p>
                <p>Give Your Place A Makeover</p>
                <div>
                    {dataListLoading
                        ? [1, 2, 3, 4, 5, 6].map((i) => (
                              <CustomCard key={i} type="primary">
                                  <Spinner />
                              </CustomCard>
                          ))
                        : dataListOne.map((item, index) => (
                              <CustomCard key={index} type="primary">
                                  <img
                                      src={item.heading_image}
                                      alt="HeadingImage"
                                  />

                                  <label>
                                      <span>Traits : </span>
                                      {item.description}
                                  </label>
                                  <label>
                                      <span>Price : </span>
                                      {item.price}
                                  </label>
                                  <img
                                      src={item.product_image}
                                      alt="ProductImage"
                                  />
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

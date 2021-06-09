import React, { useEffect } from "react";
import { CustomCard } from "../CardComponents/CustomCard";
import houseFavouriteList from "../../StaticData/houseFavouriteList.json";
import happyHomeEssentials from "../../StaticData/happyHomeEssentials.json";
import nightEssential from "../../StaticData/nightEssential.json";
import decorationList from "../../StaticData/decorationList.json";
import modernStyleBanners from "../../StaticData/modernStyleBanners.json";

import {
    PrimaryGreyContainer,
    SecondaryGreyContainer,
    PrimaryWhiteContainer,
} from "./HomeStyle";

import {
    homeChikHomeEndPoint,
    houseFavouriteListEndPoint,
    happyHomeEssentialsEndPoint,
} from "../../StaticData/apiEndPoints";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/DataList/action";
import { Spinner } from "../Loading/Spinner";

import { Ads } from "../AdsModel/Ads";
import { HomeChikHome } from "./HomeChikHome";
import { HouseFavourite } from "./HouseFavourite";
import { HomeEssentials } from "./HomeEssentials";

export const Home = () => {
    const houseFavourite = houseFavouriteList;
    const dispatch = useDispatch();
    const {
        dataListLoading,
        dataListError,
        dataListOne,
        dataListTwo,
        dataListThree,
    } = useSelector((state) => state.dataList);

    const handleGetData = () => {
        const endPointList = {
            homeChikHomeEndPoint,
            houseFavouriteListEndPoint,
            happyHomeEssentialsEndPoint,
        };
        dispatch(
            getData(
                endPointList.homeChikHomeEndPoint,
                endPointList.houseFavouriteListEndPoint,
                endPointList.happyHomeEssentialsEndPoint,
            ),
        );
    };

    useEffect(handleGetData, [dispatch]);

    return (
        <div>
            <Ads />
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
            <PrimaryWhiteContainer>
                <p>SLEEP RIGHT. SLEEP TIGHT</p>
                <p>Mattresses That Work Like A Dream</p>
                <div>
                    {dataListLoading
                        ? nightEssential.map((data, i) => (
                              <CustomCard key={i} type="secondary">
                                  <Spinner data={data} />
                              </CustomCard>
                          ))
                        : nightEssential.map((item, index) => (
                              <CustomCard key={index} type="secondary">
                                  <img
                                      src={item.image_url}
                                      alt="ProductImage"
                                  />
                                  <label>{item.heading}</label>
                                  <label>{item.description}</label>
                              </CustomCard>
                          ))}
                </div>
            </PrimaryWhiteContainer>
            <br />
            <br />
            <SecondaryGreyContainer>
                <p>ADORN YOUR ADOBES</p>
                <p>Shop Home Decor</p>
                <div>
                    {dataListLoading
                        ? decorationList.map((data, i) => (
                              <CustomCard key={i} type="secondary">
                                  <Spinner data={data} />
                              </CustomCard>
                          ))
                        : decorationList.map((item, index) => (
                              <CustomCard key={index} type="secondary">
                                  <img
                                      src={item.image_url}
                                      alt="ProductImage"
                                  />
                                  <label>{item.heading}</label>
                                  <label>{item.description}</label>
                              </CustomCard>
                          ))}
                </div>
            </SecondaryGreyContainer>
            <br />
            <br />
            <PrimaryWhiteContainer>
                <p>STYLE 101</p>
                <p>Whispered Words Of Wisdom</p>
                <div>
                    {dataListLoading
                        ? modernStyleBanners.map((data, i) => (
                              <CustomCard key={i} type="secondary">
                                  <Spinner data={data} />
                              </CustomCard>
                          ))
                        : modernStyleBanners.map((item, index) => (
                              <CustomCard key={index} type="secondary">
                                  <img
                                      src={item.image_url}
                                      alt="ProductImage"
                                  />
                              </CustomCard>
                          ))}
                </div>
            </PrimaryWhiteContainer>
        </div>
    );
};

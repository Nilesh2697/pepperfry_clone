import React from "react";
import { useSelector } from "react-redux";
import { PrimaryWhiteContainer } from "./HomeStyle";
import modernStyleBanners from "../../StaticData/modernStyleBanners.json";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";

export const ModernStyleBannerList = () => {
    const { dataListLoading, dataListSix } = useSelector(
        (state) => state.dataList,
    );

    return (
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
                    : dataListSix.map((item, index) => (
                          <CustomCard key={index} type="secondary">
                              <img src={item.image_url} alt="ProductImage" />
                          </CustomCard>
                      ))}
            </div>
        </PrimaryWhiteContainer>
    );
};

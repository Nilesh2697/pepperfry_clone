import React from "react";
import { useSelector } from "react-redux";
import { SecondaryGreyContainer } from "./HomeStyle";
import happyHomeEssentials from "../../StaticData/Home/happyHomeEssentials.json";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";

export const HomeEssentials = () => {
    const { dataListLoadingThree, dataListThree } = useSelector(
        (state) => state.dataList,
    );

    return (
        <SecondaryGreyContainer>
            <p>{!dataListLoadingThree && "HAPPY HOME ESSENTIALS"}</p>
            <p>{!dataListLoadingThree && "Wait No More"}</p>
            <div>
                {dataListLoadingThree
                    ? happyHomeEssentials.map((data, i) => (
                          <CustomCard key={i} type="secondary">
                              <Spinner data={data} />
                          </CustomCard>
                      ))
                    : dataListThree.map((item, index) => (
                          <CustomCard key={index} type="secondary">
                              <img src={item.image_url} alt="ProductImage" />
                              <label>{item.heading}</label>
                              <label>{item.description}</label>
                          </CustomCard>
                      ))}
            </div>
        </SecondaryGreyContainer>
    );
};

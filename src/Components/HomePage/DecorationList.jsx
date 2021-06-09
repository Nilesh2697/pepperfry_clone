import React from "react";
import { useSelector } from "react-redux";
import { SecondaryGreyContainer } from "./HomeStyle";
import decorationList from "../../StaticData/decorationList.json";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";

export const DecorationList = () => {
    const { dataListLoading, dataListFive } = useSelector(
        (state) => state.dataList,
    );

    return (
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
                    : dataListFive.map((item, index) => (
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

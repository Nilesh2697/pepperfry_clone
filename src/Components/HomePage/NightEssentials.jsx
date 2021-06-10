import React from "react";
import { useSelector } from "react-redux";
import { PrimaryWhiteContainer } from "./HomeStyle";
import nightEssential from "../../StaticData/Home/nightEssential.json";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";

export const NightEssentials = () => {
    const { dataListLoading, dataListFour } = useSelector(
        (state) => state.dataList,
    );

    return (
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
                    : dataListFour.map((item, index) => (
                          <CustomCard key={index} type="secondary">
                              <img src={item.image_url} alt="ProductImage" />
                              <label>{item.heading}</label>
                              <label>{item.description}</label>
                          </CustomCard>
                      ))}
            </div>
        </PrimaryWhiteContainer>
    );
};

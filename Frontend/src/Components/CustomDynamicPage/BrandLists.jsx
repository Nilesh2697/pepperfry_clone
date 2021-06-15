import React from "react";
import { CustomDynamicPageGreyDiv } from "./CustomDynamicPageStyle";
import brandList from "../../StaticData/Dynamic/brandList.json";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";
import { useSelector } from "react-redux";

export const BrandLists = () => {
    const { dataListLoadingSix, dataListSix } = useSelector(
        (state) => state.dataList,
    );

    return (
        <CustomDynamicPageGreyDiv
            style={{
                background: "white",
            }}
        >
            <div>
                {dataListLoadingSix
                    ? brandList.map((data, i) => (
                          <CustomCard key={i} type="primary">
                              <Spinner data={data} />
                          </CustomCard>
                      ))
                    : dataListSix.map((item, index) => (
                          <CustomCard key={index} type="vertical">
                              <img src={item.image_url} alt="HeadingImage" />
                          </CustomCard>
                      ))}
            </div>
        </CustomDynamicPageGreyDiv>
    );
};

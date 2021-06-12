import React from "react";
import { useSelector } from "react-redux";
import { CustomDynamicPageWhiteDiv } from "./CustomDynamicPageStyle";
import firstSaleLogo from "../../StaticData/Dynamic/firstSaleLogo.json";
import { Spinner } from "../Loading/Spinner";

export const FlashSale = () => {
    const { dataListLoading, dataListTwo } = useSelector(
        (state) => state.dataList,
    );
    return (
        <CustomDynamicPageWhiteDiv>
            <div style={{ padding: "1% 6%" }}>
                {dataListLoading
                    ? firstSaleLogo.map((data, i) => <Spinner data={data} />)
                    : dataListTwo.map((item, index) => (
                          <img
                              key={index}
                              src={item.image_url}
                              alt="HeadingImage"
                          />
                      ))}
            </div>
        </CustomDynamicPageWhiteDiv>
    );
};

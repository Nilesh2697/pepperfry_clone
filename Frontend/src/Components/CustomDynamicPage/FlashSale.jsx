import React from "react";
import { useSelector } from "react-redux";
import { CustomDynamicPageWhiteDiv } from "./CustomDynamicPageStyle";
import firstSaleLogo from "../../StaticData/Dynamic/firstSaleLogo.json";
import { Spinner } from "../Loading/Spinner";

export const FlashSale = () => {
    const { dataListLoadingTwo, dataListTwo } = useSelector(
        (state) => state.dataList,
    );
    return (
        <CustomDynamicPageWhiteDiv>
            <div>
                {dataListLoadingTwo
                    ? firstSaleLogo.map((data, i) => <Spinner data={data} />)
                    : dataListTwo.map((item, index) => (
                          <img
                              style={{ marginLeft: "2.5%" }}
                              key={index}
                              src={item.image_url}
                              alt="HeadingImage"
                          />
                      ))}
            </div>
        </CustomDynamicPageWhiteDiv>
    );
};

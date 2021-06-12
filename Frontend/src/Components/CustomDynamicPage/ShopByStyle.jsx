import React from "react";
import { useSelector } from "react-redux";
import { CustomDynamicPageWhiteDiv } from "./CustomDynamicPageStyle";
import shopByStyleList from "../../StaticData/Dynamic/shopByStyleList.json";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";

export const ShopByStyle = () => {
    const { dataListLoading, dataListFive } = useSelector(
        (state) => state.dataList,
    );

    return (
        <CustomDynamicPageWhiteDiv>
            <p
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "20px",
                }}
            >
                SHOP BY STYLE
            </p>
            <div>
                {dataListLoading
                    ? shopByStyleList.map((data, i) => (
                          <CustomCard key={i} type="secondary">
                              <Spinner data={data} />
                          </CustomCard>
                      ))
                    : dataListFive.map((item, index) => (
                          <img
                              style={{
                                  width: "100%",
                              }}
                              key={index}
                              src={item.image_url}
                              alt="ProductImage"
                          />
                      ))}
            </div>
        </CustomDynamicPageWhiteDiv>
    );
};

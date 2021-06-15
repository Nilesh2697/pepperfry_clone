import React from "react";
import { CustomDynamicPageWhiteDiv } from "./CustomDynamicPageStyle";
import spotLightList from "../../StaticData/Dynamic/spotLightList.json";
import { useSelector } from "react-redux";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";

export const Spotlight = () => {
    const { dataListLoadingThree, dataListThree } = useSelector(
        (state) => state.dataList,
    );
    return (
        <CustomDynamicPageWhiteDiv>
            <p
                style={{
                    textAlign: "center",
                    fontWeight: "900",
                    fontSize: "20px",
                }}
            >
                {!dataListLoadingThree && "IN THE SPOTLIGHT"}
            </p>
            <div>
                {dataListLoadingThree
                    ? spotLightList.map((data, i) => (
                          <CustomCard key={i} type="secondary">
                              <Spinner data={data} />
                          </CustomCard>
                      ))
                    : dataListThree.map((item, index) => (
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

import React from "react";
import { useSelector } from "react-redux";
import { PrimaryGreyContainer } from "./HomeStyle";
import homeChikHomeList from "../../StaticData/homeChikHomeList.json";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";

export const HomeChikHome = () => {
    const { dataListLoading, dataListOne } = useSelector(
        (state) => state.dataList,
    );

    return (
        <PrimaryGreyContainer>
            <p>HOME CHIC HOME</p>
            <p>Give Your Place A Makeover</p>
            <div>
                {dataListLoading
                    ? homeChikHomeList.map((data, i) => (
                          <CustomCard key={i} type="primary">
                              <Spinner data={data} />
                          </CustomCard>
                      ))
                    : dataListOne.map((item, index) => (
                          <CustomCard key={index} type="primary">
                              <img
                                  src={item.heading_image}
                                  alt="HeadingImage"
                              />

                              <label>
                                  <span>Traits : </span>
                                  {item.description}
                              </label>
                              <label>
                                  <span>Price : </span>
                                  {item.price}
                              </label>
                              <img
                                  src={item.product_image}
                                  alt="ProductImage"
                              />
                              {item.product_feature}
                              <label>
                                  <span>Popular For : </span>
                                  <span>{item.product_type}</span>
                              </label>
                          </CustomCard>
                      ))}
            </div>
        </PrimaryGreyContainer>
    );
};

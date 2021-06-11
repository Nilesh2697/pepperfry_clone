import React from "react";
import { CustomDynamicPageGreyDiv } from "./CustomDynamicPageStyle";
import categoryHeadingList from "../../StaticData/Dynamic/categoryHeadingList.json";
import { useSelector } from "react-redux";
import { CustomCard } from "../CardComponents/CustomCard";
import { Spinner } from "../Loading/Spinner";

export const DynamicPageCategory = () => {
    const { dataListLoading, dataListOne } = useSelector(
        (state) => state.dataList,
    );

    return (
        <CustomDynamicPageGreyDiv>
            <div>
                {dataListLoading
                    ? categoryHeadingList.map((data, i) => (
                          <CustomCard key={i} type="primary">
                              <Spinner data={data} />
                          </CustomCard>
                      ))
                    : dataListOne.map((item, index) => (
                          <CustomCard key={index} type="vertical">
                              <img src={item.image_url} alt="HeadingImage" />
                              <p>{item.type}</p>
                              <div>
                                  {/* {item.category?.map((el) => (
                                      <div>{el}</div>
                                  ))} */}
                              </div>
                          </CustomCard>
                      ))}
            </div>
        </CustomDynamicPageGreyDiv>
    );
};

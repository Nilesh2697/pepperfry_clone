import React from "react";
import { AdditionalInfoDiv } from "./AdditionalInfoStyle";
import facilitiesList from "../../StaticData/Dynamic/facilitiesList.json";
import { useSelector } from "react-redux";
import { Spinner } from "../Loading/Spinner";

export const Facilities = () => {
    const { dataListLoading } = useSelector((state) => state.dataList);
    return (
        <AdditionalInfoDiv>
            {dataListLoading
                ? facilitiesList.map((data, i) => (
                      <div key={i}>
                          <Spinner data={data} />
                      </div>
                  ))
                : facilitiesList.map((item) => (
                      <div>
                          <h2>{item.heading}</h2>
                          <p>{item.description}</p>
                          {item.lists &&
                              item.lists.map((i) => (
                                  <ul>
                                      <li>{i}</li>
                                  </ul>
                              ))}
                      </div>
                  ))}
        </AdditionalInfoDiv>
    );
};

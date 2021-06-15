import React from "react";
import { AdditionalInfoDiv } from "./AdditionalInfoStyle";
import facilitiesList from "../../StaticData/Dynamic/facilitiesList.json";
import { useSelector } from "react-redux";
import { Spinner } from "../Loading/Spinner";

export const Facilities = () => {
    const { dataListLoadingSeven, dataListSeven } = useSelector(
        (state) => state.dataList,
    );
    console.log(facilitiesList);
    return (
        <AdditionalInfoDiv>
            {dataListLoadingSeven
                ? facilitiesList.map((data, i) => (
                      <div key={i}>
                          <Spinner data={data} />
                      </div>
                  ))
                : dataListSeven.map((item) => (
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

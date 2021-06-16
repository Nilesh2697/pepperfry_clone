import React from "react";
import { ItemCard } from "../CardComponents/ItemCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataByCategory } from "./IndividualAction";

export const IndividualProductPage = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const list = useSelector((state) => state.categoryReducer.list);
    React.useEffect(() => {
        dispatch(getDataByCategory(category));
    }, []);

    return (
        <>
            <div style={{ display: "flex", width: 1000, flexWrap: "wrap" }}>
                {list?.length > 0
                    ? list.map((el) => {
                          return <ItemCard category={category} item={el} />;
                      })
                    : null}
            </div>
        </>
    );
};

import React from "react";
import { PrimaryCustomCard, SecondaryCustomCard } from "./CustomCardStyle";

export const CustomCard = ({ type, item }) => {
    return type === "primary" ? (
        <PrimaryCustomCard>
            <img src={item.heading_image} alt="HeadingImage" />

            <label>
                <span>Traits : </span>
                {item.description}
            </label>
            <label>
                <span>Price : </span>
                {item.price}
            </label>
            <img src={item.product_image} alt="ProductImage" />
            {item.product_feature}
            <label>
                <span>Popular For : </span>
                <span>{item.product_type}</span>
            </label>
        </PrimaryCustomCard>
    ) : type === "secondary" ? (
        <SecondaryCustomCard>
            <img src={item.image_url} alt="ProductImage" />
            <label>{item.heading}</label>
            <label>{item.description}</label>
        </SecondaryCustomCard>
    ) : (
        "Another Card"
    );
};

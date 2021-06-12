import React from "react";
import {
    PrimaryCustomCard,
    SecondaryCustomCard,
    VerticalCustomCard,
} from "./CustomCardStyle";

export const CustomCard = ({ type, children }) => {
    return type === "primary" ? (
        <PrimaryCustomCard>{children}</PrimaryCustomCard>
    ) : type === "secondary" ? (
        <SecondaryCustomCard>{children}</SecondaryCustomCard>
    ) : type === "vertical" ? (
        <VerticalCustomCard>{children}</VerticalCustomCard>
    ) : (
        "Another Card"
    );
};

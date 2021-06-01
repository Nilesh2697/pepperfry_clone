import React from "react";
import { PrimaryCustomCard, SecondaryCustomCard } from "./CustomCardStyle";

export const CustomCard = ({ type, children }) => {
    return type === "primary" ? (
        <PrimaryCustomCard>{children}</PrimaryCustomCard>
    ) : type === "secondary" ? (
        <SecondaryCustomCard>{children}</SecondaryCustomCard>
    ) : (
        "Another Card"
    );
};

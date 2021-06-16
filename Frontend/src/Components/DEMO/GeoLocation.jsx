import React from "react";
import { getCustomerLocation } from "../../StaticData/Helper/helper";

export const GeoLocation = () => {
    const [location, setLocation] = React.useState("");
    const getL = () => {
        setLocation(getCustomerLocation());
    };
    return (
        <div>
            <button onClick={() => getL()}>CLICK</button>
            <h1>{console.log(location)}</h1>
        </div>
    );
};

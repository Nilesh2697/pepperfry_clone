const { getLocation } = require("../../Redux/Item/action");

export const getCustomerLocation = () => {
    let location = null;
    navigator.geolocation.getCurrentPosition(
        (res) => (location = getLocation(res)),
    );
    console.log("====================================");
    console.log(location);
    console.log("====================================");
};

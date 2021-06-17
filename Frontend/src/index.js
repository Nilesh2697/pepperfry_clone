import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { Payment } from "./Components/DEMO/Payment";
// import { GeoLocation } from "./Components/DEMO/GeoLocation";
// import { MyCartEmptyCard } from "./Components/CardComponents/MyCartEmptyCard";
// import { MyWishListEmptyCard } from "./Components/CardComponents/MyWishListEmptyCard";
// import { RecentlyViewedEmptyCard } from "./Components/CardComponents/RecentlyViewedEmptyCard";
// import { ItemCard } from "./Components/CardComponents/ItemCard";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                {/* <App /> */}
                <Payment />
                {/* <GeoLocation /> */}
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

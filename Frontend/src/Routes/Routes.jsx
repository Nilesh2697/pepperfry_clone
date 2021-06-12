import React from "react";
import { Route, Switch } from "react-router-dom";
import { CustomDynamicPage } from "../Components/CustomDynamicPage/CustomDynamicPage";
import { DropDown } from "../Components/DropDown/DropDown";
import { Footer } from "../Components/Footer/Footer";
import { Home } from "../Components/HomePage/Home";
<<<<<<< HEAD:src/Routes/Routes.jsx
import  NavBar  from "../Components/NavBar/NavBar";
=======
import { NavBar } from "../Components/NavBar/NavBar";
import { Ads } from "../Components/AdsModel/Ads";
import { ProductPage } from "../Components/ProductPage/ProductPage";

>>>>>>> 48bec79aacb4dc07078157791381d3d775679fb1:Frontend/src/Routes/Routes.jsx
const Routes = () => {
    return (
        <div>
            <NavBar />
            <DropDown />
            <Ads />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/product/:product">
                    <CustomDynamicPage />
                </Route>
                <Route path="/item">
                    <ProductPage />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
};

export default Routes;

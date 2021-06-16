import React from "react";
import { Route, Switch } from "react-router-dom";
import { CustomDynamicPage } from "../Components/CustomDynamicPage/CustomDynamicPage";
import { DropDown } from "../Components/DropDown/DropDown";
import { Footer } from "../Components/Footer/Footer";
import { Home } from "../Components/HomePage/Home";
import NavBar from "../Components/NavBar/NavBar";
import { Ads } from "../Components/AdsModel/Ads";
import { ProductPage } from "../Components/ProductPage/ProductPage";
import { IndividualProductPage } from "../Components/IndividualPage/IndividualproductPage";

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
                <Route exact path="/product/:product">
                    <CustomDynamicPage />
                </Route>
                <Route path="/product/:product/:category">
                    <IndividualProductPage/>
                </Route>
                <Route exact path="/item/:id">
                    <ProductPage />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
};

export default Routes;

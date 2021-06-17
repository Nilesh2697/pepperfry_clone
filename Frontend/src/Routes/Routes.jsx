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
import { useLocation } from 'react-router-dom';


const Routes = () => {

    const pathname = window.location.pathname

    return (
        <div>
            {pathname !== "/checkout" && <NavBar />}
            {pathname !== "/checkout" && <DropDown />}
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
                <Route exact path="/item/:id/:endpoint">
                    <ProductPage />
                </Route>
            </Switch>
            {pathname !== "/checkout" && <Footer />}
        </div>
    );
};

export default Routes;

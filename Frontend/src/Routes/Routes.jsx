import React from "react";
import { Route, Switch } from "react-router-dom";
import { CustomDynamicPage } from "../Components/CustomDynamicPage/CustomDynamicPage";
import { DropDown } from "../Components/DropDown/DropDown";
import { Footer } from "../Components/Footer/Footer";
import { Home } from "../Components/HomePage/Home";
import NavBar from "../Components/NavBar/NavBar";
import { Ads } from "../Components/AdsModel/Ads";
import { ProductPage } from "../Components/ProductPage/ProductPage";
import { CheckOutPage } from "../Components/CheckOut/CheckOutPage";
import { IndividualProductPage } from "../Components/IndividualPage/IndividualproductPage";

const Routes = () => {

  const path = "/checkout";
  return (
    <div>
      {!path === "/checkout" ? (
        <>
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
                <Route exact path="/item/:id/:endpoint">
                    <ProductPage />
                </Route>
            </Switch>
            <Footer />
        </>
      ) : (
        <Route path="/checkout">
          <CheckOutPage />
        </Route>
      )}
    </div>
  );
};

export default Routes;

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
const Routes = () => {
     const path= '/checkout'
    return (
        <div>
            {!path === '/checkout' ? <> 
        
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
            <Route>
                <h1>404 Page not found</h1>
            </Route>
            </Switch>
            <Footer /></>:
            <Route path='/checkout'>
                <CheckOutPage/>
            </Route>   
            }
           
            
        </div>
    );
};

export default Routes;

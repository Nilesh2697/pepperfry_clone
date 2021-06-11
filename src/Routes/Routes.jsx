import React from "react";
import { Route, Switch } from "react-router-dom";
import { CustomDynamicPage } from "../Components/CustomDynamicPage/CustomDynamicPage";
import { DropDown } from "../Components/DropDown/DropDown";
import { Footer } from "../Components/Footer/Footer";
import { Home } from "../Components/HomePage/Home";
import { NavBar } from "../Components/NavBar/NavBar";
const Routes = () => {
    return (
        <div>
            <NavBar />
            <DropDown />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/furniture">
                    <CustomDynamicPage />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
};

export default Routes;

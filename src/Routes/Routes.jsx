import React from 'react'
import {Route, Switch} from "react-router-dom"
import { DropDown } from '../Components/DropDown/DropDown'
import { Footer } from '../Components/Footer/Footer'
import { Home } from '../Components/HomePage/Home'
const Routes = () => {
    return (
        <div>
            <DropDown />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default Routes

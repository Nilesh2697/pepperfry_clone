import React from 'react'
import {Route, Switch} from "react-router-dom"
import { DropDown } from '../Components/DropDown/DropDown'
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
        </div>
    )
}

export default Routes

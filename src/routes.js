import React from "react";
import { Switch, Route } from "react-router-dom";

import Blocks from './pages/Blocks'
import Cards from './pages/Cards'
import Forms from './pages/Forms'
import Index from './pages/Index'
import Pricing from './pages/Pricing'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/blocks" component={Blocks}/>
            <Route path="/cards" component={Cards}/>
            <Route path="/forms" component={Forms}/>
            <Route path="/pricing" component={Pricing}/>
        </Switch>
    )
}
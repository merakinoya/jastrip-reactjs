import React, { Component } from 'react';
import UserProfile from '../pages/UserProfile';
import Homepage from '../pages/Homepage';
import Products from '../pages/Products';
import AuthApp from "../AuthApp";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default class SwitchRoute extends Component {
    render() {
        return (
            <Switch>

                <Route path="/userprofile" component={UserProfile} />
                <Route path="/authapp" component={AuthApp} />
                <Route path="/products" component={Products} />
                <Route path="/" component={Homepage} />

            </Switch>
        )
    }
}

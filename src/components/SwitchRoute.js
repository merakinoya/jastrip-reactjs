import React, { Component } from 'react';
import UserProfile from '../components/UserProfile';
import Homepage from '../components/Homepage';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export default class SwitchRoute extends Component {
    render() {
        return (
            <Switch>
                <Route path="/userprofile">
                    <UserProfile />
                </Route>

                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        )
    }
}

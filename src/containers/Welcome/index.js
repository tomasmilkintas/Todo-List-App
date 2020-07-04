import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Register from "../Authentication/Register/Index";
import Login from "../Authentication/Login";

class Welcome extends Component {
    render() {
        return (
            <BrowserRouter>
                <h1>Welcome!</h1>
                <Link to="/login">Login</Link>
                <Link to="/signup">Register</Link>

                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Register} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Welcome;

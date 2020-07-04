import React, { Component } from "react";
import "./App.css";

import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Login from "./containers/Authentication/Login";
import Register from "./containers/Authentication/Register/Index";
import Home from "./containers/Tasks/Home";

class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/login" component={Login}>
                    Login
                </Route>
                <Route path="/signup" component={Register}>
                    Register
                </Route>
                <Route path="/home" component={Home} />

                <Redirect to="/" />
            </Switch>
        );
        return (
            <div className="App">
                <Layout>{routes}</Layout>
            </div>
        );
    }
}

export default withRouter(App);

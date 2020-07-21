import React, { Component } from "react";
import "./App.css";

import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Login from "./containers/Authentication/Login";
import Register from "./containers/Authentication/Register/Index";
import Home from "./containers/Tasks/Home";
import Welcome from "./containers/Welcome";
import PasswordRecovery from "./containers/Authentication/ForgotPassword";
import Profile from "./containers/Profile";

import * as actions from "./store/actions/index";
import { connect } from "react-redux";

class App extends Component {
    componentDidMount() {
        this.props.onAuthStateChanged();
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Register} />
                    <Route path="/reset" component={PasswordRecovery} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/home" component={Home} />
                    <Route path="/" component={Welcome} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthStateChanged: () => dispatch(actions.authStateChanged()),
    };
};

export default connect(null, mapDispatchToProps)(withRouter(App));

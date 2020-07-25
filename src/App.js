import React, { Component } from "react";
import "./App.css";

import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Login from "./containers/Authentication/Login";
import Register from "./containers/Authentication/Register/Index";
import Home from "./containers/Tasks/Home";
import Todo from "./containers/Tasks/Todo";
import Doing from "./containers/Tasks/Doing";
import Complete from "./containers/Tasks/Complete";
import Welcome from "./containers/Welcome";
import PasswordRecovery from "./containers/Authentication/ForgotPassword";
import Profile from "./containers/Profile";
import UpdateProfile from "./containers/Profile/UpdateProfile";

import * as actions from "./store/actions/index";
import { connect } from "react-redux";
import NewTask from "./API/NewTask";

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
                    <Route path="/updateprofile" component={UpdateProfile} />
                    <Route path="/home" component={Home} />
                    <Route path="/todo" component={Todo} />
                    <Route path="/doing" component={Doing} />
                    <Route path="/complete" component={Complete} />
                    <Route path="/new" component={NewTask} />
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

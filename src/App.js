import React, { Component } from "react";
import "./App.css";

import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Login from "./containers/Authentication/Login";
import Register from "./containers/Authentication/Register/Index";
import Home from "./containers/Tasks/Home";
import firebaseInit from "./API/config/FirebaseInit";
import Welcome from "./containers/Welcome";
import PasswordRecovery from "./containers/Authentication/ForgotPassword";
import Profile from "./containers/Profile";

import * as actions from "./store/actions/index";
import { connect } from "react-redux";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
        };
    }

    authListener() {
        // user + auth reducer

        firebaseInit.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ ...user });

                // this.props.getUserData();
                console.log(user);

                let newUser = new Date() - new Date(user.metadata.creationTime) < 3000;

                if (newUser) {
                    firebaseInit.auth().signOut();
                    this.props.history.push("/login");
                } else {
                    this.props.history.push("/home");
                }
            } else {
                this.setState({ user: null });
            }
        });
    }

    componentDidMount() {
        this.authListener();
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
        onLogin: () => dispatch(actions.loginUser()),
        onGetUserData: () => dispatch(actions.getUserData()),
    };
};

export default connect(null, mapDispatchToProps)(withRouter(App));

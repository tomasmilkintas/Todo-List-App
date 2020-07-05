import React, { Component } from "react";
import "./App.css";

import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Login from "./containers/Authentication/Login";
import Register from "./containers/Authentication/Register/Index";
import Home from "./containers/Tasks/Home";
import firebaseInit from "./API/config/FirebaseInit";
import Welcome from "./containers/Welcome";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
        };
    }

    authListener() {
        firebaseInit.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user: user });
                localStorage.setItem("user", user.uid);
                this.props.history.push("/home");
            } else {
                this.setState({ user: null });
                localStorage.removeItem("user");
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
                    <Route path="/home" component={Home} />
                    <Route path="/" component={Welcome} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);

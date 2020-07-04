import React, { Component } from "react";

import Aux from "../Aux/Aux";

import fire from "../../API/config/Fire";

import Welcome from "../../containers/Welcome";
// import Login from "../../containers/Authentication/Login";

import Home from "../../containers/Tasks/Home/index";

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
        };
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            // console.log(user);
            if (user) {
                this.setState({ user: user });
                localStorage.setItem("user", user.uid);
                console.log("logged in");
            } else {
                this.setState({ user: null });
                localStorage.removeItem("user");
                console.log("not logged in");
            }
        });
    }

    componentDidMount() {
        this.authListener();
    }

    render() {
        return <Aux>{this.state.user ? <Home /> : <Welcome />}</Aux>;
    }
}

export default Layout;

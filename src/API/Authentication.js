import React, { Component } from "react";
import Form from "../stories/Form";

import Button from "../stories/Button";
import Input from "../stories/Input";

import fire from "./config/Fire";

class Authentication extends Component {
    constructor(props) {
        super(props);

        // this.signupHandler = this.signupHandler.bind(this);
        // this.loginHandler = this.loginHandler.bind(this);
        // this.changeHandler = this.changeHandler.bind(this);

        this.state = {
            email: "",
            password: "",
            returnSecureToken: true,
            idToken: "",
        };
    }

    loginHandler(event) {
        event.preventDefault();

        fire.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => console.log(res))
            .catch((err) => console.log(err.message));
    }

    signupHandler(event) {
        event.preventDefault();
        this.setState({ email: event.target.value, password: event.target.value });
        fire.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) =>
                fire
                    .auth()
                    .currentUser.getIdToken(true)
                    .then((idToken) => console.log(idToken))
                    .catch((err) => console.log(err))
            )
            .catch((err) => console.log(err.message));
        console.log(this.state.email, this.state.password);
    }

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <Form method="POST">
                    <h1> Log in</h1>
                    <Input
                        onChange={(e) => this.changeHandler(e)}
                        placeholder="Your Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                    />
                    <Input
                        onChange={(e) => this.changeHandler(e)}
                        placeholder="Your Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                    />
                    <Button onClick={(e) => this.loginHandler(e)}>Login</Button>
                    <Button onClick={(e) => this.signupHandler(e)}>Signup</Button>
                </Form>
            </div>
        );
    }
}

export default Authentication;

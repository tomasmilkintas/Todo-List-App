import React, { Component } from "react";
import Form from "../../../stories/Form/index";

import Button from "../../../stories/Button";
import Input from "../../../stories/Input";

import { signupHandler } from "../../../API/Authentication";
import { Redirect, Link } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            returnSecureToken: true,
            idToken: "",
            redirect: false,
        };
    }

    signup(event) {
        event.preventDefault();
        signupHandler(this.state.email, this.state.password);
    }

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    clicked() {
        this.setState({ redirect: true });
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/login" />;
        }
        return (
            <div>
                <Form method="POST">
                    <h1> Sign up</h1>
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
                    <Button onClick={(e) => this.signup(e)}>Sign up</Button>
                    <p>
                        Got an account?{" "}
                        <Link onClick={() => this.clicked()} to="/login">
                            Log in
                        </Link>
                    </p>
                </Form>
            </div>
        );
    }
}

export default Register;

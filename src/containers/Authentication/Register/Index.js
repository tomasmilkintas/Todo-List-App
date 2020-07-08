import React, { Component } from "react";
import Form from "../../../stories/Form/index";

import Button from "../../../stories/Button";
import Input from "../../../stories/Input";

import { signupHandler } from "../../../API/Authentication";
import { Redirect, Link } from "react-router-dom";
import Text from "../../../stories/Text";
import TitleText from "../../../stories/TitleText";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            userId: "",
            redirect: false,
            returnSecureToken: true,
        };
    }

    signup(event) {
        event.preventDefault();
        signupHandler(
            this.state.email,
            this.state.password,
            this.state.firstName,
            this.state.lastName
        );
        alert("Success, login now!");
        console.log(this.state.name);
    }

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleOnClick() {
        this.setState({ redirect: true });
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/login" />;
        }
        return (
            <Form method="POST">
                <TitleText> Sign up</TitleText>
                <Input
                    onChange={(e) => this.changeHandler(e)}
                    placeholder="Your Name"
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                />
                <Input
                    onChange={(e) => this.changeHandler(e)}
                    placeholder="Your Surname"
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                />
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
                <Text>
                    Got an account?{" "}
                    <Link onClick={() => this.handleOnClick()} to="/login">
                        Log in
                    </Link>
                </Text>
            </Form>
        );
    }
}

export default Register;

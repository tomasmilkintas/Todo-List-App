import React, { Component } from "react";
import Form from "../../../stories/Form/index";

import Button from "../../../stories/Button";
import Input from "../../../stories/Input";

import { signupHandler } from "../../../API/Authentication";
import { Redirect, Link } from "react-router-dom";
import Text from "../../../stories/Text";
import TitleText from "../../../stories/TitleText";

const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userId: "",
    redirect: false,
    returnSecureToken: true,
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
};

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    validationHandler = () => {
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let passwordError = "";

        if (!this.state.email.includes("@")) {
            emailError = "Please enter a valid email address";
        }
        if (this.state.firstName === "") {
            firstNameError = "Cannot be blank";
        }
        if (this.state.lastName === "") {
            lastNameError = "Cannot be blank";
        }

        if (this.state.password.length < 8) {
            passwordError = "Password should be 8 characters or more";
        }

        if (firstNameError || lastNameError || emailError || passwordError) {
            this.setState({ passwordError });
            this.setState({ emailError });
            this.setState({ firstNameError });
            this.setState({ lastNameError });
            return false;
        }
        return true;
    };

    signup(event) {
        event.preventDefault();
        const isValid = this.validationHandler();
        console.log(isValid);

        if (isValid) {
            signupHandler(
                this.state.email,
                this.state.password,
                this.state.firstName,
                this.state.lastName
            );
            alert("Success, login now!");
        } else {
        }
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
                <Text style={{ color: "red", fontSize: "14px" }}>{this.state.firstNameError}</Text>
                <Input
                    onChange={(e) => this.changeHandler(e)}
                    placeholder="Your Name"
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                />
                <Text style={{ color: "red", fontSize: "14px" }}>{this.state.lastNameError}</Text>
                <Input
                    onChange={(e) => this.changeHandler(e)}
                    placeholder="Your Surname"
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                />

                <Text style={{ color: "red", fontSize: "14px" }}>{this.state.emailError}</Text>
                <Input
                    onChange={(e) => this.changeHandler(e)}
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    value={this.state.email}
                />

                <Text style={{ color: "red", fontSize: "14px" }}>{this.state.passwordError}</Text>
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

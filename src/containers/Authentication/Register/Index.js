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
            name: {
                firstName: "",
                lastName: "",
            },
            returnSecureToken: true,
            idToken: "",
            redirect: false,
        };
    }

    signup(event) {
        event.preventDefault();
        signupHandler(this.state.email, this.state.password, this.state.name.firstName);
        console.log(this.state.name);
        alert("Success, login now!");
        this.props.history.push("/login");
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
                    name="name"
                    value={this.state.name.firstName}
                />
                <Input
                    onChange={(e) => this.changeHandler(e)}
                    placeholder="Your Surname"
                    type="text"
                    name="surname"
                    value={this.state.name.lastName}
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

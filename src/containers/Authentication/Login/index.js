import React, { Component } from "react";
import Form from "../../../stories/Form/index";

import Button from "../../../stories/Button";
import Input from "../../../stories/Input";

import { loginHandler } from "../../../API/Authentication";
import { Link, Redirect } from "react-router-dom";
import Text from "../../../stories/Text";
import TitleText from "../../../stories/TitleText";

class Login extends Component {
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

    login(event) {
        event.preventDefault();
        loginHandler(this.state.email, this.state.password);
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
            return <Redirect to="/signup" />;
        }

        return (
            <Form method="POST">
                <TitleText> Log in</TitleText>
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
                <Button onClick={(e) => this.login(e)}>Login</Button>
                <Text>
                    Don't have an account?
                    <Link onClick={() => this.handleOnClick()} to="/login">
                        Register
                    </Link>
                </Text>
                <Text>
                    Having trouble logging in?
                    <Link onClick={() => this.handleOnClick()} to="/reset">
                        Reset your password
                    </Link>
                </Text>
            </Form>
        );
    }
}

export default Login;

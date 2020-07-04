import React, { Component } from "react";
import Form from "../../../stories/Form/index";

import Button from "../../../stories/Button";
import Input from "../../../stories/Input";

import { loginHandler } from "../../../API/Authentication";
import { Link, Redirect } from "react-router-dom";

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

    clicked() {
        this.setState({ redirect: true });
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/signup" />;
        }
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
                    <Button onClick={(e) => this.login(e)}>Login</Button>
                    <p>
                        Don't have an account?
                        <Link onClick={() => this.clicked()} to="/login">
                            Register
                        </Link>
                    </p>
                </Form>
            </div>
        );
    }
}

export default Login;

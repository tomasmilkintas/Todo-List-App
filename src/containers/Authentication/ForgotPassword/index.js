import React, { Component } from "react";

import Input from "../../../stories/Input";
import Button from "../../../stories/Button";
import Text from "../../../stories/Text";

import { PasswordRecoveryHandler } from "../../../API/Authentication";
import Form from "../../../stories/Form";

class PasswordRecovery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
        };
    }

    emailHandler(event) {
        event.preventDefault();
        PasswordRecoveryHandler(this.state.email);
        this.props.history.push("/");
    }

    returnHandler(event) {
        event.preventDefault();
        this.props.history.push("/login");
    }

    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <Form method="POST">
                <Text>Enter a valid email address to reset your password!</Text>
                <Input
                    onChange={(e) => this.changeHandler(e)}
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    value={this.state.email}
                />{" "}
                <Button onClick={(e) => this.emailHandler(e)}>Reset Password</Button>
                <Button onClick={(e) => this.returnHandler(e)}>Go back &#10226;</Button>
            </Form>
        );
    }
}

export default PasswordRecovery;

import React, { Component } from "react";

import Input from "../../../stories/Input";
import Button from "../../../stories/Button";
import Text from "../../../stories/Text";

import { PasswordRecoveryHandler } from "../../../API/Authentication";
import Form from "../../../stories/Form";
import Box from "../../../stories/Box";

class PasswordRecovery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            emailError: "",
        };
    }

    validationHandler = () => {
        let emailError = "";
        if (!this.state.email.includes("@")) {
            emailError = "Please enter a valid email address";
        }
        if (emailError) {
            this.setState({ emailError });
            return false;
        }
        return true;
    };

    emailHandler(event) {
        event.preventDefault();
        const isValid = this.validationHandler();
        if (isValid) {
            PasswordRecoveryHandler(this.state.email);
            this.props.history.push("/");
        }
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

                <Box>
                    <Text
                        style={
                            this.state.emailError === ""
                                ? { color: "white", fontSize: "14px" }
                                : { color: "red", fontSize: "14px" }
                        }
                    >
                        {this.state.emailError}
                    </Text>
                    <Input
                        onChange={(e) => this.changeHandler(e)}
                        placeholder="Your Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                    />
                </Box>
                <Button onClick={(e) => this.emailHandler(e)}>Reset Password</Button>
                <Button onClick={(e) => this.returnHandler(e)}>Go back &#10226;</Button>
            </Form>
        );
    }
}

export default PasswordRecovery;

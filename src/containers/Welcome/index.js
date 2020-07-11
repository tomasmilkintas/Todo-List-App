import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import TitleText from "../../stories/TitleText";
import Form from "../../stories/Form";
import Button from "../../stories/Button";
import Box from "../../stories/Box";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLogin: false,
            redirectSignup: false,
        };
    }

    handleOnClickLogin() {
        this.setState({ redirectLogin: true });
    }
    handleOnClickSingup() {
        this.setState({ redirectSignup: true });
    }

    render() {
        const { redirectLogin } = this.state;
        const { redirectSignup } = this.state;

        if (redirectLogin) {
            return <Redirect to="/login" />;
        }
        if (redirectSignup) {
            return <Redirect to="/signup" />;
        }
        return (
            <Form>
                <TitleText>Welcome</TitleText>
                <Box>
                    <Button onClick={() => this.handleOnClickLogin()}>Login</Button>
                    <Button onClick={() => this.handleOnClickSingup()}>Signup</Button>
                </Box>
            </Form>
        );
    }
}

export default Welcome;

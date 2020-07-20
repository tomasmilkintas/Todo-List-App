import React, { Component } from "react";
import Form from "../../../stories/Form/index";

import Button from "../../../stories/Button";
import Input from "../../../stories/Input";

// import { loginHandler } from "../../../API/Authentication";
import { Link, Redirect } from "react-router-dom";
import Text from "../../../stories/Text";
import TitleText from "../../../stories/TitleText";
import TextInputContainer from "../../../stories/TextInputContainer";

import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirect: false,
            //         emailError: "",
            //         passwordError: "",
        };
    }

    // validationHandler = () => {
    //     let emailError = "";
    //     let passwordError = "";

    //     if (!this.state.email.includes("@")) {
    //         emailError = "Please enter a valid email address";
    //     }

    //     if (this.state.password.length < 8) {
    //         passwordError = "Password should be 8 characters or more";
    //     }

    //     if (emailError || passwordError) {
    //         this.setState({ passwordError });
    //         this.setState({ emailError });
    //         return false;
    //     }
    //     return true;
    // };

    login(event) {
        event.preventDefault();
        // const isValid = this.validationHandler();
        // if (isValid) {
        this.props.onLogin(this.state.email, this.state.password);
        // }
    }

    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleOnClick() {
        // this.setState({ redirect: true });
        this.props.history.push(this.props.authRedirectPath);
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/signup" />;
        }

        return (
            <Form method="POST">
                <TitleText> Log in</TitleText>

                <TextInputContainer>
                    {/* <Text
                        style={
                            this.state.emailError === ""
                                ? { color: "white", fontSize: "14px" }
                                : { color: "red", fontSize: "14px" }
                        }
                    >
                        {this.state.emailError}
                    </Text> */}
                    <Input
                        onChange={(e) => this.changeHandler(e)}
                        placeholder="Your Email"
                        type="email"
                        name="email"
                        value={this.state.email}
                    />
                </TextInputContainer>
                <TextInputContainer>
                    {/* <Text
                        style={
                            this.state.passwordError === ""
                                ? { color: "white", fontSize: "14px" }
                                : { color: "red", fontSize: "14px" }
                        }
                    >
                        {this.state.passwordError}
                    </Text> */}
                    <Input
                        onChange={(e) => this.changeHandler(e)}
                        placeholder="Your Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                    />
                </TextInputContainer>
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

// preparing for conversion

const mapStateToProps = (state) => ({
    email: state.user.email,
    password: state.user.password,
    authRedirectPath: state.user.authRedirectPath,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(actions.loginUser(email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

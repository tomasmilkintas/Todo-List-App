import React, { useState } from "react";
import Form from "../../../stories/Form/index";

import Button from "../../../stories/Button";
import Input from "../../../stories/Input";

import { Link } from "react-router-dom";
import Text from "../../../stories/Text";
import TitleText from "../../../stories/TitleText";
import TextInputContainer from "../../../stories/TextInputContainer";

import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

import { emailValidation, passwordValidation } from "../../../API/Validation";

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setpasswordError] = useState("");

    const textErrorStyle = {
        color: emailError === "" ? "white" : "red",
        fontSize: emailError === "" ? "16px" : "16px",
        fontWeight: "400",
    };

    const loginHandler = (event) => {
        event.preventDefault();
        const notValidEmail = emailValidation(enteredEmail);
        const notValidPassword = passwordValidation(enteredPassword);

        if (!notValidEmail && !notValidPassword) {
            props.onLogin(enteredEmail, enteredPassword);
            // if (props.error !== false) {
            props.history.push("/home");
            // } else {
            //     props.history.push("/login");
            // }
        } else {
            setEmailError(notValidEmail);
            setpasswordError(notValidPassword);
        }
    };

    const handleOnClick = () => {
        props.history.push(props.authRedirectPath);
    };

    return (
        <Form method="POST">
            <TitleText> Log in</TitleText>

            <TextInputContainer>
                <Text style={textErrorStyle}>{emailError}</Text>
                <Input
                    onChange={(e) => {
                        setEnteredEmail(e.target.value);
                    }}
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    value={enteredEmail}
                />
            </TextInputContainer>

            <TextInputContainer>
                <Text style={textErrorStyle}>{passwordError}</Text>
                <Input
                    onChange={(e) => {
                        setEnteredPassword(e.target.value);
                    }}
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    value={enteredPassword}
                />
            </TextInputContainer>

            <Button onClick={(e) => loginHandler(e)}>Login</Button>
            <Text>
                Don't have an account?
                <Link onClick={() => handleOnClick()} to="/signup">
                    Register
                </Link>
            </Text>
            <Text>
                Having trouble logging in?
                <Link onClick={() => handleOnClick()} to="/reset">
                    Reset your password
                </Link>
            </Text>
        </Form>
    );
};

const mapStateToProps = (state) => ({
    error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(actions.loginUser(email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

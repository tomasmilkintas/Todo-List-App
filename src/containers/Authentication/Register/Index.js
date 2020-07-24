import React, { useState } from "react";
import Form from "../../../stories/Form/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../../../stories/Button";
import Input from "../../../stories/Input";

import Text from "../../../stories/Text";
import TitleText from "../../../stories/TitleText";
import TextInputContainer from "../../../stories/TextInputContainer";

import * as actions from "../../../store/actions/userActions";

import {
    emailValidation,
    passwordValidation,
    firstNameValidation,
    lastNameValidation,
} from "../../../API/Validation";

const Register = (props) => {
    const [enteredFirstName, setEnteredFirstName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const [passwordError, setpasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const textErrorStyle = {
        color: firstNameError === "" ? "white" : "red",
        fontSize: firstNameError === "" ? "14px" : "14px",
    };

    const signup = (event) => {
        event.preventDefault();

        const notValidFirstName = firstNameValidation(enteredFirstName);
        const notValidLastName = lastNameValidation(enteredLastName);
        const notValidEmail = emailValidation(enteredEmail);
        const notValidPassword = passwordValidation(enteredPassword);

        if (!notValidFirstName && !notValidLastName && !notValidEmail && !notValidPassword) {
            props.onRegister(enteredFirstName, enteredLastName, enteredEmail, enteredPassword);
            alert("Success, login now!");
            props.history.push("/login");
        } else {
            setFirstNameError(notValidFirstName);
            setLastNameError(notValidLastName);
            setEmailError(notValidEmail);
            setpasswordError(notValidPassword);
        }
    };

    const handleOnClick = () => {
        props.history.push("/login");
    };

    return (
        <Form method="POST">
            <TitleText> Sign up</TitleText>

            <TextInputContainer>
                <Text style={textErrorStyle}>{firstNameError}</Text>

                <Input
                    onChange={(e) => {
                        setEnteredFirstName(e.target.value);
                    }}
                    placeholder="Your Name"
                    type="text"
                    name="firstName"
                    value={enteredFirstName}
                />
            </TextInputContainer>

            <TextInputContainer>
                <Text style={textErrorStyle}>{lastNameError}</Text>
                <Input
                    onChange={(e) => {
                        setEnteredLastName(e.target.value);
                    }}
                    placeholder="Your Surname"
                    type="text"
                    name="lastName"
                    value={enteredLastName}
                />
            </TextInputContainer>

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

            <Button onClick={(e) => signup(e)}>Sign up</Button>
            <Text>
                Got an account?{" "}
                <Link onClick={() => handleOnClick()} to="/login">
                    Log in
                </Link>
            </Text>
        </Form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (firstName, lastName, email, password) =>
            dispatch(actions.registerUser(firstName, lastName, email, password)),
    };
};

export default connect(null, mapDispatchToProps)(Register);

import React, { useState } from "react";

import Input from "../../../stories/Input";
import Button from "../../../stories/Button";
import Text from "../../../stories/Text";

import TextInputContainer from "../../../stories/TextInputContainer";

import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import { emailValidation } from "../../../API/Validation";
import Container from "../../../stories/Container";

const PasswordRecovery = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const textErrorStyle = {
        color: emailError === "" ? "white" : "red",
        fontSize: emailError === "" ? "16px" : "16px",
        fontWeight: "400",
    };

    const emailHandler = (event) => {
        event.preventDefault();
        const notValidEmail = emailValidation(enteredEmail);

        if (!notValidEmail) {
            props.onRecover(enteredEmail);
            props.history.push("/");
        } else {
            setEmailError(notValidEmail);
        }
    };

    const returnHandler = (event) => {
        event.preventDefault();
        props.history.push("/login");
    };

    return (
        <Container>
            <Text className="resetText"> Enter a valid email address to reset your password!</Text>

            <TextInputContainer className="resetInput">
                <Text style={textErrorStyle}>{emailError}</Text>
                <Input
                    onChange={(e) => setEnteredEmail(e.target.value)}
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    value={enteredEmail}
                />
            </TextInputContainer>

            <Button onClick={(e) => emailHandler(e)}>Reset Password</Button>
            <Button onClick={(e) => returnHandler(e)}>Go back &#10226;</Button>
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRecover: (email) => dispatch(actions.recoverUser(email)),
    };
};

export default connect(null, mapDispatchToProps)(PasswordRecovery);

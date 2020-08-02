import React, { useState } from "react";

import Text from "../../stories/Text";
import Button from "../../stories/Button/index";
import Input from "../../stories/Input/index";
import Container from "../../stories/Container";
import TitleText from "../../stories/TitleText";
import TextInputContainer from "../../stories/TextInputContainer";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { firstNameValidation, lastNameValidation } from "../../API/Validation";

const Profile = (props) => {
    const [enteredFirstName, setEnteredFirstName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const textErrorStyle = {
        color: firstNameError === "" ? "white" : "red",
        fontSize: firstNameError === "" ? "16px" : "16px",
        fontWeight: "400",
    };

    const returnHandler = (event) => {
        event.preventDefault();
        props.history.push("/profile");
    };

    const updateHandler = (event) => {
        event.preventDefault();
        const notValidFirstName = firstNameValidation(enteredFirstName);
        const notValidLastName = lastNameValidation(enteredLastName);

        if (!notValidFirstName && !notValidLastName) {
            props.history.push("/profile");
            props.onUpdate(enteredFirstName, enteredLastName);
        } else {
            setFirstNameError(notValidFirstName);
            setLastNameError(notValidLastName);
        }
    };

    return (
        <Container>
            <TitleText className="profileTitle">Update Profile</TitleText>

            <TextInputContainer className="updateProfileTop">
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

            <TextInputContainer className="updateProfileBottom">
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

            <Text className="profile bottom">
                <b>Email: </b>
                {props.email}
            </Text>

            <Button onClick={(e) => updateHandler(e)}>Confirm</Button>
            <Button onClick={(e) => returnHandler(e)}>Go Back &#10226;</Button>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    email: state.database.email,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdate: (firstName, lastName) => dispatch(actions.updateUser(firstName, lastName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

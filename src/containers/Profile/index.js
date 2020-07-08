import React, { Component } from "react";

import Text from "../../stories/Text";
import Button from "../../stories/Button/index";
import Container from "../../stories/Container";
import TitleText from "../../stories/TitleText";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            email: "",
            firstName: "",
            lastName: "",
        };
    }

    returnHandler(event) {
        event.preventDefault();
        this.props.history.push("/home");
    }
    updateHandler(event) {
        event.preventDefault();
        // logic for updating user to be added shortly
    }

    render() {
        return (
            <Container>
                <TitleText id="name">Hello, {this.state.firstName}</TitleText>

                <Text>UserId: {this.state.userId}</Text>
                <Text>Your Email: {this.state.email}</Text>
                <Text>Your Name: {this.state.firstName}</Text>
                <Text>Your Surname: {this.state.lastName}</Text>

                <Button onClick={(e) => this.updateHandler(e)}>Update Profile</Button>
                <Button onClick={(e) => this.returnHandler(e)}>Go Back &#10226;</Button>
            </Container>
        );
    }
}

export default Profile;

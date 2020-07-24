import React, { Component } from "react";

import Text from "../../stories/Text";
import Button from "../../stories/Button/index";
import Container from "../../stories/Container";
import TitleText from "../../stories/TitleText";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class Profile extends Component {
    returnHandler(event) {
        event.preventDefault();
        this.props.history.push("/home");
    }
    updateHandler(event) {
        event.preventDefault();
        // logic for updating user to be added shortly
        this.props.history.push("/updateprofile");
    }

    render() {
        return (
            <Container>
                <TitleText>Profile Summary</TitleText>

                <Text>
                    <b>Your Name: </b>
                    {this.props.firstName}
                </Text>
                <Text>
                    <b>Your Surname: </b>
                    {this.props.lastName}
                </Text>

                <Text>
                    <b>Email: </b>
                    {this.props.email}
                </Text>

                <Button onClick={(e) => this.updateHandler(e)}>Update Profile</Button>
                <Button onClick={(e) => this.returnHandler(e)}>Go Back &#10226;</Button>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    email: state.database.email,
    firstName: state.database.firstName,
    lastName: state.database.lastName,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(actions.loginUser(email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

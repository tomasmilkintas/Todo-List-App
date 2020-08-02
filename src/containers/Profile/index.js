import React, { Component } from "react";

import Text from "../../stories/Text";
import Button from "../../stories/Button/index";
import Container from "../../stories/Container";
import TitleText from "../../stories/TitleText";

import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class Profile extends Component {
    clickHandler(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <Container>
                <TitleText className="profileTitle">Profile Summary</TitleText>

                <Text className="profile top">
                    <b>Your Name: </b>
                    {this.props.firstName}
                </Text>
                <Text className="profile">
                    <b>Your Surname: </b>
                    {this.props.lastName}
                </Text>

                <Text className="profile bottom">
                    <b>Email: </b>
                    {this.props.email}
                </Text>

                <Button onClick={() => this.clickHandler("/updateprofile")}>Update Profile</Button>
                <Button onClick={() => this.clickHandler("/home")}>Go Back &#10226;</Button>
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

import React, { Component } from "react";
import firebaseInit from "../../../API/config/FirebaseInit";

import Button from "../../../stories/Button/index";
import StatusBarTop from "../../../stories/StatusBarTop";
import StatusBarBottom from "../../../stories/StatusBarBottom";
import Container from "../../../stories/Container";
import TitleText from "../../../stories/TitleText";
import Tasks from "../../../API/Tasks";
import { getValueHandler } from "../../../API/Database";

import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
        };
        this.logout = this.logout.bind(this);
        this.profileHandler = this.profileHandler.bind(this);
    }

    logout() {
        this.props.onLogout();
        this.props.history.push("/");
    }

    profileHandler() {
        this.props.history.push("/profile");
    }

    authListener() {
        firebaseInit.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ firstName: user.displayName });
                getValueHandler();
            } else {
                this.setState({ firstName: null });
            }
        });
    }

    componentDidMount() {
        this.authListener();
    }

    render() {
        return (
            // visualising the home
            <Container>
                <StatusBarTop>
                    <Button onClick={this.profileHandler}>Profile</Button>
                    <Button onClick={this.logout}>Logout</Button>
                </StatusBarTop>

                <TitleText id="name">Hello, {this.state.firstName}</TitleText>

                {/* if no tasks - */}
                {/* <Text>Looks like you don’t have any tasks, go ahead and create a new task!</Text> */}

                {/* else - */}

                <Tasks />

                <StatusBarBottom>Icons</StatusBarBottom>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logoutUser()),
        onGetUserData: () => dispatch(actions.getUserData()),
    };
};

export default connect(null, mapDispatchToProps)(Home);

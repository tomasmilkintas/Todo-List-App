import React from "react";

import Button from "../../../stories/Button/index";
import StatusBarTop from "../../../stories/StatusBarTop";
import StatusBarBottom from "../../../stories/StatusBarBottom";
import Container from "../../../stories/Container";
import TitleText from "../../../stories/TitleText";
// import Text from "../../../stories/TitleText";
import Tasks from "../../../API/Tasks";

import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

const Home = (props) => {
    const taskAddHandler = () => {
        props.history.push("/new");
    };

    const logout = () => {
        props.onLogout();
        props.history.push("/");
    };

    const profileHandler = () => {
        props.history.push("/profile");
    };

    return (
        <Container>
            <StatusBarTop>
                <Button onClick={profileHandler}>Profile</Button>
                <Button onClick={logout}>Logout</Button>
            </StatusBarTop>

            <TitleText id="name">Hello, {props.firstName}</TitleText>

            <Button onClick={() => taskAddHandler()}>Add +</Button>

            {/* {props.taskList !== [] ? (
                <Text>Looks like you don’t have any tasks, go ahead and create a new task!</Text>
            ) : ( */}
            <Tasks />
            {/* )} */}

            <StatusBarBottom>Icons</StatusBarBottom>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    firstName: state.database.firstName,
    taskList: state.tasks.taskList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logoutUser()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

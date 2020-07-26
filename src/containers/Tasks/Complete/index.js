import React from "react";

import Button from "../../../stories/Button/index";
import StatusBarTop from "../../../stories/StatusBarTop";
import StatusBarBottom from "../../../stories/StatusBarBottom";
import Container from "../../../stories/Container";
import TitleText from "../../../stories/TitleText";

import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

import TasksComplete from "../../../API/TasksComplete";

const Todo = (props) => {
    const clickHandler = (path) => {
        props.history.push(path);
    };

    const logout = () => {
        props.onLogout();
        props.history.push("/");
    };

    return (
        <Container>
            <StatusBarTop>
                <Button onClick={() => clickHandler("/profile")}>Profile</Button>
                <Button onClick={logout}>Logout</Button>
            </StatusBarTop>
            <TitleText id="complete">Completed Tasks</TitleText>
            <TasksComplete />
            <StatusBarBottom>
                <Button onClick={() => clickHandler("/home")}>Home</Button>
                <Button onClick={() => clickHandler("/todo")}>Todo</Button>
                <Button onClick={() => clickHandler("/doing")}>Doing</Button>
                <Button onClick={() => clickHandler("/complete")}>Complete</Button>
            </StatusBarBottom>{" "}
        </Container>
    );
};

const mapStateToProps = (state) => ({
    tasksComplete: state.tasks.tasksComplete,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logoutUser()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

import React, { useState } from "react";

import Button from "../stories/Button/index";
import StatusBarTop from "../stories/StatusBarTop";
import StatusBarBottom from "../stories/StatusBarBottom";
import Container from "../stories/Container";
import Input from "../stories/Input";
import TitleText from "../stories/TitleText";

import * as actions from "../store/actions/index";
import { connect } from "react-redux";

const NewTask = (props) => {
    const [enteredTask, setEnteredTask] = useState("");

    const taskAddHandler = () => {
        //redux for adding tasks
        props.history.push("/home");
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

            <TitleText id="title">New Task</TitleText>

            <Input
                type="text"
                placeholder="Title..."
                value={enteredTask}
                onChange={(e) => {
                    setEnteredTask(e.target.value);
                }}
            />

            <Button onClick={() => taskAddHandler()}>Submit</Button>

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

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);

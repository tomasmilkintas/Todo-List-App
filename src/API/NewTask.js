import React, { useState } from "react";

import Button from "../stories/Button/index";
import StatusBarTop from "../stories/StatusBarTop";
import StatusBarBottom from "../stories/StatusBarBottom";
import Container from "../stories/Container";
import Input from "../stories/Input";
import TitleText from "../stories/TitleText";
import Text from "../stories/Text";
import TextArea from "../stories/TextArea";
import TextInputContainer from "../stories/TextInputContainer";

import * as actions from "../store/actions/index";
import { connect } from "react-redux";
import { taskTitleValidation, taskDescriptionValidation } from "../API/Validation";

const NewTask = (props) => {
    const [enteredTaskTitle, setEnteredTaskTitle] = useState("");
    const [enteredTaskDescription, setEnteredTaskDescription] = useState("");
    const [taskTitleError, setTaskTitleError] = useState("");
    const [taskDescriptionError, setTaskDescriptionError] = useState("");

    const textErrorStyle = {
        color: taskTitleError === "" ? "white" : "red",
        fontSize: taskTitleError === "" ? "14px" : "14px",
    };

    const taskAddHandler = () => {
        const notValidTaskTitle = taskTitleValidation(enteredTaskTitle);
        const notValidTaskDescription = taskDescriptionValidation(enteredTaskDescription);

        if (!notValidTaskTitle && !notValidTaskDescription) {
            props.history.push("/home");
            props.onCreateTask(enteredTaskTitle, enteredTaskDescription);
        } else {
            setTaskTitleError(notValidTaskTitle);
            setTaskDescriptionError(notValidTaskDescription);
        }
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

            <TextInputContainer>
                <Text style={textErrorStyle}>{taskTitleError}</Text>
                <Input
                    type="text"
                    placeholder="Title..."
                    value={enteredTaskTitle}
                    onChange={(e) => {
                        setEnteredTaskTitle(e.target.value);
                    }}
                />
            </TextInputContainer>

            <TextInputContainer>
                <Text style={textErrorStyle}>{taskDescriptionError}</Text>
                <TextArea
                    type="text"
                    placeholder="Description..."
                    value={enteredTaskDescription}
                    onChange={(e) => {
                        setEnteredTaskDescription(e.target.value);
                    }}
                />
            </TextInputContainer>

            <Button onClick={() => taskAddHandler()}>Submit</Button>

            <StatusBarBottom>Icons</StatusBarBottom>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    taskList: state.tasks.taskList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logoutUser()),
        onCreateTask: (title, description) => dispatch(actions.createTask(title, description)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faTasks,
    faCalendarCheck,
    faListUl,
    faUserCircle,
    faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

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
            props.history.push("/todo");
            props.onCreateTask(enteredTaskTitle, enteredTaskDescription);
        } else {
            setTaskTitleError(notValidTaskTitle);
            setTaskDescriptionError(notValidTaskDescription);
        }
    };

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
                <div>
                    <FontAwesomeIcon
                        size="3x"
                        icon={faUserCircle}
                        onClick={() => clickHandler("/profile")}
                    />
                    Profile
                </div>
                <div>
                    <FontAwesomeIcon size="3x" icon={faDoorOpen} onClick={logout} />
                    Logout
                </div>
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

            <StatusBarBottom>
                <div>
                    <FontAwesomeIcon
                        size="3x"
                        icon={faHome}
                        onClick={() => clickHandler("/home")}
                    />
                    Home
                </div>
                <div>
                    <FontAwesomeIcon
                        style={{ color: "black" }}
                        size="3x"
                        icon={faListUl}
                        onClick={() => clickHandler("/todo")}
                    />
                    To-do
                </div>
                <div>
                    <FontAwesomeIcon
                        size="3x"
                        icon={faTasks}
                        onClick={() => clickHandler("/doing")}
                    />
                    Doing
                </div>
                <div>
                    <FontAwesomeIcon
                        size="3x"
                        icon={faCalendarCheck}
                        onClick={() => clickHandler("/complete")}
                    />
                    Done
                </div>
            </StatusBarBottom>
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logoutUser()),
        onCreateTask: (title, description) => dispatch(actions.createTask(title, description)),
    };
};

export default connect(null, mapDispatchToProps)(NewTask);

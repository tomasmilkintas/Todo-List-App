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
import moment from "moment";

const NewTask = (props) => {
    const [enteredTaskTitle, setEnteredTaskTitle] = useState("");
    const [enteredTaskDescription, setEnteredTaskDescription] = useState("");
    const [enteredDeadline, setEnteredDeadline] = useState("");

    const [taskTitleError, setTaskTitleError] = useState("");
    const [taskDescriptionError, setTaskDescriptionError] = useState("");

    const textErrorStyle = {
        color: taskTitleError === "" ? "white" : "red",
        fontSize: taskTitleError === "" ? "16px" : "16px",
        fontWeight: "400",
    };

    const taskAddHandler = () => {
        const notValidTaskTitle = taskTitleValidation(enteredTaskTitle);
        const notValidTaskDescription = taskDescriptionValidation(enteredTaskDescription);

        const adjustedDeadline = moment(enteredDeadline).format("MM/DD/YYYY h:mm a");
        // console.log(convertedDeadline);

        if (!notValidTaskTitle && !notValidTaskDescription) {
            props.history.push("/todo");
            props.onCreateTask(enteredTaskTitle, enteredTaskDescription, adjustedDeadline);
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

            <TitleText className="newTaskTitle">New Task</TitleText>

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
            <Text className="deadline"> Deadline: </Text>
            <Input
                type="datetime-local"
                value={enteredDeadline}
                onChange={(e) => {
                    setEnteredDeadline(e.target.value);
                }}
            />

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
        onCreateTask: (title, description, deadline) =>
            dispatch(actions.createTask(title, description, deadline)),
    };
};

export default connect(null, mapDispatchToProps)(NewTask);

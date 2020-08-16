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
    const [enteredTaskTitle, setEnteredTaskTitle] = useState(props.title || "");
    const [enteredTaskDescription, setEnteredTaskDescription] = useState(props.description);
    const [enteredDeadline, setEnteredDeadline] = useState(props.deadline);

    const [taskTitleError, setTaskTitleError] = useState("");
    const [taskDescriptionError, setTaskDescriptionError] = useState("");

    // useEffect / useRef perhaps for populating data as well as updating the input properly

    // redux-form  + field might be an option!

    const textErrorStyle = {
        color: taskTitleError === "" ? "white" : "red",
        fontSize: taskTitleError === "" ? "16px" : "16px",
        fontWeight: "400",
    };

    const taskUpdateHandler = () => {
        const notValidTaskTitle = taskTitleValidation(enteredTaskTitle);
        const notValidTaskDescription = taskDescriptionValidation(enteredTaskDescription);
        const adjustedDeadline = moment(enteredDeadline).format("MM/DD/YYYY h:mm a");

        if (!notValidTaskTitle && !notValidTaskDescription) {
            props.history.push("/todo");
            props.onUpdateTask(
                props.key,
                enteredTaskTitle,
                enteredTaskDescription,
                adjustedDeadline
            );
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

            <TitleText className="newTaskTitle">Update Your Task</TitleText>

            <TextInputContainer>
                <Text style={textErrorStyle}>{taskTitleError}</Text>

                <Input
                    type="text"
                    placeholder="Title..."
                    defaultValue={enteredTaskTitle}
                    onBlur={(e) => {
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

            <Button onClick={() => taskUpdateHandler()}>Confirm</Button>

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

const mapStateToProps = (state) => ({
    key: state.tasks.key,
    title: state.tasks.title,
    description: state.tasks.description || "",
    deadline: state.tasks.deadline,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logoutUser()),
        onUpdateTask: (key, title, description, deadline) =>
            dispatch(actions.updateTaskDetails(key, title, description, deadline)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);

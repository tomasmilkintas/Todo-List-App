import React from "react";

import StatusBarTop from "../../../stories/StatusBarTop";
import StatusBarBottom from "../../../stories/StatusBarBottom";
import Container from "../../../stories/Container";
import TitleText from "../../../stories/TitleText";

import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

import TasksDoing from "../../../API/TasksDoing";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faTasks,
    faCalendarCheck,
    faListUl,
    faUserCircle,
    faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

const Doing = (props) => {
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
            <TitleText id="doing">Tasks in Progress</TitleText>
            <TasksDoing />
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
                        size="3x"
                        icon={faListUl}
                        onClick={() => clickHandler("/todo")}
                    />
                    To-do
                </div>
                <div>
                    <FontAwesomeIcon
                        style={{ color: "black" }}
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
    tasksDoing: state.tasks.tasksDoing,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logoutUser()),
        onDeleteTask: (key, path) => dispatch(actions.deleteTask(key, path)),
        onMoveTaskToTodo: (key) => dispatch(actions.moveTaskToTodo(key)),
        onMoveTaskToComplete: (key) => dispatch(actions.moveTaskToComplete(key)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doing);

import React from "react";

import Button from "../../../stories/Button/index";
import StatusBarTop from "../../../stories/StatusBarTop";
import StatusBarBottom from "../../../stories/StatusBarBottom";
import Container from "../../../stories/Container";
import TitleText from "../../../stories/TitleText";

import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faTasks,
    faCalendarCheck,
    faListUl,
    faUserCircle,
    faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
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

            {/* <div className="content"> */}
            <TitleText id="name">Welcome Back, {props.firstName}!</TitleText>

            <Button onClick={() => clickHandler("/new")}>Add New Task</Button>
            <Button onClick={() => clickHandler("/todo")}>Tasks</Button>
            <Button onClick={() => clickHandler("/doing")}>Tasks in Progress</Button>
            <Button onClick={() => clickHandler("/complete")}>Completed Tasks</Button>
            {/* </div> */}

            <StatusBarBottom>
                <div>
                    <FontAwesomeIcon
                        style={{ color: "black" }}
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
    firstName: state.database.firstName,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logoutUser()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

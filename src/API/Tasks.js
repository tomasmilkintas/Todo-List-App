import React from "react";

import List from "../stories/List/index";
import ListItem from "../stories/List/ListItem/index";
// import Button from "../stories/Button";
// import Input from "../stories/Input";
// import firebaseInit from "./config/FirebaseInit";

import { connect } from "react-redux";
import { fetchTasks, createTask } from "../store/actions/taskActions";

const Tasks = (props) => {
    //LOGIC TO BE UPDATED & REMOVED TO NEW TASK

    // const taskAddHandler = () => {
    //     props.history.push("/new");
    // };
    // taskAddHandler() {
    //     // user reducer
    //     let userId = firebaseInit.auth().currentUser.uid;

    //     // database reducer
    //     let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks`);

    //     const newTask = {
    //         key: "",
    //         value: state.newTask.slice(),
    //     };

    //     const list = props.taskList;

    //     // database reducer
    //     tasksRef
    //         .push({
    //             ...newTask,
    //         })
    //         .then((res) => {
    //             newTask.key = res.key;
    //         });

    //     list.push(newTask);

    //     setState({
    //         list,
    //         newTask: "",
    //     });
    //     // props.createTask(...newTask);
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.newTask) {
    //         props.tasks.push(nextProps.newTask);
    //     }
    // }

    // handleKeyUp = (e) => {
    //     if (e.keyCode === 13) {
    //         taskAddHandler();
    //     }
    // };

    // const taskRemoveHandler = (key) => {
    //     let userId = firebaseInit.auth().currentUser.uid;

    //     const list = [...props.taskList];
    //     const updatedList = list.filter((item) => item.key !== key);
    //     setState({ list: updatedList });

    //     //database reducer
    //     let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks`);

    //     tasksRef.child(key).remove();
    // };

    // componentDidMount() {
    //     document.addEventListener("keydown", handleKeyUp, false);
    // }
    // componentWillUnmount() {
    //     document.removeEventListener("keydown", handleKeyUp, false);
    // }

    return (
        <div>
            <List>
                {props.taskList !== []
                    ? props.taskList.map((item) => {
                          return (
                              <ListItem key={item.key} taskId={item.key}>
                                  {item.value}

                                  {/* <span onClick={() => taskRemoveHandler(item.key)}>&#215;</span> */}
                              </ListItem>
                          );
                      })
                    : null}
            </List>
        </div>
    );
};

const mapStateToProps = (state) => ({
    taskList: state.tasks.taskList,
    newTask: state.tasks.task,
});

export default connect(mapStateToProps, { fetchTasks, createTask })(Tasks);

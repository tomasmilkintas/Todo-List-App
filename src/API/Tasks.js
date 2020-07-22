import React, { Component } from "react";

import List from "../stories/List/index";
import ListItem from "../stories/List/ListItem/index";
import Button from "../stories/Button";
import Input from "../stories/Input";
import firebaseInit from "./config/FirebaseInit";

import { connect } from "react-redux";
import { fetchTasks, createTask } from "../store/actions/taskActions";
import PropTypes from "prop-types";

class Tasks extends Component {
    //remove

    constructor(props) {
        super(props);
        this.state = {
            newTask: "",
            list: [],
        };
    }

    updateInput(key, value) {
        this.setState({
            [key]: value,
        });
    }

    taskAddHandler() {
        // user reducer
        let userId = firebaseInit.auth().currentUser.uid;

        // database reducer
        let tasksRef = firebaseInit
            .database()
            .ref("users/" + userId)
            .child("tasks");

        const newTask = {
            key: "",
            value: this.state.newTask.slice(),
        };

        const list = this.state.list;

        // database reducer
        tasksRef
            .push({
                ...newTask,
            })
            .then((res) => {
                newTask.key = res.key;
            });

        list.push(newTask);

        this.setState({
            list,
            newTask: "",
        });
        // this.props.createTask(...newTask);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.newTask) {
    //         this.props.tasks.push(nextProps.newTask);
    //     }
    // }

    taskRemoveHandler(key) {
        let userId = firebaseInit.auth().currentUser.uid;

        const list = [...this.state.list];
        const updatedList = list.filter((item) => item.key !== key);
        this.setState({ list: updatedList });

        //database reducer
        let tasksRef = firebaseInit
            .database()
            .ref("users/" + userId)
            .child("tasks");

        tasksRef.child(key).remove();
    }

    // componentDidMount() {
    //     this.props.fetchTasks();
    // }

    render() {
        return (
            <div>
                <Input
                    type="text"
                    placeholder="Type here..."
                    value={this.state.newTask}
                    onChange={(e) => this.updateInput("newTask", e.target.value)}
                />
                <Button onClick={() => this.taskAddHandler()}>Add</Button>
                <List>
                    {this.state.list !== []
                        ? this.state.list.map((item) => {
                              return (
                                  <ListItem key={item.key} taskId={item.key}>
                                      {item.value}

                                      <span onClick={() => this.taskRemoveHandler(item.key)}>
                                          &#215;
                                      </span>
                                  </ListItem>
                              );
                          })
                        : null}
                </List>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    tasklist: state.tasks.taskList,
    newTask: state.tasks.task,
});

Tasks.propTypes = {
    fetchTasks: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { fetchTasks, createTask })(Tasks);

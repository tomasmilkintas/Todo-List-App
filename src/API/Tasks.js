import React, { Component } from "react";

import List from "../stories/List/index";
import ListItem from "../stories/List/ListItem/index";
import Button from "../stories/Button";
import Input from "../stories/Input";
import firebaseInit from "./config/FirebaseInit";

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            newTask: "",
            list: [],
            key: "",
        };
    }

    updateInput(key, value) {
        this.setState({
            [key]: value,
        });
    }

    taskAddHandler() {
        let userId = firebaseInit.auth().currentUser.uid;
        let tasksRef = firebaseInit
            .database()
            .ref("users/" + userId)
            .child("tasks");
        // let refKey = tasksRef.push().key;

        const newTask = {
            id: 1 + Math.random(),
            value: this.state.newTask.slice(),
        };

        const list = [...this.state.list];
        list.push(newTask);

        tasksRef
            .push({
                ...newTask,
            })
            .then((res) => this.setState({ key: res.key }));

        this.setState({
            list,
            newTask: "",
        });
    }

    taskRemoveHandler(id) {
        let userId = firebaseInit.auth().currentUser.uid;

        const list = [...this.state.list];
        const updatedList = list.filter((item) => item.id !== id);
        this.setState({ list: updatedList });

        let tasksRef = firebaseInit
            .database()
            .ref("users/" + userId)
            .child("tasks");

        tasksRef.child(this.state.key).remove();
    }

    // databaseListener() {
    //     let userId = firebaseInit.auth().currentUser.uid;

    //     let tasksRef = firebaseInit.database().ref("tasks");
    //     tasksRef.on("value", function (snapshot) {
    //         snapshot.forEach(function (childSnapshot) {
    //             let childData = childSnapshot.val();
    //         });
    //     });
    // }

    // componentDidMount() {
    //     this.databaseListener();
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
                                  <ListItem key={item.id} taskId={item.id}>
                                      {item.value}
                                      <span onClick={() => this.taskRemoveHandler(item.id)}>
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

export default Tasks;

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
        let userId = firebaseInit.auth().currentUser.uid;
        let tasksRef = firebaseInit
            .database()
            .ref("users/" + userId)
            .child("tasks");

        const newTask = {
            key: "",
            value: this.state.newTask.slice(),
        };

        const list = this.state.list;

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

        // WHAT I'M TRYING TO UTILISE
        // tasksRef.on("child_added", (data) => {
        //     list.push({
        //         key: data.key,
        //         value: data.val().value,
        //     });
        //     console.log(data.key, data.val().value);
        //     this.setState({
        //         list,
        //         newTask: "",
        //     });
        // });

        // FOR GETTING INITIAL DATA
        // tasksRef.once("value", (snapshot) => {
        //     snapshot.forEach((childSnapshot) => {
        //         let childData = childSnapshot.val().value;
        //         let childKey = childSnapshot.key;
        //         console.log(childData, childKey);
        //     });
        // });
    }

    taskRemoveHandler(key) {
        let userId = firebaseInit.auth().currentUser.uid;

        const list = [...this.state.list];
        const updatedList = list.filter((item) => item.key !== key);
        this.setState({ list: updatedList });

        let tasksRef = firebaseInit
            .database()
            .ref("users/" + userId)
            .child("tasks");

        tasksRef.child(key).remove();
    }

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

export default Tasks;

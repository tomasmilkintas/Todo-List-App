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
            id: 1 + Math.random(),
            value: this.state.newTask.slice(),
        };

        const list = [...this.state.list];
        list.push(newTask);

        tasksRef.set({
            ...this.state.list,
        });

        this.setState({
            list,
            newTask: "",
        });
    }

    taskRemoveHandler(id) {
        const list = [...this.state.list];
        const updatedList = list.filter((item) => item.id !== id);
        this.setState({ list: updatedList });
        // let userId = firebaseInit.auth().currentUser.uid;
        // let tasksRef = firebaseInit
        //     .database()
        //     .ref("users/" + userId)
        //     .child("tasks");

        // tasksRef.remove({
        //     updatedList,
        // });
    }

    // componentDidMount() {
    //     const previousList = this.state.list;
    //     firebaseInit
    //         .database()
    //         .ref()
    //         .on("child_added", (snap) => {
    //             previousList.push({
    //                 id: snap.key,
    //                 newTask: snap.val().newTask,
    //             });
    //             this.setState({
    //                 list: previousList,
    //             });
    //         });
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
                    {this.state.list.map((item) => {
                        return (
                            <ListItem key={item.id} taskId={item.id}>
                                {item.value}
                                <span onClick={() => this.taskRemoveHandler(item.id)}>&#215;</span>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        );
    }
}

export default Tasks;

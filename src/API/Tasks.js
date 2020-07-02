import React, { Component } from "react";

import List from "../stories/List/index";
import ListItem from "../stories/List/ListItem/index";
import Form from "../stories/Form/index";
import Button from "../stories/Button";
import Input from "../stories/Input";

class Tasks extends Component {
    taskAddHandler = () => {};

    taskRemoveHandler = () => {};

    render() {
        return (
            <Form>
                <Input />
                <Button onClick={() => this.taskAddHandler()}>Submit</Button>
                <List>
                    <ListItem>
                        Item <span onClick={() => this.taskRemoveHandler}> &#215; </span>
                    </ListItem>
                </List>
            </Form>
        );
    }
}

export default Tasks;

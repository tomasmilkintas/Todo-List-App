import React from "react";

import List from "./index";
import ListItem from "./ListItem/index";
import Header from "../Theme/Header";
import { storiesOf } from "@storybook/react";

// items hard-coded for now
const items = [1, 2, 3, 4];

const mappedItems = items.map((item) => {
    return <ListItem> List Item{item} </ListItem>;
});

storiesOf("List", module)
    .add("Default", () => <List>My List</List>)
    .add("List Items", () => <List> {mappedItems}</List>)
    .add("List Items With Header", () => (
        <List>
            <Header> MY LIST </Header>
            {mappedItems}
        </List>
    ));

import React from "react";

import List from "./index";
import Header from "../Theme/Header";
import { storiesOf } from "@storybook/react";
import { mappedItems } from "./mappedItems/mappedItems";

storiesOf("List", module)
    .add("Default", () => <List>My List</List>)
    .add("List Items", () => <List> {mappedItems}</List>)
    .add("List Items With Header", () => (
        <List>
            <Header> MY LIST </Header>
            {mappedItems}
        </List>
    ));

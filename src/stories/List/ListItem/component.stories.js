import React from "react";

import ListItem from "./index";
import { storiesOf } from "@storybook/react";
import { colours, mystyle } from "../../Colours/index";

storiesOf("List Item", module)
    .add("Default", () => <ListItem>List Item</ListItem>)
    .add("Primary", () => (
        <ListItem style={mystyle(colours.primaryColours.Sky, "white")}>List Item</ListItem>
    ));

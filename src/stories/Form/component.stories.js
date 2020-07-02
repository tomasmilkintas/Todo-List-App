import React from "react";

import Form from "./index";
import { storiesOf } from "@storybook/react";
import { colours, mystyle } from "../Colours/index";

storiesOf("Form", module)
    .add("Default", () => <Form></Form>)
    .add("Primary", () => <Form style={mystyle(colours.primaryColours.Sky, null)}></Form>);

import React from "react";

import Container from "./index";
import { storiesOf } from "@storybook/react";
import { colours, mystyle } from "../Colours/index";
import StatusBarTop from "../StatusBarTop";
import Form from "../Form";
import StatusBarBottom from "../StatusBarBottom";

storiesOf("Container", module)
    .add("Default", () => <Container></Container>)
    .add("Primary", () => <Container style={mystyle(colours.primaryColours.Sky, null)}></Container>)
    .add("Primary Layout", () => (
        <Container style={mystyle(colours.primaryColours.Sky, null)}>
            <StatusBarTop />
            <Form />
            <StatusBarBottom />
        </Container>
    ));

import React from "react";

import StatusBarTop from "./index";
import { storiesOf } from "@storybook/react";
import { colours, mystyle } from "../Colours/index";

storiesOf("StatusBarTop", module)
    .add("Default", () => <StatusBarTop>Icon</StatusBarTop>)
    .add("Primary", () => (
        <StatusBarTop style={mystyle(colours.primaryColours.Sky, "white")}>Icon</StatusBarTop>
    ));

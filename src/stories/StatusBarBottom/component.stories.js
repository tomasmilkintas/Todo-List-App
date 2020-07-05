import React from "react";

import StatusBarBottom from "./index";
import { storiesOf } from "@storybook/react";
import { colours, mystyle } from "../Colours/index";

storiesOf("StatusBarBottom", module)
    .add("Default", () => <StatusBarBottom>Icon</StatusBarBottom>)
    .add("Primary", () => (
        <StatusBarBottom style={mystyle(colours.primaryColours.Sky, "white")}>Icon</StatusBarBottom>
    ));

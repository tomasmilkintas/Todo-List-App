import React from "react";

import TextArea from "./index";
import { storiesOf } from "@storybook/react";
import { colours, mystyle } from "../Colours/index";

storiesOf("TextArea", module)
    .add("Default", () => <TextArea>Icon</TextArea>)
    .add("Primary with text", () => (
        <TextArea style={mystyle(colours.primaryColours.Sky, "white")}>Primary Colours</TextArea>
    ));

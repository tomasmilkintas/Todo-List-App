import React from "react";

import TextInputContainer from "./index";
import { storiesOf } from "@storybook/react";
import { colours, mystyle } from "../Colours/index";
import Text from "../Text/index";

storiesOf("TextInputContainer", module)
    .add("Default", () => <TextInputContainer>Icon</TextInputContainer>)
    .add("Primary with text", () => (
        <TextInputContainer style={mystyle(colours.primaryColours.Sky, "white")}>
            <Text>Text in a box</Text>
        </TextInputContainer>
    ));

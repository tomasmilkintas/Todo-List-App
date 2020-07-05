import React from "react";

import { storiesOf } from "@storybook/react";

import { colours } from "../Colours/index";
import TitleText from ".";

storiesOf("Title Text", module)
    .add("Default", () => <TitleText> Title </TitleText>)
    .add("Primary Colour", () => (
        <TitleText style={{ color: colours.primaryColours.Sky }}>Title</TitleText>
    ));

import React from "react";

import { storiesOf } from "@storybook/react";

import { colours } from "../Colours/index";
import Text from ".";

storiesOf("Text", module)
    .add("Default", () => <Text> Lorem Ipsum </Text>)
    .add("Primary Colour", () => (
        <Text style={{ color: colours.primaryColours.Sky }}>Lorem Ipsum</Text>
    ));

import React from "react";

import Button from "./index";
import { storiesOf } from "@storybook/react";
import { colours, mystyle } from "../Colours/index";

const defaultProps = {
    label: "Button",
    onClick: () => null,
};

const withText = {
    text: "Submit",
};

storiesOf("Button", module)
    .add("Default", () => <Button {...defaultProps}>Default Button</Button>)
    .add("Submit", () => <Button {...defaultProps}> {withText.text} </Button>)
    .add("Primary", () => (
        <Button {...defaultProps} style={mystyle(colours.primaryColours.Sky, "white")}>
            {withText.text}
        </Button>
    ))
    .add("Disabled", () => (
        <Button {...defaultProps} style={mystyle(colours.neutralColours.Default, "white")}>
            Disabled
        </Button>
    ));

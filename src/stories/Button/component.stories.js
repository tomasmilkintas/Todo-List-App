import React from "react";

import Button from "./index";
import { storiesOf } from "@storybook/react";

const defaultProps = {
    label: "Button",
    onClick: () => null,
};

const withPrimary = {
    ...defaultProps,
    color: "primary",
};

const withDisabled = {
    ...defaultProps,
    // logic and colours to be added
    color: "see-through",
    disabled: true,
};

const withText = {
    text: "Submit",
};

storiesOf("Button", module)
    .add("Default", () => <Button {...defaultProps}></Button>)
    .add("Primary", () => <Button {...withPrimary}> </Button>)
    .add("Submit", () => <Button {...withPrimary}> {withText.text} </Button>)
    .add("Disabled", () => <Button {...withDisabled}> </Button>);

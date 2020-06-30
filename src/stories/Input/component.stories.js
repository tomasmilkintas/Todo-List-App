import React from "react";

import Input from "./index";
import { storiesOf } from "@storybook/react";

const defaultProps = {
    label: "Input",
    placeholder: "Placeholder...",
};

const withText = {
    ...defaultProps,
    type: "text",
    value: "Value",
};

const withPassword = {
    ...withText,
    type: "password",
};

const withEmail = {
    ...defaultProps,
    type: "email",
};

const withDisabled = {
    ...withText,
    disabled: true,
};

storiesOf("Input", module)
    .add("Placeholder", () => <Input {...defaultProps} />)
    .add("Value", () => <Input {...withText} />)
    .add("Password", () => <Input {...withPassword} />)
    .add("Checkbox", () => <Input type="checkbox" />)
    .add("Email", () => <Input {...withEmail} />)
    .add("Disabled", () => <Input {...withDisabled} />);

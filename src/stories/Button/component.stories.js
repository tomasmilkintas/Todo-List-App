import React from "react";

import { action } from "@storybook/addon-actions";
import StyledButton from "./index";

const defaultText = "Default";

export default {
    title: "Button",
    component: StyledButton,
};

export const Text = () => <StyledButton onClick={action("clicked")}>{defaultText}</StyledButton>;

export const Submit = () => <StyledButton onClick={action("submit")}> Submit </StyledButton>;

import React from "react";

import StyledInput from "./index";

export default {
    title: "Input",
    component: StyledInput,
};

export const Placeholder = () => <StyledInput type="text" placeholder="Placeholder..." />;

export const Value = () => <StyledInput type="text" value="Value" />;

export const Password = () => <StyledInput type="password" value="Password" />;

export const Email = () => <StyledInput type="email" placeholder="Email..." />;

export const Checkbox = () => <StyledInput type="checkbox" />;

export const Disabled = () => <StyledInput type="text" placeholder="Disabled" disabled />;

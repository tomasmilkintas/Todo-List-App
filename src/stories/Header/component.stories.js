import React from "react";

import StyledHeader from "./index";

export default {
    title: "Header",
    component: StyledHeader,
};

export const Default = () => <StyledHeader></StyledHeader>;

export const DefaultText = () => <StyledHeader>Default Text</StyledHeader>;

import React from "react";

import StyledTheme from "./component";

const Theme = (props) => {
    return <StyledTheme {...props}>{props.children}</StyledTheme>;
};

export default Theme;

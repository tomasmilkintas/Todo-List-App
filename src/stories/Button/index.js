import React from "react";

import StyledButton from "./component";

const Button = (props) => (
    <StyledButton {...props} onClick={props.clicked}>
        {props.children}
    </StyledButton>
);

export default Button;

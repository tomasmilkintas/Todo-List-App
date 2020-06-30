import React from "react";

import StyledForm from "./component";

const Form = (props) => {
    return <StyledForm {...props}>{props.children}</StyledForm>;
};

export default Form;

import React from "react";
import StyledInput from "./component";

const Input = (props) => {
    return (
        <StyledInput
            {...props}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
        />
    );
};

export default Input;

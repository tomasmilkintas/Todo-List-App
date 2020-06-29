import React from "react";
import Input from "./component";

const StyledInput = (props) => {
    return (
        <Input {...props} type={props.type} placeholder={props.placeholder} value={props.value} />
    );
};

export default StyledInput;

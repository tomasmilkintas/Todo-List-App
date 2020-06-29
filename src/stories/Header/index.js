import React from "react";
import Header from "./component";

const StyledHeader = (props) => {
    return <Header>{props.children}</Header>;
};

export default StyledHeader;

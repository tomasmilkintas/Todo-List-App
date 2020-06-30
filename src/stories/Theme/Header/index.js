import React from "react";
import StyledHeader from "./component";

const Header = (props) => {
    return <StyledHeader {...props}>{props.children}</StyledHeader>;
};

export default Header;

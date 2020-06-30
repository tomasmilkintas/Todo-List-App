import React from "react";

import StyledList from "./component";

const List = (props) => {
    return <StyledList {...props}>{props.children}</StyledList>;
};

export default List;

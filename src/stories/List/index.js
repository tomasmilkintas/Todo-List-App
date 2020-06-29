import React from "react";

import List from "./component";

const StyledList = (props) => {
    return <List>{props.children}</List>;
};

export default StyledList;

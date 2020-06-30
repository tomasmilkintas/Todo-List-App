import React from "react";

import StyledListItem from "./component";

const ListItem = (props) => {
    return <StyledListItem {...props}>{props.children}</StyledListItem>;
};

export default ListItem;

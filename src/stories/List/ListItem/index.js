import React from "react";

import ListItem from "./component";

const StyledListItem = (props) => {
    return <ListItem>{props.children}</ListItem>;
};

export default StyledListItem;

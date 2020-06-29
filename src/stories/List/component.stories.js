import React from "react";

import StyledList from "./index";
import StyledListItem from "./ListItem/index";
import StyledHeader from "../Header";

export default {
    title: "List",
    component: StyledList,
};

export const Default = () => <StyledList>My List</StyledList>;

export const Items = () => (
    <StyledList>
        <StyledListItem> Item 1 </StyledListItem>
        <StyledListItem> Item 2 </StyledListItem>
        <StyledListItem> Item 3 </StyledListItem>
        <StyledListItem> Item 4 </StyledListItem>
    </StyledList>
);

export const ItemsWithHeader = () => (
    <StyledList>
        <StyledHeader> MY LIST </StyledHeader>
        <StyledListItem> Item 1 </StyledListItem>
        <StyledListItem> Item 2 </StyledListItem>
        <StyledListItem> Item 3 </StyledListItem>
        <StyledListItem> Item 4 </StyledListItem>
    </StyledList>
);

import React from "react";

import Button from "./component";

const StyledButton = (props) => <Button onClick={props.clicked}>{props.children}</Button>;

export default StyledButton;

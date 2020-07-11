import React from "react";

import Box from "./index";
import { storiesOf } from "@storybook/react";
import { colours, mystyle } from "../Colours/index";
import Text from "../Text/index";

storiesOf("Box", module)
    .add("Default", () => <Box>Icon</Box>)
    .add("Primary with text", () => (
        <Box style={mystyle(colours.primaryColours.Sky, "white")}>
            <Text>Text in a box</Text>
        </Box>
    ));

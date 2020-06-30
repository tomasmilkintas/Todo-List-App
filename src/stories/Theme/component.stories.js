import React from "react";

import Theme from "./index";
import { storiesOf } from "@storybook/react";

import { colours } from "./Colours/index";

storiesOf("Theme", module)
    .add("Default Grey", () => <Theme />, {
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/o81kOZxE9ATVdaXvdRRrtN/Simple-Todo-List?node-id=4994%3A2639",
        },
    })
    .add("Primary Sky", () => <Theme style={{ backgroundColor: colours.primaryColours.Sky }} />)
    .add("Primary Mint", () => <Theme style={{ backgroundColor: colours.primaryColours.Mint }} />)
    .add("Primary Midnight", () => (
        <Theme style={{ backgroundColor: colours.primaryColours.Midnight }} />
    ))
    .add("Secondary Violet", () => (
        <Theme style={{ backgroundColor: colours.secondaryColours.Violet }} />
    ))
    .add("Secondary Purple", () => (
        <Theme style={{ backgroundColor: colours.secondaryColours.Purple }} />
    ))
    .add("Secondary Sunshine", () => (
        <Theme style={{ backgroundColor: colours.secondaryColours.Sunshine }} />
    ))
    .add("Secondary Red", () => <Theme style={{ backgroundColor: colours.secondaryColours.Red }} />)
    .add("Neutral Graphite", () => (
        <Theme style={{ backgroundColor: colours.neutralColours.Graphite }} />
    ))
    .add("Neutral Snow", () => <Theme style={{ backgroundColor: colours.neutralColours.Snow }} />)
    .add("Neutral White", () => (
        <Theme style={{ backgroundColor: colours.neutralColours.White }} />
    ));

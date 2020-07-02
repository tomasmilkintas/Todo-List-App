import React from "react";

import Header from "./index";

import { storiesOf } from "@storybook/react";

storiesOf("Header", module)
    .add("Default", () => <Header />)
    .add("Default Text", () => <Header>Default Text</Header>);

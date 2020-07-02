import React, { Component } from "react";

import Aux from "../Aux/Aux";

import Input from "../../stories/Input/index";
import Button from "../../stories/Button/index";
import Header from "../../stories/Header/index";
import Form from "../../stories/Form/index";

import { colours, mystyle } from "../../stories/Colours/index";
import Theme from "../../stories/Theme";

class Layout extends Component {
    render() {
        return (
            <Aux>
                {/* Layout to be updated, for now all in one place */}
                <Theme style={{ backgroundColor: colours.neutralColours.Graphite }}>
                    <Form style={{ backgroundColor: colours.primaryColours.Mint }}>
                        <Header> Magical List</Header>
                        <Input placeholder="placeholder..." />
                        <Button style={mystyle(colours.primaryColours.Sky, "white")}>Submit</Button>
                    </Form>
                </Theme>
            </Aux>
        );
    }
}

export default Layout;

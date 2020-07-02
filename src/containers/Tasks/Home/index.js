import React, { Component } from "react";

import List from "../../../stories/List/index";
import mappedItems from "../../../stories/List/mappedItems/mappedItems";
import Button from "../../../stories/Button/index";
import Header from "../../../stories/Header/index";
import { colours, mystyle } from "../../../stories/Colours/index";

class Home extends Component {
    render() {
        return (
            // visualising the home
            <div>
                <div id="status-bars-top"></div>

                <Header id="header"></Header>

                <div id="logo"></div>

                {/* if no tasks - */}
                <p id="text">
                    Looks like you don’t have any tasks, go ahead and create a new task!
                </p>
                {/* else - */}
                <List>{mappedItems}</List>

                <Button style={mystyle(colours.primaryColours.Sky, "white")}>Submit</Button>

                <div id="status-bars-bottom"></div>
            </div>
        );
    }
}

export default Home;

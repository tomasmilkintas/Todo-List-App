import React, { Component } from "react";

import List from "../../../stories/List/index";
import { mappedItems } from "../../../stories/List/mappedItems/mappedItems";
import Button from "../../../stories/Button/index";
import Header from "../../../stories/Header/index";
import { colours, mystyle } from "../../../stories/Colours/index";

import fire from "../../../API/config/Fire";
import { Redirect } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
        localStorage.clear();
        this.setState({ redirect: true });
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        }
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

                <Button onClick={this.logout}>Logout</Button>

                <div id="status-bars-bottom"></div>
            </div>
        );
    }
}

export default Home;

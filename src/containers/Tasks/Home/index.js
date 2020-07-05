import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebaseInit from "../../../API/config/FirebaseInit";

import List from "../../../stories/List/index";
import Button from "../../../stories/Button/index";
import StatusBarTop from "../../../stories/StatusBarTop";
import { colours, mystyle } from "../../../stories/Colours/index";
import { mappedItems } from "../../../stories/List/mappedItems/mappedItems";
import StatusBarBottom from "../../../stories/StatusBarBottom";
import Text from "../../../stories/Text";
import Container from "../../../stories/Container";
import TitleText from "../../../stories/TitleText";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
        this.logout = this.logout.bind(this);
    }

    logout() {
        firebaseInit.auth().signOut();
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
            <Container>
                <StatusBarTop>Icons</StatusBarTop>

                <TitleText>Home</TitleText>

                <div id="logo"></div>

                {/* if no tasks - */}
                <Text>Looks like you don’t have any tasks, go ahead and create a new task!</Text>
                {/* else - */}
                <List>{mappedItems}</List>

                <Button style={mystyle(colours.primaryColours.Sky, "white")}>Submit</Button>
                <Button onClick={this.logout}>Logout</Button>

                <StatusBarBottom>Icons</StatusBarBottom>
            </Container>
        );
    }
}

export default Home;

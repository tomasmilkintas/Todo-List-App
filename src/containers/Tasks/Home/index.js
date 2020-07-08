import React, { Component } from "react";
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
            firstName: "",
        };
        this.logout = this.logout.bind(this);
        this.profileHandler = this.profileHandler.bind(this);
    }

    logout() {
        firebaseInit.auth().signOut();
        localStorage.clear();
        this.props.history.push("/");
    }

    profileDisplayHandler() {
        let userId = firebaseInit.auth().currentUser.uid;

        let ref = firebaseInit.database().ref("users/" + userId);

        ref.on(
            "value",
            (data) => {
                let values = data.val();
                this.setState({ userId: values.userId });
                this.setState({ firstName: values.firstName });
                this.setState({ lastName: values.lastName });
                this.setState({ email: values.email });
            },
            (err) => console.log(err)
        );
    }

    profileHandler() {
        this.props.history.push("/profile");
    }

    authListener() {
        firebaseInit.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ firstName: user.displayName });
            } else {
                this.setState({ firstName: null });
            }
        });
    }

    componentDidMount() {
        this.authListener();
    }

    render() {
        return (
            // visualising the home
            <Container>
                <StatusBarTop>
                    <Button onClick={this.profileHandler}>Profile</Button>
                </StatusBarTop>

                <TitleText id="name">Hello, {this.state.firstName}</TitleText>

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

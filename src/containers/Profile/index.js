import React, { Component } from "react";

import Text from "../../stories/Text";
import Button from "../../stories/Button/index";
import Container from "../../stories/Container";
import TitleText from "../../stories/TitleText";
import firebaseInit from "../../API/config/FirebaseInit";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            email: "",
            firstName: "",
            lastName: "",
        };
    }

    returnHandler(event) {
        event.preventDefault();
        this.props.history.push("/home");
    }
    updateHandler(event) {
        event.preventDefault();
        // logic for updating user to be added shortly
    }

    authListener() {
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

    componentDidMount() {
        this.authListener();
    }

    render() {
        return (
            <Container>
                <TitleText>Profile Summary</TitleText>

                <Text>
                    <b>UserId: </b>
                    {this.state.userId}
                </Text>
                <Text>
                    <b>Your Name: </b>
                    {this.state.firstName}
                </Text>
                <Text>
                    <b>Your Surnam: </b>
                    {this.state.lastName}
                </Text>

                <Text>
                    <b>Email: </b>
                    {this.state.email}
                </Text>

                <Button onClick={(e) => this.updateHandler(e)}>Update Profile</Button>
                <Button onClick={(e) => this.returnHandler(e)}>Go Back &#10226;</Button>
            </Container>
        );
    }
}

export default Profile;

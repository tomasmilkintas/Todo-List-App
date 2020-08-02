import React from "react";

import TitleText from "../../stories/TitleText";
import Text from "../../stories/Text";
import Button from "../../stories/Button";
import TextInputContainer from "../../stories/TextInputContainer";
import Container from "../../stories/Container";

const Welcome = (props) => {
    const clickHandler = (path) => {
        props.history.push(path);
    };
    return (
        <Container>
            <TitleText className="welcomeTitle">Welcome</TitleText>
            <Text className="welcomeText">A nice simple to-do list app for you!</Text>

            <TextInputContainer id="welcome">
                <Button onClick={() => clickHandler("/login")}>Login</Button>
                <Button onClick={() => clickHandler("/signup")}>Signup</Button>
            </TextInputContainer>
        </Container>
    );
};

export default Welcome;

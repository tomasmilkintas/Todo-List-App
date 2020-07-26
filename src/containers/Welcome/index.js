import React from "react";

import TitleText from "../../stories/TitleText";
import Form from "../../stories/Form";
import Button from "../../stories/Button";
import TextInputContainer from "../../stories/TextInputContainer";

const Welcome = (props) => {
    const clickHandler = (path) => {
        props.history.push(path);
    };
    return (
        <Form>
            <TitleText>Welcome</TitleText>
            <TextInputContainer>
                <Button onClick={() => clickHandler("/login")}>Login</Button>
                <Button onClick={() => clickHandler("/signup")}>Signup</Button>
            </TextInputContainer>
        </Form>
    );
};

export default Welcome;

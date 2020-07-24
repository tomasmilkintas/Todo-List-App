import React from "react";

import TitleText from "../../stories/TitleText";
import Form from "../../stories/Form";
import Button from "../../stories/Button";
import TextInputContainer from "../../stories/TextInputContainer";

const Welcome = (props) => {
    const handleOnClickLogin = () => {
        props.history.push("/login");
    };

    const handleOnClickSingup = () => {
        props.history.push("/signup");
    };

    return (
        <Form>
            <TitleText>Welcome</TitleText>
            <TextInputContainer>
                <Button onClick={() => handleOnClickLogin()}>Login</Button>
                <Button onClick={() => handleOnClickSingup()}>Signup</Button>
            </TextInputContainer>
        </Form>
    );
};

export default Welcome;

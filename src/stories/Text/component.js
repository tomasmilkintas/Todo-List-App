import styled from "styled-components";

const StyledText = styled.p`
    text-align: center;
    font-size: 1.1em;
    padding: 0px 20px;
    height: 26px;

    &.profile {
        font-size: 1.43em;
    }

    &.top {
        margin-top: 15vh;
    }
    &.bottom {
        margin-bottom: 11vh;
    }

    &.deadline {
        padding: 0;
        margin: 10px auto 2px;
    }

    &.welcomeText {
        margin: 28vh auto;
    }

    &.resetText {
        margin-top: 25vh;
    }
`;

export default StyledText;

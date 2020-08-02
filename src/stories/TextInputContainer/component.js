import styled from "styled-components";

const StyledTextInputContainer = styled.div`
    width: inherit;

    &#welcome {
        display: flex;
        justify-content: space-evenly;
    }

    &.updateProfileTop {
        margin-top: 4vh;
    }

    &.updateTaskTop {
        margin: 4vh auto 5vh;
    }

    &.inputTop {
        margin-top: -3vh;
    }
    &.inputBottom {
        margin-bottom: 4vh;
    }

    &.resetInput {
        margin-bottom: 10vh;
    }
`;

export default StyledTextInputContainer;

import styled from "styled-components";
import { colours } from "../Colours/index";

const StyledStatusBarBottom = styled.section`
    width: 95%;
    height: 7vh;
    border: 1px solid ${colours.secondaryColours.Teal};
    border-radius: 6px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 6px auto;
    padding: 15px 0;
    background-color: white;

    & > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        color: grey;
    }
`;

export default StyledStatusBarBottom;

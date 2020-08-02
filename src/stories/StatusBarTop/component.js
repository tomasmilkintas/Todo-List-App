import styled from "styled-components";
import { colours } from "../Colours/index";

const StyledStatusBarTop = styled.section`
    width: 98.9%;
    height: 7vh;
    border: 1px solid ${colours.secondaryColours.Teal};
    border-radius: 6px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0px auto;
    padding: 15px 0;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0.4vw;

    & > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        color: black;
    }
`;

export default StyledStatusBarTop;

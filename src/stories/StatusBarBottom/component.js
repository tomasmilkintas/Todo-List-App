import styled from "styled-components";
import { colours } from "../Colours/index";

const StyledStatusBarBottom = styled.section`
    width: 98.9%;
    height: 7vh;
    border: 1px solid ${colours.secondaryColours.Teal};
    border-radius: 6px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0px auto;
    padding: 15px 0;
    background-color: white;

    margin-top: auto;
    position: sticky;
    bottom: 0;

    & > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        color: grey;
    }
`;

export default StyledStatusBarBottom;

import styled from "styled-components";
import { colours } from "../Colours/index";

const StyledStatusBarTop = styled.section`
    width: 95%;
    height: 7vh;
    border: 4px solid ${colours.secondaryColours.Teal};
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin: 6px auto;
    padding: 15px 0;
`;

export default StyledStatusBarTop;

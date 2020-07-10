import styled from "styled-components";
import { colours } from "../Colours/index";

const StyledStatusBarBottom = styled.section`
    width: 95%;
    height: 50px;
    border: 4px solid ${colours.secondaryColours.Teal};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -3px auto;
`;

export default StyledStatusBarBottom;

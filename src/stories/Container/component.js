import styled from "styled-components";
import { colours } from "../Colours/index";

const StyledContainer = styled.div`
    width: 99%;
    min-height: 99vh;
    height: 100%;
    outline: 2px solid ${colours.secondaryColours.Teal};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 3px auto;
    overflow: auto;
`;

export default StyledContainer;

import styled from "styled-components";
import { colours } from "../Colours/index";

const StyledContainer = styled.div`
    width: 99%;
    height: 99vh;
    outline: 2px solid ${colours.secondaryColours.Teal};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 3px auto;
`;

export default StyledContainer;

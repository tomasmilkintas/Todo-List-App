import styled from "styled-components";
import { colours } from "../Colours/index";

const StyledContainer = styled.div`
    width: 400px;
    height: 500px;
    border: 4px solid ${colours.secondaryColours.Teal};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export default StyledContainer;

import styled from "styled-components";
import { colours } from "../Colours/index";

const StyledForm = styled.form`
    width: 400px;
    height: 400px;
    border: 4px solid ${colours.secondaryColours.Teal};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export default StyledForm;

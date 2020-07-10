import styled from "styled-components";
import { colours } from "../Colours/index";

const StyledForm = styled.form`
    width: 99%;
    height: 99vh;
    outline: 2px solid ${colours.secondaryColours.Teal};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 3px auto;
`;

export default StyledForm;

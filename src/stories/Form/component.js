import styled from "styled-components";
import { colours } from "../Colours/index";

const StyledForm = styled.form`
    width: 99%;
    height: 99vh;
    outline: 2px solid ${colours.secondaryColours.Teal};
    display: flex;

    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    margin: 3px auto;
`;

export default StyledForm;

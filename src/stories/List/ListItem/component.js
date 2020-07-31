import styled from "styled-components";
import { colours } from "../../Colours/index";

const StyledListItem = styled.li`
    cursor: pointer;
    position: relative;
    padding: 12px 8px;
    list-style-type: none;
    transition: 0.2s;
    box-sizing: border-box;
    background: #eee;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 6px 0;
    border-radius: 5px;
    border: 1px solid;
    word-wrap: break-word;

    &:nth-child(odd) {
        background: #f9f9f9;
    }

    & > div {
        display: flex;
        color: white;
        background-color: ${colours.primaryColours.Midnight};
        justify-content: space-evenly;
        margin: 6px -8px -13px;
        padding: 6px;
    }

    & > span > b {
        padding-right: 5px;
    }

    & > #complete {
        text-decoration: line-through;
    }
`;

export default StyledListItem;

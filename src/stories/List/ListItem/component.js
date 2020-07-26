import styled from "styled-components";

const StyledListItem = styled.li`
    cursor: pointer;
    position: relative;
    padding: 12px 8px;
    list-style-type: none;
    transition: 0.2s;
    box-sizing: border-box;
    background: #eee;
    width: 400px;
    /* text-align: center; */
    display: flex;
    justify-content: center;

    &:nth-child(odd) {
        background: #f9f9f9;
    }
`;

export default StyledListItem;

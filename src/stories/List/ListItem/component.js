import styled from "styled-components";

const ListItem = styled.li`
    cursor: pointer;
    position: relative;
    padding: 12px 8px;
    list-style-type: none;
    transition: 0.2s;
    box-sizing: border-box;
    background: #eee;
    width: 200px;
    text-align: center;

    &:nth-child(odd) {
        background: #f9f9f9;
    }
`;

export default ListItem;

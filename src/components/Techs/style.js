import styled from "styled-components";

export const LiContainer = styled.li`
    background: var(--grey-4);
    padding: 15px;
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 5px;
    border-radius: 5px;

    :hover {
        background-color: var(--grey-2);
    }
    span {
        color: var(--grey-1);
        font-size: 0.8rem;
    }
    h1 {
        font-size: var(--title);
    }
`;
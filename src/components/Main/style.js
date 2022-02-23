import styled from "styled-components";

export const Container = styled.main`
    background-color: var(--grey-4);
    display: block;
    max-width: 700px;
    margin: 0 auto;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
    }
    h1 {
        font-size: var(--title);
        color: var(--grey-0);
    }
    ul {
        @media (min-width:1024px) {
            height: 370px;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: var(--grey-3);
        border-radius: 4px;
        height: 240px;
        overflow-y: scroll;
    }
`;

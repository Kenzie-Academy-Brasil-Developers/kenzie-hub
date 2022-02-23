import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const Form = styled.form`
    background-color: var(--grey-3);
    width: 80%;
    max-width: 400px;
    height: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1 {
        font-size: var(--title);
        color: var(--grey-0)
    }

    span {
        color: var(--grey-0);
        font-size: 0.8rem;
    }
`;
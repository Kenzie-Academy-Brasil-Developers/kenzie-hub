import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

     > div {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin-top: 50px;
        img {
            width: 90px;
        }
    }
`;

export const Form = styled.form`
    background-color: var(--grey-3);
    width: 80%;
    max-width: 400px;
    height: 600px;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    div {
        margin-top: 5px;
    }

    h1 {
        font-size: var(--title);
        color: var(--grey-0);
        margin-bottom: 15px;
    }

    span {
        color: var(--grey-1);
        font-size: 0.8rem;
    }
    label {
        width: 80%;
        color: var(--grey-0);
        font-size: 0.8rem;
    }
    select {
        padding: 8px;
        width: 80%;
        background-color: var(--grey-3);
        color: var(--grey-0);
    }
`;
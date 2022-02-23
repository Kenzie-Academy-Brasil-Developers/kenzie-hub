import styled from "styled-components";

export const Container = styled.aside`
    @media (min-width: 1024px) {
        left: 36%;
    }
    background-color: var(--grey-2);
    width: 90%;
    max-width: 342px;
    position: absolute;
    top: 25%;
    border-radius: 3.20867px 3.20867px 0px 0px;

    > div {
        padding: 15px;
    }
`;

export const Form = styled.form`
    @media (min-width: 1024px){
        height: 300px;
    }

    background-color: var(--grey-3);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 200px;
    width: 100%;

    > div {
        label {
            font-size: 0.7rem;
        }
    }
`;

export const SelectContainer = styled.div`
        width: 80%;
        display: block;
        margin: 0 auto;

    label {
        color: var(--grey-0);
        font-size: 0.7rem;
    }

    select {
        padding: 8px;
        width: 100%;
        background-color: var(--grey-3);
        color: var(--grey-0);
    }
`;


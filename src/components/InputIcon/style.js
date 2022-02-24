import styled, {css} from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: flex-start;

    label {
        color: var(--grey-0)
    }
`;

export const InputContainer =  styled.div`
    background-color: var(--grey-2);
    padding: 8px;
    width: 100%;  
    border-radius: var(--border-radius);  
    border: 1px solid transparent;
    display: flex;
    margin: 0 auto;
    transition: 0.5s;

    :focus-within {
        border: 1px solid var(--grey-0);
    }

    ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--color-primary);
    `}

    input {
        background-color: transparent;
        width: 100%;
        border: none;
        color: var(--grey-0);
    }
`; 
import styled from "styled-components";

export const Container = styled.button`
    width: ${props => props.width};
    padding: 7px;
    color: var(--grey-0);
    background: ${props => props.backgroundColor};
    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      background-color:  ${(props) => (props.hover)}
    }
`;
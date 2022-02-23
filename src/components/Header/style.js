import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--grey-4);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    border-bottom: 1px solid var(--grey-1);
    height: 100px;

    section {
        @media(min-width: 1024px){
         max-width:700px;
         flex-direction: row;
         margin: 0 auto;
         align-items: center;
        }

        display: flex;
        width: 90%;
        height: 50px;
        justify-content: space-between;
        flex-direction: column;
        margin-left: 15px;
        
    }

    h1 {
        font-size: var(--title);
        color: var(--grey-0);
    }
    span {
        color: var(--grey-1);
        font-size: 0.8rem;
    }
`;
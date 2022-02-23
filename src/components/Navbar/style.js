import styled from "styled-components";

export const Container = styled.nav`
    background-color: var(--grey-4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid var(--grey-1);

    section {
        @media(min-width: 1024px){
         max-width:700px;
         margin: 0 auto;
        }
        margin: 0 auto;
        display: flex;
        width: 90%;
        height: 50px;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    } 
`;
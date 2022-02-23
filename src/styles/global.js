import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body, input, button {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
    }
    a, li {
        text-decoration: none;
        list-style: none;
    }

    :root {
        --color-primary: #FF577f;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323f;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #F8F9FA;
        --sucess: #3fe864;
        --error: #e83f5b;

        --title: 1rem;
        --headline: 0.75rem;
        --border-radius: 5px
    }
`;
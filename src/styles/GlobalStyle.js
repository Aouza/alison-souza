import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    color: var(--main-text-color);
    
}

body, html{
    height: 100%;
    color: var(--main-text-color);
}

button, input{
    outline: none;
    border: 0;
    background: none;
    display: block;
}

button{
    cursor: pointer;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

h1, h2, h3, h4, h5, h6{
    color: var(--main-dark-gray);
}

:root{
    --main-color-black: #000;
    --main-dark-gray: #102d28;
    --main-color-white: #fff;
    --color-online: #6cea6c;
    --main-text-color: #163530;
    --main-color: #24dec0;
}
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    body {
        background-color: ${(props) => props.theme.base["background"]};
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: "Baloo 2", sans-serif;
        ;
    }
    p, span, button, input {
        font-family: "Roboto", sans-serif;
    }
`;

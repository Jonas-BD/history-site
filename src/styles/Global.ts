import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.black};
        font-family: ${({ theme }) => theme.fonts[0]};
        color: ${({ theme }) => theme.colors.text};
        margin: 0;
        padding: 0;
        font-size: 16px;

        h1 {
            font-family: ${({ theme }) => theme.fonts[1]};
        }
    }
`
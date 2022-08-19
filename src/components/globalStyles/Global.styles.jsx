import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Sofia", sans-serif;
}

body{
    font-size: 1.5rem;
    background: ${({ theme }) => theme.colors.mainColor}
}
`;

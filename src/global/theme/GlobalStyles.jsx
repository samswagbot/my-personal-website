import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`    
     body {
        border: ${p => p.theme.borders.mainBorder};
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
`
export default  GlobalStyles;

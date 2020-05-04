import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
    * {
        box-sizing: border-box;
    }
     body {
        border: ${p => p.theme.borders.mainBorder};
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        height: auto;
    }
`
export default  GlobalStyles;
